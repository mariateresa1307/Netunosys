import React from "react";
import CustomModal from "../../components/customModal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";



const ModalAlquiler = (props) => {
  


  return (
    <>
      <CustomModal header={" Gestionar Usuarios"} {...props}>
        Gestionar Usuarios
      </CustomModal>
    </>
  );
};

export default ModalAlquiler;
