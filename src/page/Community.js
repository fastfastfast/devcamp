import NavBar from '../components/NavBar';
import Figure from 'react-bootstrap/Figure';
import { Card, ListGroup, Tab, Row, Col,Form,Button } from 'react-bootstrap';
import { firebase } from '../services/firebase'
import {useEffect} from 'react'

const fetchData = async() =>{
    const snaphot = await firebase.database().ref('/post').once('value')
    const data = snaphot.val()
    console.log(data)
}


function Community() {
    useEffect(() => {
        fetchData()
    }, [])
    return(
        <>
        <NavBar/>
        <div className="community">
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
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    </div>
                                    <Button as="input" type="submit" value="Submit" onClick="handle" s/>{' '}
                                    <Card border="primary" style={{ width: '18rem',marginTop:"20px" }}>
                                        <Card.Header>Header</Card.Header>
                                        <Card.Body>
                                        <Card.Title>Primary Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    <div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">             {/* post box */}
                                        <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    </div>
                                    <Button as="input" type="submit" value="Submit" />{' '}

                                    <Card border="primary" style={{ width: '18rem',marginTop:"20px" }}>
                                        <Card.Header>Header</Card.Header>
                                        <Card.Body>
                                        <Card.Title>Primary Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    <div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    </div>
                                    <Button as="input" type="submit" value="Submit" />{' '}
                                    <Card border="primary" style={{ width: '18rem',marginTop:"20px" }}>
                                        <Card.Header>Header</Card.Header>
                                        <Card.Body>
                                        <Card.Title>Primary Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    <div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    </div>
                                    <Button as="input" type="submit" value="Submit" />{' '}
                                    <Card border="primary" style={{ width: '18rem',marginTop:"20px" }}>
                                        <Card.Header>Header</Card.Header>
                                        <Card.Body>
                                        <Card.Title>Primary Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export default Community