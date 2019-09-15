import React from 'react'

function CommentItem({message, comment_time, user, profile}) {

    
    return (
        <div className={ user === 'owner' ? 'owner comment-bubble' : 'admin comment-bubble' } >
            <p className="comment-message"><strong>{ message }</strong></p>
            <p className="comment-time"><small>{ user } on { comment_time }</small></p>
        </div>
    )
}

export default CommentItem
