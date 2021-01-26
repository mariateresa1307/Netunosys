import React from "react";
import { AnimatedRoute } from "react-router-transition";

const Animate = ({ component, ...otherProps }) => {
  const comp = () => {
    return <div className="animated-route">{component}</div>;
  };

  return (
    <AnimatedRoute
      component={comp}
      {...otherProps}
      atEnter={{ offset: -100 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }}
      mapStyles={(styles) => ({
        width: "100%",
        minWidth: "360px",
        position: "absolute",
        zIndex: 2,
        marginTop: "48px",
        marginBottom: "80px",
        transform: styles.offset !== 0 ? `translateX(${styles.offset}%)` : ""
      })}
    />
  );
};

export default Animate;
