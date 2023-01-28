import Logo from "../../image/Logo.PNG";
import ContactUs from "../../image/ContactUs.jpg";
import RoyalClub from "../../image/RoyalClub.jpg";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LandingThree() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="landing-two bg-light mt-5">
        <div className="container ">
          <div className="main-title text-center ">
            <h1 className="text-capitalize mb-5">
              more
              <img src={Logo} className="img-fluid w-25 px-1" alt="" />
              with
            </h1>
          </div>
          <div className="row bg-white pt-5 border">
            {/* <!-- photo one --> */}
            <div data-aos="fade-up" className=" col-sm-6 col-md-4 col-lg-3">
              <div className="landing-card mb-5">
                <img src={ContactUs} className="img-fluid" alt="" />
                <h4 className="text-center mt-4 text-primary fw-bold text-capitalize">
                  contact us
                </h4>
                <p className="text-center px-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, earum explicabo! Dolor blanditiis velit, ex ea rem
                  deserunt culpa optio. Nam rerum porro ut quae deleniti
                  corrupti repellendus sit animi.
                </p>

                <button
                  type="button"
                  className="btn btn-primary text-capitalize w-100"
                >
                  click here <FaRegCaretSquareRight />
                </button>
              </div>
            </div>
            {/* <!-- photo two --> */}
            <div data-aos="fade-down" className=" col-sm-6 col-md-4 col-lg-3">
              <div className="landing-card mb-5">
                <img src={ContactUs} className="img-fluid" alt="" />
                <h4 className="text-center mt-4 text-primary fw-bold text-capitalize">
                  travel updates
                </h4>
                <p className="text-center px-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, earum explicabo! Dolor blanditiis velit, ex ea rem
                  deserunt culpa optio. Nam rerum porro ut quae deleniti
                  corrupti repellendus sit animi.
                </p>
                <Link to={"/travel-experience"}>
                  <button
                    type="button"
                    className="btn btn-primary text-capitalize w-100"
                  >
                    find more <FaRegCaretSquareRight />
                  </button>
                </Link>
              </div>
            </div>
            {/* <!-- photo three --> */}
            <div data-aos="fade-up" className=" col-sm-6 col-md-4 col-lg-3">
              <div className="landing-card mb-5">
                <img src={RoyalClub} className="img-fluid" alt="" />
                <h4 className="text-center mt-4 text-primary fw-bold text-capitalize">
                  privilege Club
                </h4>
                <p className="text-center px-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, earum explicabo! Dolor blanditiis velit, ex ea rem
                  deserunt culpa optio. Nam rerum porro ut quae deleniti
                  corrupti repellendus sit animi.
                </p>
                <Link to={"/Family-Program"}>
                  <button
                    type="button"
                    className="btn btn-primary text-capitalize w-100"
                  >
                    join now <FaRegCaretSquareRight />
                  </button>
                </Link>
              </div>
            </div>
            {/* <!-- photo four --> */}
            <div data-aos="fade-down" className=" col-sm-6 col-md-4 col-lg-3">
              <div className="landing-card  mb-5">
                <img src={RoyalClub} className="img-fluid" alt="" />
                <h4 className="text-center mt-4 text-primary fw-bold text-capitalize">
                  news
                </h4>
                <p className="text-center px-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, earum explicabo! Dolor blanditiis velit, ex ea rem
                  deserunt culpa optio. Nam rerum porro ut quae deleniti
                  corrupti repellendus sit animi.
                </p>
                <Link to={"/Digital-Membership-Card"}>
                  <button
                    type="button"
                    className="btn btn-primary text-capitalize w-100"
                  >
                    intersted <FaRegCaretSquareRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingThree;
