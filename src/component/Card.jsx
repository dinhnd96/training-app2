import Card from "react-bootstrap/Card";
import BG from "../assets/welcome_bg.png";

function CardHomePage() {
  return (
    <Card className="bg-dark text-primary text-center">
      <Card.Img className="vh-100" src={BG} />
      <Card.ImgOverlay>
        <Card.Title>
          <h1>WELCOME TO</h1>
        </Card.Title>
        <Card.Text>
          <h2 className="text-Warning">NEW PRODUCT TEAM</h2>
        </Card.Text>
      </Card.ImgOverlay>
      <div className="underline"></div>
    </Card>
  );
}

export default CardHomePage;
