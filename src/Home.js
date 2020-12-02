import './Home.css';
import { Carousel } from 'react-bootstrap';
import NavBar from './components/NavBar';


function Home() {
  return (
    <div className="Home bg-secendary">
      <NavBar />
      <div style={{ margin: "auto", width: "600px", height: "350px", textAlign: "center"}}>
        <Carousel style={{ marginTop: "20px" }}>
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
      <h1 style={{ marginTop: "20px", marginRight: "700px", marginLeft: "12px" }}>Recomment Game</h1>
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1606236732" rounded />
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://i1.wp.com/www.thailandesportclub.com/wp-content/uploads/2019/08/00-5.jpg" rounded />
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://www.riotgames.com/darkroom/1440/08bcc251757a1f64e30e0d7e8c513d35:be16374e056f8268996ef96555c7a113/wr-cb1-announcementarticle-banner-1920x1080.png" rounded />
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://s3.india.com/wp-content/uploads/2020/08/PUBG-cover-image_0_0.jpg" rounded />
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg" rounded />
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://upload.wikimedia.org/wikipedia/th/8/8a/Talesrunner_Logo_Present.jpg" rounded />
      <img style={{ marginTop: "10px", marginLeft: "12px", height: "150px", width: "190px" }} src="https://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg?t=1592263852" rounded />

    </div>    
  )
    
          
}

export default Home