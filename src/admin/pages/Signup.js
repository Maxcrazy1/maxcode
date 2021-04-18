import React, { useState } from "react";
import { Form, Input, Button } from "antd";

import { LockOutlined } from "@ant-design/icons";
import { firebase } from "../../firebase";

import { withRouter } from "react-router";
import Errores from "./../components/errores";

const Signup = ({ setsignup, history }) => {
  const [error, seterror] = useState("");
  const handleSignUp = async (values: any) => {
    const { usuario, clave } = values;

    await firebase
      .auth()
      .createUserWithEmailAndPassword(usuario, clave)
      .then((result) => {
        history.push("/");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  return (
    <Form
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleSignUp}
    >
      <Form.Item>
        <h1>Registro</h1>
      </Form.Item>
      {error ? (
        <Form.Item>
          <Errores mensaje={error} />
        </Form.Item>
      ) : null}
      <Form.Item
        label="Only user"
        name="usuario"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="clave"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ marginRight: 10 }}
        >
          Registrate
        </Button>
        O{" "}
        <Button onClick={() => setsignup(false)} type="link">
          Ingresa ahora!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(Signup);
