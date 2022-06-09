import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./home.scss";
import Images from "../../assets";

const Home = () => {
  return (
    <div className="home">
      {/* ----- LEFT of Hero ----- */}
      <div className="home-left">
        {/* ------ Top ----- */}
        <div className="home-left--top">
          <div className="header-up">
            <p>Hi, I'm</p>
          </div>
          <div className="header-center">
            <h1>Ali Shahid</h1>
          </div>
          <div className="header-down">
            <p>
              i can <span className="escape-chars">&#60;</span>{" "}
              <span className="escape-chars">&#8725;</span> program{" "}
              <span className="escape-chars">&#62;</span>
            </p>
          </div>
        </div>
        {/* ----- Bottom ----- */}
        <div className="home-left--bottom">
          <FontAwesomeIcon icon={faGithub} className="navbar--left-icon" />
          <FontAwesomeIcon icon={faTwitter} className="navbar--left-icon" />
          <FontAwesomeIcon icon={faLinkedinIn} className="navbar--left-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="navbar--left-icon" />
          <div className="navbar--left-icon"> shaeinst@gmail.com </div>
        </div>
      </div>
      {/* ----- Right of Hero ----- */}
      <div className="home-right">
        <img src={Images.hero} alt="HeroImage" className="heroimage" />
      </div>
    </div>
  );
};

export default Home;
