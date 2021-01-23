import React, { useEffect } from "react";
import img1 from "../../assets/images/2logonet.png";

const IndexHome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <img
        src={img1}
        alt="Administradora yuruary"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "240px",
          maxWidth: "350px",
          width: "100%",
          marginBottom: "30px"
        }}
      />
    </>
  );
};

export default IndexHome;
