import './Home.css';
import NavBar from './components/NavBar';
import { Carousel } from 'react-bootstrap';


function Home() {
  return (
    <div className="Home bg-secendary">
        <NavBar />
        <div style={{margin: "auto",width: "600px",height: "600px",textAlign: "center"}}>
           <Carousel style={{marginTop: "20px"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.blognone.com/sites/default/files/externals/7a8f7fdb48d6d78b343d642cc2d6f736.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.somagnews.com/wp-content/uploads/2020/09/1599647767_244123_1599647831_noticia_normal.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://steamcdn-a.akamaihd.net/steam/apps/739630/capsule_616x353.jpg?t=1606429609"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
       
    </div>

  );
}

export default Home;
