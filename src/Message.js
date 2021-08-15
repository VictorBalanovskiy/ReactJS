import './Message.css';

function Message(name) {
  return (
    <div className="App">
      <header className="App-header">
              This is my first ReactJS project<h3 className="App-h3">Hello, {name}!</h3>
      </header>
    </div>);
}

export default Message;