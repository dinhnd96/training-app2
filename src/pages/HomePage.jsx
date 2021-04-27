import Container from 'react-bootstrap/Container'
import SideBar from '../component/SideBar'
import NavBarPage from '../component/NavBar'
import Button from 'react-bootstrap/Button'
import CardProduct from '../component/CardProduct'
import Calendar from '../component/Calendar'
import celendar from '../assets/calendar-alt-solid.svg'
import AddValue from './AddValue'
function HomePage() {
    return (
        <Container>
            <SideBar />
            <NavBarPage />
            <Container className="d-flex primary-color">
                <div className="row">

                    <div className="Right-page col-9 w-70">
                        <div className="Add-item-btn d-flex justify-content-end mr-10">
                            <Button variant="primary" type="submit">
                                THÊM MỚI ĐỒ VẬT
                        </Button>
                        </div>
                        <div className="Main-content d-flex flex-wrap">
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />

                        </div>
                    </div>
                    <div className="Left-page col-3">
                        <div className="Left-page-head d-flex pb-20 pt-60">
                            <a className="mr-10" href="#"><img src={celendar} width="40"></img></a>
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
                                <img className ="child" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36256163.jpg" width="200" height="200"></img>
                            </div>
                            <div class="position-absolute bottom-0 fs-15"><p>Một sản phẩm của New Product Team</p></div>
                        </div>

                    </div>
                </div>
            </Container>
            <AddValue />
        </Container>
    )
}
export default HomePage;