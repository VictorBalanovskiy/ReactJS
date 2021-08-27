import { useState } from "react";
import React from 'react';
import './Form.css'
import { TextField, Button } from '@material-ui/core';

export const Form = (props) => {
    const [comment, setComment] = useState([]);
    
    const handleChangeAuthor = (e) => { setComment({ ...comment, author: e.target.value }) };

    const handleChangeText = (e) => { setComment({ ...comment, text: e.target.value }) };

    const handleChange = () => {
        props.handleChangeMessageList(comment);
        setComment({ author: '', text: '' });
    }

    return (
            <div className="myForm">
                <TextField className="myInput" margin='normal' type="text"  onChange={handleChangeAuthor} label="AUTHOR" />
                 <TextField autoFocus inputRef ={(input) => {if(input != null) {input.focus()}}} color='secondary' margin='normal' className="myTextarea" onChange={handleChangeText} id="standard-basic" label="MESSAGE" />
                <Button size='small' color='primary' variant="contained" className="myButton" onClick={handleChange}>Send</Button>
            </div>
 )
    
};