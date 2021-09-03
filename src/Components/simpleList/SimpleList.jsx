import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { Chat1 } from "../../Screens/Chats/ChatsID/Chat1";
import { Chat2 } from "../../Screens/Chats/ChatsID/Chat2";
import "./simpleList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button component={Link} to="/chat1">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Chat1" />
          </ListItem>
          <ListItem button component={Link} to="/chat2">
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Chat2" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemLink>
        </List>
      </div>
      <Switch>
        <Route path="/chat1">
          <Chat1 />
        </Route>
        <Route path="/chat2">
          <Chat2 />
        </Route>
        <Route>
          <Redirect to="/Chats" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { SimpleList };
