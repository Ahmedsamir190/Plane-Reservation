import { FaPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import PlaneAnimtion from "../../components/PlaneAnimtion";
import "./Landing.css";

function LandingOne() {
  return (
    <main>
      <div className="landing d-flex justify-content-center align-items-center text-white fs-1 fw-bold text-capitalize">
        <div className="container">
          <PlaneAnimtion />
          <div className="text-center">
            <p>
              fly-with-us <span className="text-primary"> we give </span> you a
              life!
            </p>
            <Link to={"/Find-Great-Fares"}>
              <button className="btn btn-outline-primary rounded-pill text-capitalize">
                learn more
              </button>
            </Link>
          </div>
        </div>
        <div className="planebt">
          <div className="plane-bottom">
            <FaPlane />
          </div>
        </div>
      </div>
    </main>
  );
}
export default LandingOne;
