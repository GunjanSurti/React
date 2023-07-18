import logo from "../logo.svg";
import "./nav.css";
export default function Nav() {
  return (
    <div className="nav-container">
      <img src={logo} height="80px" width="80px" alt="this img" />
      <h1>ReactFacts</h1>

      <h3 className="nav-h3">React Course Project-1</h3>
    </div>
  );
}
