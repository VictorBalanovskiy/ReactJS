export default function Chat(props) {
  return (
    <div className="Chat">
      {props.messageList.map((elem, i) => {
        return (
          <div key={i} id={i} className="chatMessage">
            <p className="chatId">ID: {elem.id}</p>
            <p className="chatAuthor">Name: {elem.author}</p>
            <p className="chatText">{elem.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export { Chat };
