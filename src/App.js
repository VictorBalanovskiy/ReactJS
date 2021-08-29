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
    if (messageList.length !== 0) {
      const timeout = setTimeout(() => {
        console.log('ЧатБот: Сообщение отправил ' + messageList[messageList.length - 1].author)
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="App-header">
      <Chat messageList={messageList} />
      <div className='App-div'>
        <Form handleChangeMessageList={handleChangeMessageList} />
        <SimpleList />
      </div>
    </div>
  )
}

export default App;