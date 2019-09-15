import React, { useState } from 'react'
import MyDocument from '../../components/MyDocument/MyDocument';
import CommentsBar from '../../components/CommentsBar/CommentsBar';
import './document.css'

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

    return (
        <div className="document-main-container">
            <div className="document-container">
                <MyDocument path="test.pdf" width={600}/>
            </div>
            <div className="comment-container">
                <CommentsBar comments={comments}/>
            </div>
        </div>
    )
}

