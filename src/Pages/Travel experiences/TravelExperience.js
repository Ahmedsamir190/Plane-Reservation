import "./Travelexperience.css";
import TrExcomponents from "./TrExComponents";
function TravelExperience() {
  return (
    <section>
      <div className="travel-experience pb-5">
        <div className="container">
          <div className="pt-5 text-secondary">
            <h6>TravelExperience</h6>
            <h1 className="text-capitalize fw-bold">
              4 ways to fly here, there, and everywhere in between.
            </h1>
            <p>
              Whether it's a business trip or the ultimate vacation, there's a
              travel experience tailored towards your needs from departure to
              arrival.
            </p>
            <h5 className="text-capitalize">The most spacious seating </h5>
          </div>
          <div className="content pt-5 d-flex flex-wrap align-items-center">
            <TrExcomponents />
            <TrExcomponents />
          </div>
        </div>
      </div>
    </section>
  );
}
export default TravelExperience;
