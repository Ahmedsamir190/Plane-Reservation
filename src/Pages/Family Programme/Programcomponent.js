import familylogo from "../../image/familylogo.png";
import avioslogo from "../../image/avioslogo.png";
import baglogo from "../../image/baglogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Programcomponent() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="col-sm-6 col-md-4 col-lg-4 card-info">
        <img className="pb-4" src={familylogo} alt={""} />
        <h6 className="text-primary fw-bold text-capitalize">
          Enjoy with your family
        </h6>
        <p>
          Nominate up to nine family members including spouse, children, and
          parents.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className=" col-sm-6 col-md-4 col-lg-4 card-info"
      >
        <img className="pb-4" src={avioslogo} alt={""} />
        <h6 className="text-primary fw-bold text-capitalize">
          Fly and earn Avios
        </h6>
        <p>
          Nominate up to nine family members including spouse, children, and
          parents.
        </p>
      </div>

      <div data-aos="fade-up" className=" col-sm-6 col-md-4 col-lg-4 card-info">
        <img className="pb-4" src={baglogo} alt={""} />
        <h6 className="text-primary fw-bold text-capitalize">
          Earn Avios beyond flights
        </h6>
        <p>
          Nominate up to nine family members including spouse, children, and
          parents.
        </p>
      </div>
    </>
  );
}

export default Programcomponent;
