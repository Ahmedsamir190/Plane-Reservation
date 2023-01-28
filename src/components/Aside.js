import { Link } from "react-router-dom";

function Aside() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end aside-list"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header bg-primary text-capitalize text-light">
          <h5 className="offcanvas-title  fw-bold" id="offcanvasNavbarLabel ">
            list
          </h5>
          <button
            type="button"
            className=" button-nav btn-close  w-20  h-50 opacity-100"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center d-md-flex align-items-md-center justify-content-md-center  px-0 nav-link">
          <ul className="navbar-nav justify-content-end flex-grow-1 ">
            <li>
              <Link
                to={"/Find-Great-Fares"}
                className="nav-link  py-4 fs-3 text-capitalize "
              >
                Find Great Fares
              </Link>
            </li>
            <li>
              <Link
                to={"/travel-experience"}
                className="nav-link py-4  fs-3 text-capitalize "
              >
                Travel Experience
              </Link>
            </li>
            <li>
              <Link
                to={"/Digital-Membership-Card"}
                className="nav-link  py-4  fs-3 text-capitalize "
              >
                Digital Membership Card
              </Link>
            </li>
            <li>
              <Link
                to={"/Family-Program"}
                className="nav-link  py-4  fs-3 text-capitalize"
              >
                Family Programme
              </Link>
            </li>
          </ul>
          <div className="mt-3 sign d-md-none d-sm-block fs-6">
            <span>Login | Sign up</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aside;
