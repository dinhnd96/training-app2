import React from "react";
import Modal from "react-bootstrap/Modal";

function UpdateProduct({ show, onHide, selectedProduct }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{selectedProduct?.id}</div>
                <div>{selectedProduct?.productDescription}</div>
                <div>{selectedProduct?.productName}</div>
                <div>{selectedProduct?.productUse}</div>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateProduct