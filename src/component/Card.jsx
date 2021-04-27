import Card from 'react-bootstrap/Card'

function CardHomePage() {
    return (
        <Card className="bg-dark text-primary text-center">
            <Card.Img className="vh-100" src="https://elements-cover-images-0.imgix.net/032f9746-47a2-4308-9f65-6021239ea71d?auto=compress%2Cformat&fit=max&w=2038&s=4799054c05ac9d1c6dcc6d15e3e11b26" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title><h1>WELCOME TO</h1></Card.Title>
                <Card.Text>
                    <h2 className="text-Warning">NEW PRODUCT TEAM</h2>
                </Card.Text>
            </Card.ImgOverlay>
            <div className="underline">

            </div>
        </Card>
    );
}

export default CardHomePage;