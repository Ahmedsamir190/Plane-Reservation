import digmemcard from "../../image/digmemcard.PNG";
import ContentComponents from "./Content-Components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./DigitalCard.css";

function DigitalMemberCard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="digital-card ">
        <div className="position-relative">
          <h4 className="position-absolute  bottom-0 start-50 translate-middle-x  fw-bold fs-1 text-decoration-underline text-white text-center">
            Digital Membership Card
          </h4>
          <img src={digmemcard} alt="" className="img-fluid w-100" />
        </div>
        <div className="membercard-content py-5">
          <div data-aos="fade-up" className="container">
            <div className="row align-items-center justify-content-center content-row ">
              <ContentComponents />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DigitalMemberCard;
