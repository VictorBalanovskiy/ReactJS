import { useEffect, useState } from "react";
import React from 'react';
import './Form.css'
import { TextField, Button } from '@material-ui/core';

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
        console.log(myRef);
    }

    useEffect(() => {
        console.log('Добавлено сообщение');
    })

    return (
            <div className="myForm">
            <TextField className="myInput" margin='normal' type="text" inputRef={myRefAuthor} label="AUTHOR" />
            <TextField autoFocus color='secondary' margin='normal' className="myTextarea" inputRef={myRef} id="standard-basic" label="MESSAGE" />
            <Button size='small' color='primary' variant="contained" className="myButton" onClick={handleChange}>Send</Button>
            </div>
 )
    
};