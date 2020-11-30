import { Card, ListGroup } from 'react-bootstrap';
// import './Styles/Play.css';
import Figure from 'react-bootstrap/Figure'

function Play() {
    return (
        <div className="Play">
            <Card style={{ width: '18rem' }}>
                <ListGroup disabled="false">
                    <ListGroup.Item>
                        <Figure.Image
                            src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1605831017"
                        />
                        {/* <img src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1605831017" classname="gameImg"></img> */}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                            src="https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1605757059"
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                            src="https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1606422465"
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>

    );
}

export default Play;