// import React from "react";
// import Modal from "react-bootstrap/Modal";

// function UpdateProduct({ show, onHide, selectedProduct }) {
//     return (
//         <Modal
//             show={show}
//             onHide={onHide}
//             dialogClassName="modal-90w"
//             aria-labelledby="example-custom-modal-styling-title"
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="example-custom-modal-styling-title">
//                     Custom Modal Styling
//             </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <div>{selectedProduct?.id}</div>
//                 <div>{selectedProduct?.productDescription}</div>
//                 <div>{selectedProduct?.productName}</div>
//                 <div>{selectedProduct?.productUse}</div>
//             </Modal.Body>
//         </Modal>
//     );
// }
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import Table from "../assets/Bàn-trà-tròn-Turning-table-WT014-1.jpg";

const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productShortName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productPlace: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productExp: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productUse: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productDescription: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function UpdateProduct(props) {
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
          productName: "",
          productShortName: "",
          productPlace: "",
          productExp: "",
          productUse: "",
          productDescription: "",
          img: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          props.addProduct(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="d-flex">
              <div className="addvalue-dashboard-left d-flex flex-column">
                <label htmlFor="productName">Tên sản phẩm</label>
                <Field name="productName" placeholder="Jane" />
                {errors.productName && touched.productName ? (
                  <div>{errors.productName}</div>
                ) : null}

                <label htmlFor="firstName">Tên viết tắt</label>
                <Field name="productShortName" />
                {errors.productShortName && touched.productShortName ? (
                  <div>{errors.productShortName}</div>
                ) : null}

                <label htmlFor="firstName">Vị trí đặt sản phẩm</label>
                <Field name="productPlace" type="productPlace" />
                {errors.productPlace && touched.productPlace ? (
                  <div>{errors.productPlace}</div>
                ) : null}

                <label htmlFor="firstName">Hạn sử dung sản phẩm</label>
                <Field name="productExp" type="productExp" />
                {errors.productExp && touched.productExp ? (
                  <div>{errors.productExp}</div>
                ) : null}

                <label htmlFor="firstName">Lựa chọn công dụng</label>
                <Field name="productUse" type="productUse" />
                {errors.productUse && touched.productUse ? (
                  <div>{errors.productUse}</div>
                ) : null}
                <label htmlFor="firstName">Lựa chọn công dụng</label>

                <Field type="file" id="myfile" name="img" />
                {errors.img && touched.img ? <div>{errors.img}</div> : null}
              </div>
              <div className="addvalue-dashboard-right">
                <img src={Table} width="100%"></img>
              </div>
            </div>
            <div className="addvalue-dashboard-middle">
              <label htmlFor="productDescription">Mô tả đồ vật</label>
              <Field
                id="productDescription"
                name="productDescription"
                placeholder="Doe"
              />
              {errors.productDescription && touched.productDescription ? (
                <div>{errors.productDescription}</div>
              ) : null}
            </div>

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
export default UpdateProduct;
