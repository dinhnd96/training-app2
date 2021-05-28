import { Field, Form, Formik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import * as Yup from "yup";
import axios from "../helpers/axios";
import LogoApp from "./logo";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const login = async (values) => {
  try {
    const { data } = await axios.post("http://localhost:27017/user/login", {
      username: values.username,
      password: values.password,
    });
    console.log("data", data);
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Đăng nhập thành công")
      
    } 
    
  } catch (error) {
    alert("Đăng nhập ngu vl");
    console.log("error", error);
  }
};

function LoginForm() {

  return (
    <Container className="d-flex m-auto justify-content-center h-80">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          login(values);
          // history.push("/");
        }}
      >
        {({ errors, touched }) => (
          <Form className=" validation-from">
            <LogoApp />
            <div className="pb-20">
              <i className="fa fa-user icon position-absolute"></i>
              <Field
                className="w-100 tid-15 "
                name="username"
                placeholder="Tên tài khoản"
              />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
            </div>
            <div className="pb-20">
              <i className="fas fa-key icon position-absolute"></i>
              <Field
                className="w-100 tid-15"
                name="password"
                placeholder="Mật khẩu"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <div className="password-progess-bar-input d-flex justify-content-between">
              <Button className="mw-150" type="submit" href="/register">
                TẠO TÀI KHOẢN
              </Button>
              <Button className="mw-150" type="submit">
                ĐĂNG NHẬP
              </Button>
            </div>
            <div className="position-absolute bottom-0 ml-60">
              <p>Một sản phẩm của New Product Team</p>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default LoginForm;
