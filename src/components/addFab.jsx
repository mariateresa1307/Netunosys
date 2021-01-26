import React from "react";
import Fab from "@material-ui/core/Fab";
import { Spring } from "react-spring/renderprops";

const AddFab = (props) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1500}>
      {(springProps) => (
        <Fab
          onClick={props.onClick}
          variant="extended"
          color="primary"
          style={{
            position: "fixed",
            right: "40px",
            bottom: "40px",
            zIndex: 60,
            padding: "0 56px",
            transtionDuration: "2s",
            ...springProps
          }}
        >
          {props.children}
        </Fab>
      )}
    </Spring>
  );
};

export default AddFab;
