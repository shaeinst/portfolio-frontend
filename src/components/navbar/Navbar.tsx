import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--left">
        <FontAwesomeIcon icon={faHouse} className="navbar--left-icon" />
      </div>
      <div className="navbar--right">
        <ul className="navbar--right-items">
          <li className="navbar--right-item">
            <div className="dot active-dot"> </div>
            <div> skills </div>
          </li>
          <li className="navbar--right-item">
            <div className="dot"> </div>
            <div> projects </div>
          </li>
          <li className="navbar--right-item">
            <div className="dot"> </div>
            <div> experience </div>
          </li>
          <li className="navbar--right-item">
            <div className="dot"> </div>
            <div> education </div>
          </li>
          <li className="navbar--right-item">
            <div className="dot"> </div>
            <div> about </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
