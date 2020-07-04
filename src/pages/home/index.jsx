import React, { Component } from "react";
import LogoNetuno from "../../assets/images/logo_netuno1.png";
import vid from "../../assets/vid/Fiber Optic Network Background - Royalty free footage.mp4";
import vide from "../../assets/vid/High Tech Digital Lines Background.mp4";
import { Animated } from "react-animated-css";
class index extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div className="contVid">
        <Animated
          animationIn="lightSpeedIn"
          animationOut="fadeOutDown"
          animationInDuration={1800}
          animationOutDuration={1800}
          isVisible={true}
          className="h1"
        >
          <img src={LogoNetuno} alt="" />
        </Animated>
        <video className="background-video" loop autoPlay muted>
          <source src={vide} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default index;
