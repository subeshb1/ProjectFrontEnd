import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    maxHeight: "90vh",
    height: "90vh",
    overflowY: "hidden"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: "0",
    maxWidth: "300px",
    maxHeight: "90vh",
    overflowY: "auto",
    background: "#f1f1f1"
  },
  right: {
    flexDirection: "column",
    flexGrow: 12,
    padding: "10px",
    "& h1": {
      marginBottom: "2rem"
    },
    "& p": {
      fontSize: 18
    },
    "& > div": {
      maxWidth: 900,
      margin: "auto",
      "min-width": 400
    }
  }
}));

const useNotificationStyle = makeStyles(theme => ({
  notification: {
    padding: "10px",
    boxShadow: "0 0 2px",
    margin: "2px 10px",
    background: "white",
    cursor: "pointer",
    "&:hover": {
      background: "#f9f9f9"
    }
  },
  active: {
    fontWeight: "bold"
  }
}));

function NotificationSide({ id, status, from, message }) {
  const { notification, active } = useNotificationStyle();
  const div = document.createElement("div");
  div.innerHTML = message;
  return (
    <Link to={`/notification/${id}`}>
      <div className={`${notification} ${status ? "" : active}`}>
        <div className="from">From: {from}</div>
        <div className="message">
          {div.innerText.slice(0, 30).concat("...")}
        </div>
      </div>
    </Link>
  );
}

export default function NotificationViewer({ match: { params } }) {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);
  const [notification, setNotification] = useState({});

  const fetchNotification = () => {
    axios.get("/api/v1/notification").then(res => {
      setNotifications(res.data.notifications);
    });
  };

  useEffect(() => {
    fetchNotification();
    if (params.id) {
      axios.get(`/api/v1/notification/${params.id}`).then(res => {
        setNotification(res.data);
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        {notifications.map(x => (
          <NotificationSide {...x} />
        ))}
      </div>
      <div className={classes.right}>
        <div>
          {params.id ? (
            <div>
              <div>
                <div>From: {notification.from}</div>
                <div>To: {notification.to}</div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: notification.message }} />
            </div>
          ) : (
            <h1>
              {notifications.filter(x => !x.status).length} new notifications
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
