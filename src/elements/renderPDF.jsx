import React from "react";
import { ContactSupport as ContactSupportIcon } from "@material-ui/icons";

const renderPDF = (props) => {
  return props ? (
    <div
      style={{
        width: "100%",
        height: "700px",
        background: "gray"
      }}
    >
      --------- PDF ---------
    </div>
  ) : (
    <div style={{ textAlign: "center" }}>
      <ContactSupportIcon
        style={{
          fontSize: "150px",
          color: "#c3c3c3"
        }}
      />
      <p style={{ color: "#0000008a" }}>Seleccione una opción de búsqueda</p>
    </div>
  );
};

export default renderPDF;
