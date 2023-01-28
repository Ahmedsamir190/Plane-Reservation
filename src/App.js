import {
  Navbar,
  LandingOne,
  LandingTwo,
  LandingThree,
  TravelExperience,
  DigitalMemberCard,
  FamilyProgram,
  FindGreatFares,
  Footer,
} from "./components/FlodersLocation";
import { Routes, Route } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);
  return (
    <div className="App bg-light">
      {loading ? (
        <div className="overlay">
          <ClockLoader color={"#365ed6"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingOne />
                  <LandingTwo />
                  <LandingThree />
                </>
              }
            />
            <Route path="Find-Great-Fares" element={<FindGreatFares />} />
            <Route path="travel-experience" element={<TravelExperience />} />
            <Route
              path="Digital-Membership-Card"
              element={<DigitalMemberCard />}
            />
            <Route path="Family-Program" element={<FamilyProgram />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
