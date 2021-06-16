import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import celendar from "../assets/calendar-alt-solid.svg";
import Chair3 from "../assets/Chair3.jpg";
import Lotus from "../assets/Lotus.jpg";
import Calendar from "../component/Calendar";
import CardProduct from "../component/CardProduct";
import MyVerticallyCenteredModal from "../component/Modal";
import NavBarPage from "../component/NavBar";
import SideBar from "../component/SideBar";
import SideBarMobile from "../component/Sidebar-mobile";
import UpdateProduct from "../component/UpdateProduct";
const originData = [
  {
    id: 1,
    img: Lotus,
    productName: "Sen Đá",
    productUse: "Trang trí",
    productDescription: "Một vật dụng bày trong phòng",
  },
  {
    id: 2,
    img: Chair3,
    productName: "Ghế tựa",
    productUse: "Trang trí",
    productDescription: "Một vật dụng bày trong phòng",
  },
  {
    id: 3,
    img: Lotus,
    productName: "Sen Đá",
    productUse: "Trang trí",
    productDescription: "Một vật dụng bày trong phòng",
  },
  {
    id: 4,
    img: Chair3,
    productName: "Ghế tựa",
    productUse: "Trang trí",
    productDescription: "Một vật dụng bày trong phòng",
  },
];

function HomePage() {
  const dispatch = useDispatch();
  const offlineData = useSelector((state) => state.product);
  const [onClickData, setOnClickData] = useState({});
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState(originData);
  const [inOnMode, setIsOnMode] = useState(false);
  const onCardClick = (value) => {
    console.log(value);
    setShow(true);
    setOnClickData(value);
  };
  const renderCardProduct = () => {
    return data.map((value, index) => {
      return (
        <CardProduct
          id={value?.id}
          img={value?.img}
          productName={value?.productName}
          productUse={value?.productUse}
          productDescription={value?.productDescription}
          key={index}
          openModal={() => onCardClick(value)}
        />
      );
    });
  };

  function addProduct(values) {
    const newProduct = {
      ...values,
      id: data.length + 1,
      img: Chair3,
    };
    console.log("newProduct", newProduct);
    console.log(newProduct);
    const newData = [...data, ...[newProduct]];
    console.log(newData);
    setData(newData);
    setModalShow(false);
  }

  const updateProduct = (values) => {};

  const onDeleteProduct = () => {
    console.log(onClickData.id);
    data.splice(onClickData.id - 1, 1);
    console.log(data);
    setShow(false);
  };

  return (
    <Container>
      <SideBarMobile />
      <SideBar />
      <NavBarPage />
      <Container className="d-flex primary-color">
        <div className="row">
          <div className="Right-page col-sm-9 w-70">
            <div className="Add-item-btn justify-content-end mr-10">
              <i className="fas fa-plus-circle icon"></i>

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
                addProduct={addProduct}
              />
            </div>
            <div className="Main-content d-flex flex-wrap">
              {renderCardProduct()}

              <UpdateProduct
                updateProduct={updateProduct}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                onDelete={onDeleteProduct}
              />
            </div>
          </div>
          <div className="Left-page col-3">
            <div className="Left-page-head d-flex pb-20 pt-60">
              <a className="mr-10" href="/">
                <img alt="" src={celendar} width="40"></img>
              </a>
              <h4>JUNE</h4>
            </div>
            <Calendar />
            <div className="home-page-content-out-of-date pt-20">
              <h6>SẢN PHẨM SẮP HẾT HẠN</h6>
              <ul>
                <li>Bàn ghế tròn - 14/07/2020</li>
                <li>Bàn ghế tròn - 14/07/2020</li>
                <li>Bàn ghế tròn - 14/07/2020</li>
                <li>Bàn ghế tròn - 14/07/2020</li>
              </ul>
            </div>
            <div className="home-page-content-contructor">
              <h6>CẤU TRÚC PHÒNG CỦA TÔI</h6>
              <div className="home-page-content-contructor-img">
                <img
                  className="child"
                  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36256163.jpg"
                  width="200"
                  height="200"
                  alt=""
                ></img>
              </div>
              <div className="position-absolute bottom-0 fs-15">
                <p>Một sản phẩm của New Product Team</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
export default HomePage;
