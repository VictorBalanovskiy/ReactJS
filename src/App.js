import './App.css';
import { MessageList } from './components/messageList';
import { Form } from './components/form/Form';
import { SimpleList } from './components/simpleList/SimpleList'
// import Message from './Message.js';
// import { Counter } from './components/counter/';

const App = () => {
  return (
    <div className="App-header">
      {/* <Counter /> */}
      <MessageList />
      <Form />
      <SimpleList />
    </div>
  )
}

export default App;