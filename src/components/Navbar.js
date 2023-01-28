import photo1 from "../image/photo1.PNG";
import "./NavBar.css";
import { FaListOl } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aside from "./Aside";

function Navbar() {
  return (
    <header>
      <nav className="navbar bg-white ">
        <div className="container navcont p-lg-0 ">
          <Link to="/">
            <img src={photo1} alt="logo" />
          </Link>
          <div className=" position-relative  m-auto  ">
            <p className="text-capitalize m-0 fs-6 fs-sm-2 pcolor ">
              international travel agency
            </p>
            <span className="glob-logo">
              <FaGlobe />
            </span>
          </div>
          <button
            className="navbar-toggler border border-0 text-primary "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <FaListOl />
          </button>
          <div className="mx-4  text-primary search-logo d-none d-md-block">
            <FaSearch />
          </div>
          <div className="sign d-none d-md-block text-primary">
            <FaUser /> <span>Login | Sign up</span>
          </div>
          <Aside />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
