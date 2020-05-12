import React, { useState } from "react";

import NotificationsIcon from "@material-ui/icons/Notifications";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Popover,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Badge,
} from "@material-ui/core";

export const Notifications = ({ notifications }) => {
  const [anchorElem, setAnchorElem] = useState(null);

  const handleClick = (e) => setAnchorElem(e.target);
  const handleClose = () => setAnchorElem(null);

  if (!notifications) return <></>;

  const renderNotifications = () =>
    notifications.map((notification, index) => (
      <ListItem key={index}>
        <ListItemText
          primary={notification.data.message}
          secondary="Please follow instruction for payment in profile…"
        />
        {/* <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
      </ListItem>
    ));

  return (
    <>
      <li>
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </li>
      <Popover
        open={!!anchorElem}
        anchorEl={anchorElem}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List style={{ maxWidth: "300px" }} dense={true}>
          {renderNotifications()}
        </List>
      </Popover>
    </>
  );
};
