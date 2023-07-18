import airbnb from "../images/airbnbsvg.svg";
export default function Navbar() {
  return (
    <nav>
      <img
        src={airbnb}
        className="nav--logo"
        alt="this is "
        height="40px"
        weight="40px"
      />
    </nav>
  );
}
