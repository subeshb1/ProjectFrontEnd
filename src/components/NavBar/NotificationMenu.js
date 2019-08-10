import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import { IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 0 auto"
    }
  }
}));

// Will be adding notification feature
export default function NotificationMenu() {
  const { root } = useStyles();
  const [unread, setUnread] = useState(0);
  const fetchUnReadNotification = () => {
    axios.get("/api/v1/notification/unread_count").then(res => {
      setUnread(res.data.count);
    });
  };

  useEffect(() => {
    let interval = setInterval(() => fetchUnReadNotification(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={root}>
      <Link to="/notification">
        <IconButton
          style={{ color: "white", fontSize: "2rem" }}
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          <Badge badgeContent={unread.toString()} color="secondary">
            <Icon style={{ color: "white", fontSize: "2rem" }}>
              notifications
            </Icon>
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
}
