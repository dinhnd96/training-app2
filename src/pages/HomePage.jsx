import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import celendar from "../assets/calendar-alt-solid.svg";
import Chair3 from "../assets/Chair3.jpg";
import Lotus from "../assets/Lotus.jpg";
import Table from "../assets/Bàn-trà-tròn-Turning-table-WT014-1.jpg";
import Calendar from "../component/Calendar";
import CardProduct from "../component/CardProduct";
import MyVerticallyCenteredModal from "../component/Modal";
import NavBarPage from "../component/NavBar";
import SideBar from "../component/SideBar";
import SideBarMobile from "../component/Sidebar-mobile";
import UpdateProduct from "../component/UpdateProduct";
import { editProduct } from "../redux/Product/ProductAction";
import _ from "lodash";

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
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));

    if (localData) {
      setData(localData);
    }
  }, []);
  const dispatch = useDispatch();
  const offlineData = useSelector((state) => state.product);
  const [onClickData, setOnClickData] = useState({});
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState(originData);

  const onCardClick = (value) => {
    dispatch(editProduct(value));
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
  function randomImg() {
    const newImg = [Chair3, Lotus, Table];
    const randomIndex = Math.trunc(Math.random() * 6);
    return newImg[randomIndex];
  }
  function addProduct(values) {
    const newProduct = {
      ...values,
      id: data.length + 1,
      img: randomImg(),
    };
    const newData = [...data, ...[newProduct]];
    setData(newData);
    setModalShow(false);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  const updateProduct = (values) => {
    const id = onClickData.id;
    const index = _.findIndex(data, function (o) {
      return o.id == id;
    });

    data[index] = {
      ...data[index],
      ...values,
      img: Chair3,
    };
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
    console.log("offlineData", offlineData);
  };

  const onDeleteProduct = () => {
    const id = onClickData.id;
    const index = _.findIndex(data, function (o) {
      return o.id == id;
    });
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setShow(false);
  };
  const onSearch = (keyWord) => {
    const newData = data;
    if (keyWord) {
      const abcd = _.filter(newData, function (o) {
        console.log("asdlkjhasdkjhasdkljhasd", o);
        return o.productName.indexOf(keyWord) !== -1;
      });
      setData(abcd);
    } else {
      const abcd = JSON.parse(localStorage.getItem("data"));
      setData(abcd);
    }
  };

  return (
    <Container>
      <SideBarMobile />
      <SideBar />
      <NavBarPage onSearch={onSearch} />
      <Container className="d-flex primary-color">
        <div className="row flex-grow-1">
          <div className=" Right-page col-sm-9 w-70 flex-grow-1">
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
