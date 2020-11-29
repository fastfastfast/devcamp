import './Home.css';
import { Carousel } from 'react-bootstrap';
import NavBar from './components/NavBar'


function Home() {
    return (
      <div className="Home">
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.brighttv.co.th/wp-content/uploads/2019/10/League-of-Legend.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://steamcdn-a.akamaihd.net/steam/apps/911400/header.jpg?t=1602600816"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
  }

export default Home;