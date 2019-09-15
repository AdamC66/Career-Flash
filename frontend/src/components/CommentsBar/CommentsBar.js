import React from 'react'
import CommentItem from './CommentItem'


function CommentsBar({ comments }) {
    const commentElements = comments.map((comment, i)=><CommentItem key={i} id={i} message={comment.message} comment_time={comment.comment_time} user={comment.user} profile={comment.profile}/>)
    
    return (
        <>
        <div>
            { commentElements }
        </div>
        <div className="new-comment">
          <textarea> </textarea>
          <button> Send </button>  
        </div>
        </>
    )
}

export default CommentsBar
