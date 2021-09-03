import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// import { Chat } from "../../components/chat";
import { ChatList } from "../../Components/chatList";

const initialChats = {
  id1: {
    name: "Chat1",
    messages: [{ text: "FirstMessage", author: "AUTHORS.BOT" }],
  },
  id2: {
    name: "Chat2",
    messages: [{ text: "FirstMessageHereToo!", author: "AUTHORS.ME" }],
  },
};

export const Chats = () => {
  const [chats] = useState(initialChats);
  const path = useRouteMatch();
  const chatId = useParams();

  // if (!chats[chatId]) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <div>
        <h2>Chats</h2>
        <ChatList chats={chats} chatId={chatId} />

        <Switch>
          <Route exact path={path}>
            <h3>Please select a chat.</h3>
          </Route>
        </Switch>
      </div>
      {/* <div>
        <Chat messages={chats[chatId].messages} />
      </div> */}
    </BrowserRouter>
  );
};
