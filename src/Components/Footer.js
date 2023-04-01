import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerWrap">
      <Link to="/" className="ercTitleLink">
        <h1 className="ercFooterTitle">ERC</h1>
      </Link>
    </div>
  );
}

export default Footer;
