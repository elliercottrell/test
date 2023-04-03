import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerWrap">
      <Link to="/" className="ercFooterLink">
        <h2 className="ercFooterTitle">ERC</h2>
      </Link>
    </div>
  );
}

export default Footer;
