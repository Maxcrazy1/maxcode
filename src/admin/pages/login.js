import React, { useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Signup from "./Signup";
import { withRouter } from "react-router";
import { firebase, googleAuthProvider } from "../../firebase";
import Errores from "./../components/errores";
import { Auth } from "./../context/authContext";

const Login = ({ history }) => {
  const { Content, Footer } = Layout;
  const [signup, setsignup] = useState(false);

  const { usuario } = useContext(Auth);

  const [error, seterror] = useState("");

  useEffect(() => {
    if (usuario) {
      history.push("/panel");
    }
  }, [history, usuario]);

  const correoClave = async (values: any) => {
    const { usuario, clave } = values;

    await firebase
      .auth()
      .signInWithEmailAndPassword(usuario, clave)
      .then((result) => {
        history.push("/panel");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  const socialLogin = async (provider) => {
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Content
        style={{
          padding: "0 50px",
          marginTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 24,
            height: 450,
            width: 400,
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {!signup ? (
            <Form
              className="login-form"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={correoClave}
            >
              <Form.Item>
                <h1>Ingreso</h1>
              </Form.Item>
              {error ? (
                <Form.Item>
                  <Errores mensaje={error} />
                </Form.Item>
              ) : null}
              <Form.Item
                label="Username"
                name="usuario"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="clave"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
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
                  Enviar
                </Button>
                O{" "}
                <Button onClick={() => setsignup(true)} type="link">
                  Registrate Ahora!
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="danger"
                  htmlType="button"
                  className="login-form-button"
                  style={{ marginRight: 10 }}
                  onClick={() => socialLogin(googleAuthProvider)}
                >
                  Google
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Signup setsignup={setsignup} />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Creado por Nicolás Morales
      </Footer>
    </Layout>
  );
};
export default withRouter(Login);
