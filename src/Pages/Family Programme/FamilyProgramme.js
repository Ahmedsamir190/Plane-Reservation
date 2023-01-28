import Slide from "../../components/slidefamilyprograme";
import Programcomponent from "./Programcomponent";
import CloudIcon from "../../components/CloudIcon";

import "./FamilyProgramm.css";

function FamilyProgram() {
  return (
    <section>
      <div className="slides">
        <Slide />
      </div>
      <div className="program-content py-5">
        <div className="container ">
          <CloudIcon />
          <div className="bg-white p-5">
            <div className="program-info">
              <h4 className="pb-4 text-primary fw-bold text-capitalize">
                Enjoy more with our Family Programme
              </h4>
              <p className="pb-4">
                Get the most out of your Privilege Club membership when you pool
                all Avios earned by nominated family members into the main
                member's account for faster rewards.
              </p>
            </div>
            <div className="row text-center">
              <Programcomponent />
            </div>
            <div className="family-member">
              <h4 className="pb-4 pt-5 text-primary fw-bold text-capitalize">
                How to nominate a family member:
              </h4>
              <ol>
                <li>
                  {" "}
                  Log in to your membership account, and select "My Profile"
                  from your dashboard menu and "My Family" from the tab menu.
                </li>
                <li>
                  {" "}
                  Select "Add Family Member" to nominate your family member.
                </li>
                <li>
                  Complete the required fields and attach any required documents
                  to confirm your relationship with your nominated member
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamilyProgram;
