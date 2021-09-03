import React, { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { SimpleList } from "./Components/simpleList/SimpleList";
import SimpleTabs from "./Components/simpleTabs/SimpleTabs";
import "./App.css";
import { Form } from "./Components/form/Form";
import { Chat } from "./Components/chat";
import { store } from "./Store";

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
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
