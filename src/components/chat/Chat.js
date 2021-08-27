export default function Chat(props) {
    return (
        <div className='Chat'>
        {props.messageList.map((elem, i) => {
          return <div key={i} className="chatMessage">
          <p className='chatAuthor'>{elem.author}</p>
          <p className='chatText'>{elem.text}</p>
          </div>
        })}
      </div>
    )
}

export { Chat };