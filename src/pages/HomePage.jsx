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
            <Container className="d-flex">
                <div className="Right-page">
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

                    </div>
                </div>
                <div className="Left-page">
                    <div className="Left-page-head d-flex">
                        <a className="mr-10" href="#"><img src={celendar} width="50"></img></a>
                        <h1>JUNE</h1>
                    </div>
                    <Calendar />
                    <div className="home-page-content-out-of-date">
                        <h5>SẢN PHẨM SẮP HẾT HẠN</h5>
                        <ul>
                            <li>Bàn ghế tròn - 14/07/2020</li>
                            <li>Bàn ghế tròn - 14/07/2020</li>
                            <li>Bàn ghế tròn - 14/07/2020</li>
                            <li>Bàn ghế tròn - 14/07/2020</li>
                        </ul>
                    </div>
                    <div className="home-page-content-contructor">
                        <h5>CẤU TRÚC PHÒNG CỦA TÔI</h5>
                        <div className="home-page-content-contructor-img">
                        </div>
                        <div className="bottom-0">
                            <p>Một sản phẩm của New Product Team</p>
                        </div>
                    </div>

                </div>
            </Container>
            <AddValue/>
        </Container>
    )
}
export default HomePage;