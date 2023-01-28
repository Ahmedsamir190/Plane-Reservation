import placeone from "../../image/placeone.jpg";
import placetwo from "../../image/placetwo.jpg";
import placethree from "../../image/placethree.jpg";
import placefour from "../../image/placefour.jpg";
import placefive from "../../image/placefive.jpg";
import placesix from "../../image/placesix.jpg";
import { FaRegCaretSquareUp } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./FindGreatFares.css";

function FindGreatFares() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="landing-page bg-light mt-5 border-bottom ">
        <div className="container" data-aos="fade-down-right">
          <div className="main-title text-secondary text-capitalize fw-bold mb-5 ">
            <h4>Find great fares </h4>
            <span>
              <FaRegHandPointDown />
            </span>
          </div>
          <div className="row align-items-center justify-content-center">
            {/* <!-- part one --> */}
            <div className="col-sm-6 col-md-6 col-lg-6 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3  ">
                <img src={placeone} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white ">
                  <h5 className="px-3 mt-3 text-primary pb-2">Zanzibar</h5>

                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part two --> */}
            <div className="col-sm-6 col-md-6 col-lg-3 ">
              <div className="card-zero bg-white lh-lg overflow-hidden mb-3  ">
                <img src={placetwo} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white mb-lg-5  ">
                  <h5 className="px-3 mt-3 text-primary pb-2">
                    Washington, D.C.
                  </h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part three --> */}
            <div className="col-sm-6 col-md-6 col-lg-3 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3  ">
                <img src={placethree} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white mb-lg-5   ">
                  <h5 className="px-3 mt-3 text-primary pb-2">Maldives</h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part four --> */}
            <div className="col-sm-6 col-md-6 col-lg-3 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3   ">
                <img src={placefour} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white mb-lg-5   ">
                  <h5 className="px-3 mt-3 text-primary pb-2">Jakarta</h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part five --> */}
            <div className="col-sm-6 col-md-6 col-lg-3 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3   ">
                <img src={placefive} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white mb-lg-5   ">
                  <h5 className="px-3 mt-3 text-primary pb-2">Mumbai</h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part six  --> */}
            <div className="col-sm-6 col-md-6 col-lg-6 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3   ">
                <img src={placesix} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white ">
                  <h5 className="px-3 mt-3 text-primary pb-2">Seoul</h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part seven   --> */}
            <div className="col-sm-6 col-md-6 col-lg-6 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3   ">
                <img src={placeone} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white ">
                  <h5 className="px-3 mt-3 text-primary pb-2">Zanzibar</h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part eight --> */}
            <div className="col-sm-6 col-md-6 col-lg-3 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3  ">
                <img src={placetwo} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white mb-lg-5   ">
                  <h5 className="px-3 mt-3 text-primary pb-2">
                    Washington, D.C.
                  </h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- part nine --> */}
            <div className="col-sm-6 col-md-6 col-lg-3 ">
              <div className="card-zero bg-white lh-lg overflow-hidden  mb-3  ">
                <img src={placetwo} alt="" className="img-fluid w-100" />
                <div className="card-up bg-white mb-lg-5  ">
                  <h5 className="px-3 mt-3 text-primary pb-2">
                    Washington, D.C.
                  </h5>
                  <div className="hand-logo">
                    <FaRegCaretSquareUp />
                  </div>
                  <p className="px-3 ">
                    02 Mar 2023 - 25 Mar 2023 <br />
                    Economy from <br />
                    EGP 11734
                  </p>
                  <div className="click-zero d-flex flex-column px-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize mb-2 d-none"
                    >
                      book now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill text-capitalize d-none"
                    >
                      discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FindGreatFares;
