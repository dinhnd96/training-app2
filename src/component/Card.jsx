import Card from "react-bootstrap/Card";

function CardHomePage() {
  return (
    <Card className="text-primary text-center">
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
