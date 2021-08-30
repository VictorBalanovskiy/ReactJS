import { Link } from "react-router-dom";

export const ChatList = ({ chats, chatId }) => (
  <div>
    {Object.keys(chats).map((id, i) => (
      <div key={i}>
        <Link to={`/chats/${id}`}>{chats[id].name}</Link>
      </div>
    ))}
  </div>
);
