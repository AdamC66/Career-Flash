import React from 'react'

function CommentItem({message, comment_time, foobar, profile}) {

    
    return (
        <div className={ foobar === 'owner' ? 'owner comment-bubble' : 'admin comment-bubble' } >
            <p className="comment-message"><strong>{ message }</strong></p>
            <p className="comment-time"><small>{ foobar } on { comment_time }</small></p>
        </div>
    )
}

export default CommentItem
