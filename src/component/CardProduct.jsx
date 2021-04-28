import Button from 'react-bootstrap/Button'
function CardProduct() {
    return (
        <div className="Product">
            <div className="Product-img">
                <img src=""></img>
            </div>
            <div className="Product-content ">
                <h6>Sen đá</h6>
                <span className="active">Trang trí</span>
                <p className="text-start text-wrap">Đồ vật có thể dùng trang trí</p>
                <div className="add-product-hidden">
                    <Button variant="primary" type="submit" >

                        THÊM MỚI ĐỒ VẬT
                </Button>
                </div>
            </div>

        </div>
    );
}
export default CardProduct;