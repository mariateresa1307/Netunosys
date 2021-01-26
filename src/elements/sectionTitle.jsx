import React from "react";
import Typography from "@material-ui/core/Typography";

const SectionTittle = (props) => {
  return (
    <Typography variant="h4" style={{ color: "white" }}>
      {props.label}
    </Typography>
  );
};

export default SectionTittle;
