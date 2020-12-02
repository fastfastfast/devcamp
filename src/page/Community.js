import NavBar from '../components/NavBar';
import Figure from 'react-bootstrap/Figure';
import { Card, ListGroup, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import { firebase } from '../services/firebase'
import { useEffect, useState } from 'react'
import '../Styles/Community.css';

function Community() {
    const [postInfo, setPostInfo] = useState()

    const onSubmit = e => {
        e.preventDefault()
        console.log(e.target.textField.value);
    }

    const renderCard = (card, index) => {
        // console.log(card.infoPost.name)
        {/*loop display card namd and description*/ }
        return (
            <Card style={{ width: '50rem' }} className="post-card">
                <Card.Body>
                    <Card.Title>{card.infoPost.name}</Card.Title>
                    <Card.Text>{card.infoPost.post}</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    useEffect(() => {
        {/* hook database from firebase */ }
        const fetchData = async () => {
            const snaphot = await firebase.database().ref('/game').once('value')
            const data = snaphot.val()
            // console.log(data)
            setPostInfo(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <NavBar />
            <div className="community">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dota2">
                    <Row>
                        <Col sm={2}>
                            <ListGroup>
                                <ListGroup.Item action href="#dota2">
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1605831017"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#csgo">
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1605757059"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#amongus">
                                    <Figure.Image
                                        src="https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1606422465"
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item action href="#genshin">
                                    <Figure.Image
                                        src="https://www.appdisqus.com/wp-content/uploads/2020/09/00-5-1.jpg"
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#dota2">
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                            <Form.Control name="textField" as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button as="input" type="submit" value="Submit" />
                                    </Form>
                                    {postInfo &&
                                        <div> {/* if postInfo have item  */}
                                            {
                                                postInfo.dota2.map(renderCard)
                                                /* loop if user.game have dota2 include in postInfo call renderCard -> postInfo  */
                                            }
                                        </div>
                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey="#csgo">
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                            <Form.Control name="textField" as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button as="input" type="submit" value="Submit" />
                                    </Form>
                                    {postInfo &&
                                        <div> {/* if postInfo have item  */}
                                            {
                                                postInfo.csgo.map(renderCard)
                                                /* loop if user.game have csgo include in postInfo call renderCard -> postInfo  */
                                            }
                                        </div>
                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey="#amongus">
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                            <Form.Control name="textField" as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button as="input" type="submit" value="Submit" />
                                    </Form>
                                    {postInfo &&
                                        <div> {/* if postInfo have item  */}
                                            {
                                                postInfo.amongus.map(renderCard)
                                                /* loop if user.game have amongus include in postInfo call renderCard -> postInfo  */
                                            }
                                        </div>
                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey="#genshin">
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ marginTop: "20px" }}>Post</Form.Label>
                                            <Form.Control name="textField" as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button as="input" type="submit" value="Submit" />
                                    </Form>
                                    {postInfo &&
                                        <div> {/* if postInfo have item  */}
                                            {
                                                postInfo.genshin.map(renderCard)
                                                /* loop if user.game have genshin include in postInfo call renderCard -> postInfo  */
                                            }
                                        </div>
                                    }
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