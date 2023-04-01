import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="headerWrap">
      <Link to="/" className="ercTitleLink">
        <h1 className="ercTitle">ERC</h1>
      </Link>
    </div>
  );
}

export default Header;
