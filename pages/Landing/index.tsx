import { useState } from "react";
import LogoComponent from "../../components/LogoComponent";
import SoulsList from "../../components/SoulsList/SoulsList";
import { countries } from "../data/data";

const Landing = ({ setSouls }: any) => {
  const [availableCountries, setAvailableCountries] =
    useState<string[]>(countries);
  const [numberOfSouls, setNumberOfSouls] = useState(1);

  return (
    <div>
      <LogoComponent />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="table-container">
          {availableCountries.map((country) => (
            <div
              key={country}
              className="table-inner"
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {country.split(" ").map((t) => (
                <p key={t} style={{ textAlign: "center", margin: "auto" }}>
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <SoulsList
        number={numberOfSouls}
        setNumber={setNumberOfSouls}
        setSouls={setSouls}
      />
    </div>
  );
};

export default Landing;
