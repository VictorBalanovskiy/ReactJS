import { useState } from "react";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import { ChatList } from "../../components/chatList";

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
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <div>
        <h2>Chats</h2>
        <ChatList chats={chats} />

        <Switch>
          <Route exact path={path}>
            <h3>Please select a chat.</h3>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
