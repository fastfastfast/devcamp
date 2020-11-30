import { Card, ListGroup, Tab, Row, Col, Image } from 'react-bootstrap';
import '../Styles/Play.css';
import NavBar from '../components/NavBar';
import Figure from 'react-bootstrap/Figure'

function Play() {
    return (
        <>
            <NavBar />
            <div className="Play">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={2}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1605831017"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1605757059"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1606422465"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    <Figure.Image
                                        src="https://www.appdisqus.com/wp-content/uploads/2020/09/00-5-1.jpg"
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content >
                                <Tab.Pane eventKey="#link1">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/dota2.png`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">DOTA2</h1>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/csgo.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">CS:GO</h1>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/amongUs.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">Among Us</h1>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/genshin.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">Genshin</h1>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>


    );
}

export default Play;