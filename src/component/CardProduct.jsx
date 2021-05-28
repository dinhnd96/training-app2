import MyVerticallyCenteredModal from "./Modal";
function CardProduct({ img, name, decore, description }) {
  return (
    <div className="Product">
      <div className="Product-img">
        <img alt="" src={img} width="100%" />
      </div>
      <div className="Product-content ">
        <h6>{name}</h6>
        <span className="active">{decore}</span>
        <p className="text-start text-wrap">{description}</p>
        <div className="add-product-hidden">
          <MyVerticallyCenteredModal />
        </div>
      </div>
    </div>
  );
}
export default CardProduct;
