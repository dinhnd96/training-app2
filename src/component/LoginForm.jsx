import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import * as Yup from "yup";
import axios from "../helpers/axios";
import LogoApp from "./logo";
import { useHistory } from "react-router-dom";

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
    const { data } = await axios.post("http://localhost:2017/user/login", {
      username: values.username,
      password: values.password,
    });
    console.log("data", data);
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Đăng nhập thành công");
    }
  } catch (error) {
    alert("Đăng nhập thất bại");
    console.log("error", error);
  }
};

function LoginForm() {
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    console.log("23213u210973210739278923897");
  });

  const backToRegister = () => {
    setTimeout(() => {
      history.push("/register");
    }, 1000);
  };
  const history = useHistory();

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
          setTimeout(() => {
            history.push("/");
          }, 1000);

          login(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className=" validation-from">
            <LogoApp />
            <div className="pb-20">
              <i className="fa fa-user icon position-absolute"></i>
              <Field
                className="w-100 tid-15 h-50 b-r99 bw-0"
                name="username"
                placeholder="Tên tài khoản"
              />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
            </div>
            <div className="pb-10">
              <i className="fas fa-key icon position-absolute"></i>
              <Field
                className="w-100 tid-15 h-50 b-r99 bw-0"
                name="password"
                placeholder="Mật khẩu"
                type={isChecked ? "text" : "password"}
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div className="pb-10">
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
                checked={isChecked}
              />
              Show Password
            </div>
            <div className="password-progess-bar-input d-flex justify-content-between">
              <Button className="mw-150 h-50 b-r99" onClick={backToRegister}>
                TẠO TÀI KHOẢN
              </Button>
              <Button className="mw-150 h-50 b-r99" type="submit">
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
