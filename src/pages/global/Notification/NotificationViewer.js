import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
    background: 'whitesmoke',
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
    },
    "& a": {
      textDecoration: 'underline',
      color: '#2a9ade'
    }
  },
  icon: {
    fontSize: '3.5em',
    color: '#32cd53',
    marginLeft: '-4vw'
  },
  fromTo: {
    display: 'inline-block',
    fontWeight: 'bold',
    width: 55,
    margin: '5px 10px 5px 0'
  },
  messageContainer: {
    boxShadow: "-2px 2px 8px #90afbc",
    padding: 20,
    background: 'white'
  },
  messageStyle: {
    '& h1': {
      textAlign: 'center',
      marginTop: '0.5em',
      background: 'linear-gradient(90deg, #004865, #32cd53)',
      color: 'white',
      fontVariantCaps: 'petite-caps',
    }
  },
}));

const useNotificationStyle = makeStyles(theme => ({
  notification: {
    overflow: 'hidden',
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

function NotificationSide({ id, status, current, from, message }) {
  const { notification, active } = useNotificationStyle();
  const div = document.createElement("div");
  div.innerHTML = message;
  return (
    <Link to={`/notification/${id}`}>
      <div className={`${notification} ${status && id !== current ? "" : active}`}>
        <div className="from"> <b>From:</b> {from}</div>
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
          <NotificationSide {...x} current={params.id} />
        ))}
      </div>
      <div className={classes.right}>
        <div>
          {params.id ? (
            <>
            <CheckCircleIcon className={classes.icon} />
            <div className={classes.messageContainer}>
              <div >
                <div>
                  <div className={classes.fromTo}>From </div>
                  : <i>{notification.from}
                  </i>
                </div>
                <div>
                  <div className={classes.fromTo}>To </div>
                  : <i>{notification.to}</i>
                </div>
              </div>
              <div className={classes.messageStyle} dangerouslySetInnerHTML={{ __html: notification.message }} />
            </div>
            </>
          ) : (
              <h1 className={classes.messageContainer}>
                {notifications.filter(x => !x.status).length} new notifications
            </h1>
            )}
        </div>
      </div>
    </div>
  );
}
