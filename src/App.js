import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { Form } from './components/form/Form';
import {Chat} from './components/chat'
import { SimpleList } from './components/simpleList/SimpleList'

const App = () => {

  const [messageList, setMessageList] = useState([]);
  const handleChangeMessageList = (message) => { setMessageList([...messageList, message]) };

  useEffect(() => {  
    if (messageList.lenght !== 0) {
      const timeout = setTimeout(() => {
        console.log('ЧатБот: Сообщение отправил ')
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="App-header">
      <Chat messageList={messageList} />
      <Form handleChangeMessageList={handleChangeMessageList} />
      <SimpleList />
    </div>
  )
}

export default App;