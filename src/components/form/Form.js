import { useEffect, useState } from "react";
import React from 'react';
import './Form.css'

export const Form = () => {

    const myRef = React.createRef();
    const myRefAuthor = React.createRef();

    const [comment, setComment] = useState([]);

    let handleChange = (e) => {
        e.preventDefault();
        let list = {
            text: myRef.current.value,
            author: myRefAuthor.current.value,
        }
        let comments = [...comment, list];
        setComment(comments);
        myRef.current.value = "";
        myRefAuthor.current.value = "";
    }

    useEffect(() => {
        console.log('Добавлено сообщение');
    })

    return (
            <div className="myForm">
                <input className="myInput" type="text" placeholder="Author" ref={myRefAuthor}></input>
                <textarea className="myTextarea" ref={myRef} placeholder="Message"></textarea>
                <button className="myButton" onClick={handleChange}>Send</button>
            </div>
 )
    
};