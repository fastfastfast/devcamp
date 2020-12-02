import { Card, ListGroup, Tab, Row, Col, Image, Button, CardDeck,Modal,Form } from 'react-bootstrap';
import '../Styles/Play.css';
import NavBar from '../components/NavBar';
import Figure from 'react-bootstrap/Figure'
import { firebase } from '../services/firebase'
import { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

function Play() {
    const [cardInfo, setCardInfo] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [date, onChange] = useState(new Date());
    const [time, onChange1] = useState();
    const [cardName, setCardName] = useState();

    const [bookingGameName, setbookingGameName] = useState("dota2");

    const onSubmitDate = e => {
        e.preventDefault()
        firebase.database().ref(`/booking/${cardName}`).push({date : date.toString().substring(0, 15), game : bookingGameName, name: "two", time: time})
        console.log(date);
        console.log(time);
    }

    const renderCard = (card, index) => {
        {/*loop display card namd and description*/ }
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        Booking
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Selected Time</Modal.Title>
                        </Modal.Header>
                        <h4>
                            choose day
                        </h4>
                        <Form onSubmit={onSubmitDate}>
                        <div>
                        <DatePicker
                            onChange={onChange}
                            date={date}
                        />
                        </div>
                        <h4>
                            choose time
                        </h4>
                        <div>
                        <TimePicker
                            onChange={onChange1}
                            time={time}
                        />
                        </div>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary"  type="submit"  >
                            Submit
                        </Button>
                        </Modal.Footer>
                        </Form>
                    </Modal>
                </Card.Body>
            </Card>
        );
    };

    useEffect(() => {
        {/* hook database from firebase */ }
        const fetchData = async () => {
            const snaphot = await firebase.database().ref('/user').once('value')
            const data = snaphot.val()
            // console.log(data)
            setCardInfo(data)
        }
        fetchData()
    }, [])
    // const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className="Play">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dota2">
                    <Row>
                        <Col sm={2}>
                            <ListGroup>
                                <ListGroup.Item action href="#dota2" onClick={() => setbookingGameName("dota2")}>
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1605831017"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#csgo" onClick={() => setbookingGameName("csgo")}>
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1605757059"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#amongus" onClick={() => setbookingGameName("amongus")}>
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1606422465"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#genshin" onClick={() => setbookingGameName("genshin")}>
                                    <Figure.Image
                                        src="https://www.appdisqus.com/wp-content/uploads/2020/09/00-5-1.jpg"
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content >
                                <Tab.Pane eventKey="#dota2">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/dota2.png`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">DOTA2</h1>
                                        {cardInfo && 
                                            <div className="grid"> {/* if cardInfo have item  */}
                                                {
                                                    cardInfo.filter( user => (user.game).includes("dota2") ).map(renderCard) 
                                                        /* loop if user.game have dota2 include in cardInfo call renderCard -> cardInfo  */
                                                }
                                            </div>
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#csgo"  >
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/csgo.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">CS:GO</h1>
                                        {cardInfo && 
                                            <div className="grid" > {/* if cardInfo have item  */}
                                            
                                                {
                                                    
                                                    cardInfo.filter( user => (user.game).includes("csgo") ).map(renderCard) 
                                                        /* loop if user.game have csgo include in cardInfo call renderCard -> cardInfo  */
                                                }
                                            </div>
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#amongus">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/amongUs.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">Among Us</h1>
                                        {cardInfo && 
                                            <div className="grid"> {/* if cardInfo have item  */}
                                                {
                                                    cardInfo.filter( user => (user.game).includes("amongus") ).map(renderCard) 
                                                        /* loop if user.game have amongUs include in cardInfo call renderCard -> cardInfo  */
                                                }
                                            </div>
                                        }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#genshin">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/genshin.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">Genshin</h1>
                                        {cardInfo && 
                                            <div className="grid">
                                                {
                                                    cardInfo.filter( user => (user.game).includes("genshin") ).map(renderCard) 
                                                        /* loop if user.game have genshin include in cardInfo call renderCard -> cardInfo  */
                                                }
                                            </div>
                                        }
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