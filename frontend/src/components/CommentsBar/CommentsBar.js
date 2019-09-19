import React, { useState } from 'react'
import CommentItem from './CommentItem'


function CommentsBar({ comments, handleSubmit }) {
    const [newComment, setNewComment] = useState({message: "", 'owner':1})

    const handleSend = () =>{

        setNewComment({...newComment, comment_time: Date.now()})
        handleSubmit(newComment)
    }

    const commentElements = comments.map((comment, i)=><CommentItem key={i} id={i} foobar={comment.first_name} message={comment.message} comment_time={comment.comment_time} profile={comment.profile}/>)

    return (
        <>
        <div>
            { commentElements }
        </div>
        <div className="new-comment">
          <textarea id="commentwindow" value={newComment.body} onChange={(e)=>setNewComment({...newComment, message: e.target.value})}/>
          <button onClick={()=>handleSend()}> Send </button>  
        </div>
        </>
    )
}

export default CommentsBar
