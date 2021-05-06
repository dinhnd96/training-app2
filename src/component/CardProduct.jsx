import Button from 'react-bootstrap/Button'
function CardProduct({img, name,decore,desription}) {
    return (
        <div className="Product">
            <div className="Product-img">
                <img src={img} width="100%"/>
            </div>
            <div className="Product-content ">
                <h6>{name}</h6>
                <span className="active">{decore}</span>
                <p className="text-start text-wrap">{desription}</p>
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