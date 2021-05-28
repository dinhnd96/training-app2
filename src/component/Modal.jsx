import { Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from 'yup';
import Table from "../assets/Bàn-trà-tròn-Turning-table-WT014-1.jpg";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          THÊM MỚI ĐỒ VẬT
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="d-flex">
              <div className="addvalue-dashboard-left d-flex flex-column">
                <div className="addvalue-dashboard-left-input">
                  <label htmlFor="firstName">Tên sản phẩm</label>
                  <Field name="firstName" placeholder="Jane" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </div>

                <label htmlFor="firstName">Tên viết tắt</label>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}

                <label htmlFor="firstName">Vị trí đặt sản phẩm</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                <label htmlFor="firstName">Hạn sử dung sản phẩm</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                <label htmlFor="firstName">Lựa chọn công dụng</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

              </div>
              <div className="addvalue-dashboard-right">
                <img src={Table} width="100%"></img>
              </div>
            </div>
            <div className="addvalue-dashboard-middle">
              <p>Mô tả đồ vật</p>
              <Field id="lastName" name="lastName" placeholder="Doe" /></div>

            <Modal.Footer className="justify-content-between">
              <Button onClick={props.onHide}>Hủy</Button>
              <Button type="submit">Lưu và thêm mới</Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;