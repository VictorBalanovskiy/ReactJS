import { useState } from "react";
import React from 'react';

export const Form = () => {
    const [text, setText] = useState(0);
    const [comment, setComment] = useState([]);

    const myRef = React.createRef();

    const handleChangeText = () => {
        let currentCount = text;
        currentCount++;
        setText(currentCount);
    }

    const addComment = () => {
        let commentValue = myRef.currentCount.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myRef.current.value = "";
    }

    return (
        <>
            <h1>State</h1>
            <div>
                <button onClick={handleChangeText}>Click</button>
            </div>
            <div>
                {text % 2 === 0 ? 'even' : 'odd'}
            </div>
            <div>
                {text}
            </div>
            <div>
                <textarea ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    
                </ul>
            </div>
        </>
    );
    
};