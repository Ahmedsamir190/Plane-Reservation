import firstclass from "../../image/firstclass.png";
import firstclass2 from "../../image/firstclass2.png";
import BenfitLogo from "../../components/BenfitLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function TrExcomponents() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="zoom-in" className="part-one">
        <div className="info d-flex align-items-center pb-5 ">
          <img src={firstclass} alt="" />
          <div className="firstclass-info">
            <h6 className="fw-bold">First Class</h6>
            <p className="text-secondary">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              inventore ducimus, beatae laudantium commodi nesciunt odit cum,
              officiis sunt nostrum tempora similique illum ut harum ea modi
              iusto aspernatur accusantium.
            </p>
          </div>
        </div>
        <div className="benfit text-secondary ">
          <BenfitLogo />
          <BenfitLogo />
          <BenfitLogo />
          <BenfitLogo />
          <BenfitLogo />
          <BenfitLogo />
        </div>
      </div>

      <div data-aos="fade-down" className="seat-photo">
        <img src={firstclass2} alt="" />
      </div>
    </>
  );
}
export default TrExcomponents;
