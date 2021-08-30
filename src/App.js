import React, { useCallback } from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { SimpleList } from "./components/simpleList/SimpleList";
import SimpleTabs from "./components/simpleTabs/SimpleTabs";
import { Form } from "./components/form/Form";
import { Chat } from "./components/chat";

const App = ({ chats, chatId }) => {
  const getId = () => {
    return Math.random();
  };
  const [messageList, setMessageList] = useState([]);
  const handleChangeMessageList = useCallback(
    ({ author, text }) => {
      let newMessage = {
        id: getId(),
        author: author,
        text: text,
      };
      setMessageList([...messageList, newMessage]);
    },
    [messageList]
  );
  useEffect(() => {
    if (messageList.length !== 0) {
      const timeout = setTimeout(() => {
        console.log(
          "ЧатБот: Сообщение отправил " +
            messageList[messageList.length - 1].author
        );
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="App-header">
      <header>
        <SimpleTabs chats={chats} chatId={chatId} />
      </header>
      <Chat messageList={messageList} />
      <div className="App-div">
        <Form handleChangeMessageList={handleChangeMessageList} />
        <SimpleList />
      </div>
    </div>
  );
};

export default App;
