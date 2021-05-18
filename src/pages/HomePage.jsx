import Container from "react-bootstrap/Container";
import Table from "../assets/Bàn-trà-tròn-Turning-table-WT014-1.jpg";
import celendar from "../assets/calendar-alt-solid.svg";
import Chair3 from "../assets/Chair3.jpg";
import Lotus from "../assets/Lotus.jpg";
import Calendar from "../component/Calendar";
import CardProduct from "../component/CardProduct";
import MyVerticallyCenteredModal from "../component/Modal";
import NavBarPage from "../component/NavBar";
import SideBar from "../component/SideBar";
import SideBarMobile from "../component/Sidebar-mobile";

function HomePage() {
  const data = [
    {
      img: Lotus,
      name: "Sen Đá",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Chair3,
      name: "Ghế tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Table,
      name: "Bàn tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Table,
      name: "Bàn tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Lotus,
      name: "Sen Đá",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Chair3,
      name: "Ghế tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Table,
      name: "Bàn tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Table,
      name: "Bàn tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Lotus,
      name: "Sen Đá",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Chair3,
      name: "Ghế tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Table,
      name: "Bàn tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
    {
      img: Table,
      name: "Bàn tựa",
      decore: "Trang trí",
      description: "Một vật dụng bày trong phòng",
    },
  ];
  const renderCardProduct = () => {
    return data.map((value, index) => {
      return (
        <CardProduct
          img={value?.img}
          name={value?.name}
          decore={value?.decore}
          description={value?.description}
          key={index}
        />
      );
    });
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
              <i class="fas fa-plus-circle icon"></i>
              <MyVerticallyCenteredModal />
            </div>
            <div className="Main-content d-flex flex-wrap">
              {renderCardProduct()}
            </div>
          </div>
          <div className="Left-page col-3">
            <div className="Left-page-head d-flex pb-20 pt-60">
              <a className="mr-10" href="#">
                <img src={celendar} width="40"></img>
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
                ></img>
              </div>
              <div class="position-absolute bottom-0 fs-15">
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
