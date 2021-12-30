import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Drawer } from "antd";
import ContactForm from "../forms/ContactForm";

const Contact = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        href="#"
        style={{
          background: "#10f86b",
          borderColor: "#10f86b",
          color: "#000",
        }}
        onClick={showDrawer}
      >
        Contactanos
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <h5 style={{ paddingTop: "20px" }}>Llena el siguiente formulario.</h5>
        <ContactForm />
      </Drawer>
    </>
  );
};

export default Contact;
