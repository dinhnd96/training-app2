import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import LogoApp from "./logo";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  email: Yup.string().email("Invalid email").required("Required"),
});

const create = async (values) => {
  try {
    const { data } = await axios.post("http://localhost:2017/user/create", {
      username: values.username,
      email: values.email,
      password: values.password,
    });
    console.log("data", data);
    alert("Đăng ký thành công");
  } catch (error) {
    alert("Tên đăng nhập hoặc email đã được sử dụng");
    console.log("error", error);
  }
};
// const createUser = async () => {
//   try {
//     const { data } = await axios.post("http://localhost:2017/user/login", {
//       username: values.username,
//       password: values.password,
//     });
//     console.log("data", data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
function RegisterForm() {
  const history = useHistory();
  const backToLogin = () => {
    setTimeout(() => {
      history.push("/login");
    }, 1000);
  };
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Container className="d-flex m-auto justify-content-center h-80">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          // console.log(values);
          create(values);
          // history.push("/login");
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
            <div className="pb-20">
              <i className="fas fa-key icon position-absolute"></i>
              <Field
                className="w-100 tid-15 h-50 b-r99 bw-0"
                name="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="pb-20">
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
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
                checked={isChecked}
              />
              Show Password
            </div>
            <div className="password-progess-bar d-flex justify-content-between align-items-baseline pb-10">
              <div>
                <p>Mật khẩu đặt chuẩn</p>
              </div>
              <ProgressBar className="progess-bar">
                {errors.password && touched.password ? (
                  <ProgressBar striped variant="danger" now={50} key={1} />
                ) : (
                  <ProgressBar striped variant="success" now={100} key={2} />
                )}
              </ProgressBar>
            </div>
            <div className="password-progess-bar-input d-flex justify-content-between">
              <Button className="mw-150 h-50 b-r99" onClick={backToLogin}>
                ĐĂNG NHẬP
              </Button>
              <Button className="mw-150 h-50 b-r99" type="submit">
                TẠO TÀI KHOẢN
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
export default RegisterForm;
