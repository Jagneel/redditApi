import React from 'react'
import moment from 'moment';
import ReactMarkdown from 'react-markdown';


export default function Comment(props) {
    const { comment } = props;
    return (
        <div className = 'comment'>
            <div className = 'comment-metadata'>
                <p className = 'comment-author'>{comment.author}</p>
                <p className = 'comment-created'>
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>
            <ReactMarkdown source = {comment.body} />
        </div>
    )
}
