import React, { useState, createContext } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Portal,withStyles } from "@material-ui/core";

const loadBar = document.getElementById("load-bar");

const LoadContext = createContext();

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: 'black',
  },
  barColorPrimary: {
    backgroundColor: 'white',
  },
})(LinearProgress);

function LoadBar({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      { loading && (
        <Portal container={loadBar}>
          <ColorLinearProgress  />
        </Portal>
      )}
      <LoadContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoadContext.Provider>
    </>
  );
}

export {LoadContext}
export default LoadBar;
