import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { ContainerLoad } from "components/Loading";

import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {},
  root: {
    margin: "10px auto",
    maxWidth: "900px",
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'

  },
  head: {
    fontWeight: "bold",
    alignContent: "center"
  },
  avatar: {
    width: '250px',
    height: '250px',
    fontSize: "3rem"

  },
}));

export default function Account() {
  const [state, setState] = useState({
    avatar: ""
  });
  const classes = useStyles();
  const [fetching, setFetching] = useState(false);
  const fetchAccountDetails = () => {
    setFetching(true);
    axios
      .get("api/v1/profile")
      .then(({ data: { basic_info: { avatar, name }, user } }) =>
        setState({
          avatar,
          name,
          ...user,
          role: user.role.split("_").join(" ")
        })
      )
      .finally(() => setFetching(false));
  };

  useEffect(fetchAccountDetails, []);
  if (fetching) return <ContainerLoad />;
  return (
    <div className={classes.root}>
      <AvatarViewer {...{avatar:state.avatar,name:state.name,fetchAccountDetails}}/>
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell className={classes.head}>User ID</TableCell>
              <TableCell>{state.uid}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.head}>Email</TableCell>
              <TableCell>{state.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.head}>Name</TableCell>
              <TableCell>{state.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.head}>Account Type</TableCell>
              <TableCell style={{ textTransform: "capitalize" }}>
                {state.role}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

const AvatarViewer = ({ avatar,fetchAccountDetails,name }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const uploadFile = (evt) => {
    let files = evt.target.files || evt.dataTransfer.files;
    if (files.length) {
      let data = new FormData();
      data.append("avatar", files[0]);
      axios
      .put("api/v1/profile/basic_info", data,{
        headers: { 'content-type': 'multipart/form-data' }
      })
      .then(response => {
        if (response.status === 200) {
          enqueueSnackbar("Avatar Changed!", {
            variant: "success",
            autoHideDuration: 2500
          });
          fetchAccountDetails()
        }
      })
      .catch(error => {
        console.error(error);
        let message = error.message.includes(422)
          ? "Submission failed"
          : "Unable to connect to the server";
        enqueueSnackbar(message, { variant: "error", autoHideDuration: 2500 });
      })
    }

    
  }
  

  return (
    <>
    <Avatar
      alt="Avatar"
      src={avatar}
      className={classes.avatar}
    >{name? name[0] : "U"}</Avatar>
    <div className="upload-btn-wrapper">
    <Button variant="contained" color="primary">
      Change Avatar
    </Button>
      <input type="file"  onChange={uploadFile}/>
      </div>
    </>
  );
};
