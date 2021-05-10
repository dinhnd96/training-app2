import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import Table from "../assets/Bàn-trà-tròn-Turning-table-WT014-1.jpg";

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
      <Modal.Body className="d-flex">
        <div className="addvalue-dashboard-left">
          <div className="addvalue-dashboard-left-input">
            <p>Tên sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Tên viết tắt</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Tên sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Vị trí đặt sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Hạn sử dung sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input icon2">
            <p>Lựa chọn công dụng</p>
            <input></input>
          </div>
        </div>
        <div className="addvalue-dashboard-right">
          <img src={Table} width="100%"></img>
        </div>
      </Modal.Body>
      <div className="addvalue-dashboard-middle">
        <p>Mô tả đồ vật</p>
        <input></input>
      </div>
      <Modal.Footer className="justify-content-between">
        <Button onClick={props.onHide}>Hủy</Button>
        <Button onClick={props.onHide}>Lưu và thêm mới</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="tid-10"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        THÊM MỚI ĐỒ VẬT
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
