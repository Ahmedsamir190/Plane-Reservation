import digitalcard from "../../image/digitalcard.png";

function ContentComponents() {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-7">
        <div className="card border border-0">
          <img src={digitalcard} alt="" />
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-5">
        <div className="card-details bg-white p-4 text-secondary ">
          <h6 className="pb-4 text-primary fw-bold text-capitalize">
            Quick access to your membership details
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            suscipit impedit quasi eaque nulla consequatur. Repudiandae deleniti
            expedita sequi harum odit repellendus inventore eaque, iste pariatur
            quis, esse iusto minima?
          </p>
        </div>
      </div>
      {/* part-two */}

      <div className="col-sm-6 col-md-6 col-lg-7 ">
        <div className="card border border-0">
          <img src={digitalcard} alt="" />
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-5">
        <div className="card-details bg-white p-4 text-secondary ">
          <h6 className="pb-4 text-primary fw-bold text-capitalize">
            Easy to download, simple to use
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            suscipit impedit quasi eaque nulla consequatur. Repudiandae deleniti
            expedita sequi harum odit repellendus inventore eaque, iste pariatur
            quis, esse iusto minima?
          </p>
        </div>
      </div>

      {/* part-three */}
      <div className="col-sm-6 col-md-6 col-lg-7">
        <div className="card border border-0">
          <img src={digitalcard} alt="" />
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-5">
        <div className="card-details bg-white p-4 text-secondary ">
          <h6 className="pb-4 text-primary fw-bold text-capitalize">
            Quick access to your membership details
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            suscipit impedit quasi eaque nulla consequatur. Repudiandae deleniti
            expedita sequi harum odit repellendus inventore eaque, iste pariatur
            quis, esse iusto minima?
          </p>
        </div>
      </div>
      {/* more information */}
      <div className="col-12">
        <div className="card-details bg-white p-4 text-secondary ">
          <h6 className="pb-4 text-primary fw-bold text-capitalize">
            More information
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            suscipit impedit quasi eaque nulla consequatur. Repudiandae deleniti
            expedita sequi harum odit repellendus inventore eaque, iste pariatur
            quis, esse iusto minima?
          </p>
        </div>
      </div>
    </>
  );
}

export default ContentComponents;
