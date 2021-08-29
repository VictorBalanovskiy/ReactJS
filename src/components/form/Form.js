import { useState, useRef, useEffect } from "react";
import React from "react";
import "./Form.css";
import { TextField, Button } from "@material-ui/core";

export const Form = (props) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChangeAuthor = (e) => {
    setComment({ ...comment, author: e.target.value, id: e.target.value });
  };

  const handleChangeText = (e) => {
    setComment({ ...comment, text: e.target.value });
  };

  const handleChange = () => {
    props.handleChangeMessageList(comment);
    setComment({ author: "", text: "" });
  };

  const inputRef = useRef();

  return (
    <div className="myForm">
      <TextField
        className="myInput"
        margin="normal"
        type="text"
        onChange={handleChangeAuthor}
        label="AUTHOR"
      />
      <TextField
        autoFocus
        ref={inputRef}
        color="secondary"
        margin="normal"
        className="myTextarea"
        onChange={handleChangeText}
        id="standard-basic"
        placeholder="Message"
        label="MESSAGE"
      />
      <Button
        size="small"
        color="primary"
        variant="contained"
        className="myButton"
        onClick={handleChange}
      >
        Send
      </Button>
    </div>
  );
};
