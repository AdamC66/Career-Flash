import React, { useState } from 'react'
import MyDocument from '../../components/MyDocument/MyDocument';
import CommentsBar from '../../components/CommentsBar/CommentsBar';
import './document.css'
import main_url from '../../config';
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

    const checkLogin = () => {
        const userToken = window.localStorage['token']
        if(userToken !== 'null'){
            main_url.get('/api/profiles/', {
                headers: {
                    Authorization: `Token ${userToken}` 
                }
            })
            .then(res => {
                if (res.data[0].resume){
                    setResumeLink(res.data[0].resume.substr(50));
                }
                if (res.data[0].cover_letter){
                    setCoverLink(res.data[0].cover_letter.substr(50));
                }
                console.log(res.data)
            });
        }}
    let myDoc = <MyDocument path={documentType == "resume" ? resumeLink : coverLink} width={600}/>

    const handleChange = (doc) =>{
        setDocumentType(doc)
        if (doc == "coverLetter"){
            console.log(doc)
            myDoc = <MyDocument path={coverLink} width={600}/>
        }else{
            console.log(doc)
            myDoc = <MyDocument path={resumeLink} width={600}/>
        }
    }
    return (
        <div className="document-main-container">
        
            <div className="document-container">
            <button className="btn btn-primary" value="resume" onClick={()=> handleChange('resume')}>Resume</button>
            <button className="btn btn-primary" value="coverletter" onClick={()=> handleChange('coverLetter')} >CoverLetter</button>
            { myDoc }
            </div>
            <div className="comment-container">
                <CommentsBar comments={comments}/>
            </div>
        </div>
    )
}

