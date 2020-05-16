import React, { useState } from "react";

import NotificationsIcon from "@material-ui/icons/Notifications";
import CloseIcon from "@material-ui/icons/Close";
import {
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Badge,
  Box,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  deleteNotification,
  markNotifications,
} from "../../redux/actionCreators/signin";

const Notification = ({ notification, handleDelete }) => (
  <ListItem divider>
    <ListItemText
      primary={
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>{notification.data.title}</Box>
            <Box>
              <IconButton
                color="inherit"
                size="small"
                onClick={() => handleDelete(notification.id)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </>
      }
      secondary={
        <>
          <span className="d-block mb-2">
            {notification.data.message || ""}
          </span>
          {/* {notification.data.action && (
            <a
              className="d-block"
              href={notification.data.action.url}
              rel="noreferrer noopener"
            >
              {notification.data.action.key}
            </a>
          )} */}
          {notification.data.action && (
            <Button
              size="small"
              color="primary"
              href={notification.data.action.url}
              rel="noreferrer noopener"
            >
              {notification.data.action.key}
            </Button>
          )}
          <span className="d-block mt-2">
            {new Date(notification.created_at).toLocaleString(
              "en",
              "h:s dd/mm/Y"
            )}
          </span>
        </>
      }
    />
  </ListItem>
);

const Notifications = ({
  notifications,
  deleteNotification,
  markNotifications,
}) => {
  const [anchorElem, setAnchorElem] = useState(null);

  const handleClick = (e) => {
    if (!notifications.length) return false;

    const ids = notifications.map(({ id }) => id);
    markNotifications(ids);
    setAnchorElem(e.target);
  };
  const handleClose = () => setAnchorElem(null);

  const handleDelete = (id) => {
    deleteNotification(id);
  };

  if (!notifications) return <></>;

  const renderNotifications = () =>
    notifications.map((notification, index) => (
      <Notification
        key={index}
        notification={notification}
        handleDelete={handleDelete}
      />
    ));

  return (
    <>
      <li>
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={notifications.length} max={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </li>
      {notifications.length > 0 && (
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
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.currentUser.unread_notifications,
});

const mapDispatchToProps = (dispatch) => ({
  deleteNotification: (id) => dispatch(deleteNotification(id)),
  markNotifications: (notification_ids) =>
    dispatch(markNotifications(notification_ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
