import { Card,CardDeck,Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';

function Proflie(){
    return(
        <>
        <NavBar/>
        <div className="profile" >
        <Card body style= {{ marginTop: "20px",marginLeft: "20px",marginRight: "20px",backgroundColor: "grey"}}>
            <h1>
                Profile
            </h1>
            <h4>
                Name:Sern
            </h4>
            <h4>
                Decription:I like to play with anyone
            </h4>        
        </Card>
        <Card body style= {{ marginTop: "20px",marginLeft: "20px",marginRight: "20px",backgroundColor: "grey"}}>
                <h1>
                    History
                </h1>
        <CardDeck>
        <Card>
            <Card.Body>
            <Card.Title>Join with zen</Card.Title>
            <Card.Text>
                Game: dota2
            </Card.Text>
            <Card.Text>
                Days: 2/12/2020
            </Card.Text>
            <Card.Text>
                Time: 10:00 pm
            </Card.Text>
            <Button variant="danger">Cancel</Button> 
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Join with two</Card.Title>
            <Card.Text>
                Game: csgo
            </Card.Text>
            <Card.Text>
                Days: 2/12/2020
            </Card.Text>
            <Card.Text>
                Time: 11:00 pm
            </Card.Text>
            <Button variant="danger">Cancel</Button> 
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Join with tee</Card.Title>
            <Card.Text>
                Game: pubg
            </Card.Text>
            <Card.Text>
                Days: 2/12/2020
            </Card.Text>
            <Card.Text>
                Time: 14:00 pm
            </Card.Text>
            <Button variant="danger">Cancel</Button>
            </Card.Body>
        </Card>
        </CardDeck>
        </Card>
        <Card body style= {{ marginTop: "20px",marginLeft: "20px",marginRight: "20px",backgroundColor: "grey",marginButtom: "20px"}}>
            <h2>
                My Games
            </h2>
            <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1606236732" rounded />
            <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://upload.wikimedia.org/wikipedia/th/8/8a/Talesrunner_Logo_Present.jpg" rounded />
            <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://pangya.mygame.in.th/resource/images/bg/bgnew.jpg" rounded />
            <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://images.rbxcdn.com/6c27cb9db1779888868bf7d87e6d3709.jpg" rounded />
            <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://notebookspec.com/web/wp-content/uploads/2019/01/10596_Resident_Evil_2_MAIN_8bd79736ec3d249e9007668fe2ffd5b7.jpg" rounded />
        </Card>
        </div>
        

        </>
    )

    
}

export default Proflie