import React, { useState } from "react";
import { Alert, Form, Input, Tooltip, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

import { InfoCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre no puede ir vacio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      telefono: Yup.string().required("El teléfono no puede ir vacio"),
      mensaje: Yup.string().required("El mensaje no puede ir vacio"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        {...layout}
        onFinish={formik.handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Nombre" name="nombre">
          <Input
            className="input-form"
            name="nombre"
            allowClear
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <Alert message={formik.errors.nombre} type="error" showIcon />
          ) : null}
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input
            suffix={
              <Tooltip title="Un correo se parece a esto: ejemplo@mail.com">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            className="input-form"
            name="email"
            allowClear
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <Alert message={formik.errors.email} type="error" showIcon />
          ) : null}
        </Form.Item>

        <Form.Item label="Teléfono" name="telefono">
          <Input
            className="input-form"
            name="telefono"
            allowClear
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.telefono && formik.errors.telefono ? (
            <Alert message={formik.errors.telefono} type="error" showIcon />
          ) : null}
        </Form.Item>

        <Form.Item label="Mensaje" name="mensaje">
          <TextArea
            rows={3}
            className="input-form"
            name="mensaje"
            allowClear
            value={formik.values.mensaje}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.mensaje && formik.errors.mensaje ? (
            <Alert message={formik.errors.mensaje} type="error" showIcon />
          ) : null}
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              background: "#f810e3",
              borderColor: "#f810e3",
              color: "#fff",
            }}
            block
          >
            Obtener información
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
