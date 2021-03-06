import React, { useState, useEffect } from 'react'
import MyDocument from '../../components/MyDocument/MyDocument';
import CommentsBar from '../../components/CommentsBar/CommentsBar';
import './document.css'
import main_url from '../../config';
import Axios from 'axios';
export default function Document() {
    const [comments, setComments] = useState([
        {
        message:" This is a test",
        comment_time:"15-09-2018",
        user:"owner",
        profile:"is this needed?"},
        {
        message:" This is another test",
        comment_time:"15-09-2018",
        user:"admin",
        profile:"is this needed?"},])
    const [documentType, setDocumentType]= useState('resume')
    const [resumeLink, setResumeLink] = useState ("test.pdf")
    const [coverLink, setCoverLink] = useState ("test2.pdf")

    
    useEffect(() => {
        let userToken = window.localStorage['token']
        getComments('resume')
        // main_url.get('/api/commentsresume/',{
        //     headers: {
        //         Authorization: `Token ${userToken}` 
        //     }})
        //   .then((response) => {
        //       setComments(response.data)
        //     }).catch((e) =>{
        //         console.log("Error:", e)
        //         setComments([])

        //     }) 
    }, [])
            
    const checkLogin = () => {
        const userToken = window.localStorage['token']
        let url = '/api/profiles'
        let search = window.location.search;
        if (search){
            url = `/api/profiles${search}`
        }
        if(userToken !== 'null'){
            Axios.get(`http://localhost:8000/api/comments${search}`, {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                if (res.data[0].resume){
                    setResumeLink(res.data[0].resume.substr(16));
                }
                if (res.data[0].cover_letter){
                    setCoverLink(res.data[0].cover_letter.substr(15));
                }
                console.log(res.data)
            });
        }}

    const getComments = (doc) =>{
        const userToken = window.localStorage['token']
        let url = ''
        if(doc === "resume"){
            url = "/api/commentsresume/"
        }else{
            url = '/api/commentscoverletter/'
        }
        let search = window.location.search;
        if (search){
            url += search
        }
        main_url.get(url ,{
            headers: {
                Authorization: `Token ${userToken}` 
            }}).then((response) => {
              setComments(response.data)
              console.log('Comments',response.data)
            }).catch((e) =>{
                setComments([])
            }) 
    }


    let myDoc = <MyDocument path={documentType === "resume" ? resumeLink : coverLink} width={600}/>

    const handleChange = (doc) =>{
        setDocumentType(doc)
        if (doc === "coverLetter"){
            console.log(doc)
            getComments(doc)
            myDoc = <MyDocument path={coverLink} width={600}/>
        }else{
            console.log(doc)
            getComments(doc)
            myDoc = <MyDocument path={resumeLink} width={600}/>
        }
    }

    
    const handleSubmit = (newComment) =>{
        let userToken = window.localStorage['token']
        let url = ''
        if(documentType === "resume"){
            url = "/api/commentsresume/"
        }else if (documentType === 'coverLetter'){
            url = '/api/commentscoverletter/'
        }
            main_url.post(url, newComment,{
            headers: {
                Authorization: `Token ${userToken}`,
                'Content-Type' : 'application/json' 
            }
            
        }).then((response)=>{
            setComments([...comments, newComment])
        }).catch((e)=>{
            console.log(e) 
            alert("Sorry there was an error posting your comment")
        })
    }

    window.addEventListener('load', checkLogin) 

    return (
        <div className="document-main-container">
        
            <div className="document-container">
            <button className="btn btn-primary" value="resume" onClick={()=> handleChange('resume')}>Resume</button>
            <button className="btn btn-primary" value="coverletter" onClick={()=> handleChange('coverLetter')} >CoverLetter</button>
            { myDoc }
            </div>
            <div className="comment-container">
                <CommentsBar comments={comments} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

