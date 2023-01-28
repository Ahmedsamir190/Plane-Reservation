import "./Landing.css";
import { FaPlane } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LandingTwo() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="background-land bg-light   ">
        <div
          data-aos="fade-up"
          className="container bg-white border border-primary"
        >
          <ul className="d-flex flex-wrap  list-unstyled text-center text-white bg-primary p-0 border border-primary list ">
            <li className=" flex-grow-1 text-capitalize p-3 ">
              <FaPlane />
              <a href="/" className="text-white">
                book
              </a>
            </li>
            <li className="flex-grow-1  text-capitalize   p-3">
              <FaCalendarAlt />
              <a href="/" className="text-white">
                MyTrip
              </a>
            </li>
            <li className=" flex-grow-1 text-capitalize   p-3">
              <FaCheckCircle />
              <a href="/" className="text-white">
                check in
              </a>
            </li>
            <li className=" flex-grow-1 text-capitalize   p-3">
              <FaMapMarkedAlt />
              <a href="/" className="text-white">
                flight status
              </a>
            </li>
          </ul>
          <div className="d-flex p-1 text-capitalize ">
            <div className="fligtandstop">
              <p className="px-4  flight-border mb-1 ">flight</p>
            </div>
            <div className="fligtandstop">
              <p className="px-4 stop-border">stop over</p>
            </div>
          </div>

          <div className="d-flex flex-column flex-xl-row flex-wrap justify-content-center border border-4 py-4 px-3 gap-1">
            <input
              type="text"
              placeholder="From"
              className="  border border-1 p-2 flex-grow-1 w-100 "
            />
            <input
              type="text"
              placeholder="To"
              className="border border-1 p-2 flex-grow-1 w-100 "
            />
            <span className=" text-center mt-2 ">Depart</span>
            <input
              type="date"
              className="border border-1 p-2  flex-grow-1 w-100"
            />
            <span className=" text-center mt-2">Return</span>
            <input
              type="date"
              className="border border-1 p-2 flex-grow-1 w-100 "
            />
          </div>
          <div className="mt-5 mb-3  d-flex justify-content-end  align-items-center">
            <FaPlus />
            <p className="me-3 mb-0 promo text-primary ">add promo code</p>
            <a
              href="/"
              className="btn btn-outline-primary rounded-pill text-capitalize"
            >
              show flights <FaPlaneDeparture />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingTwo;
