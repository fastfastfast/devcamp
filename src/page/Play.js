import { Card, ListGroup, Tab, Row, Col, Image } from 'react-bootstrap';
import '../Styles/Play.css';
import NavBar from '../components/NavBar';
import Figure from 'react-bootstrap/Figure'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { firebase } from '../services/firebase'
import {useEffect} from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const fetchData = async() =>{
    const snaphot = await firebase.database().ref('/').once('value')
    const data = snaphot.val()
    console.log(data.user)
}

function Play() {
    useEffect(() => {
        fetchData()
    }, [])
    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className="Play">
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
                            <Tab.Content >
                                <Tab.Pane eventKey="#dota2">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/dota2.png`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">DOTA2</h1>
                                        <Grid container spacing={3}>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paper}>xs=3</Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paper}>xs=3</Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paper}>xs=3</Paper>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Paper className={classes.paper}>xs=3</Paper>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#csgo">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/csgo.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">CS:GO</h1>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#amongus">
                                    <div class="container">
                                        <img src={`${process.env.PUBLIC_URL}/amongUs.jpg`} className="img-size" />
                                        <h1 style={{ fontSize: "100px", fontFamily: "Sofia" }} class="top-left">Among Us</h1>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#genshin">
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