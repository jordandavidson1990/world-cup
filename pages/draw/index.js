import Image from "next/image";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../components/context";
import { countries } from "../data/data";
import { mockSouls } from "../data/souls";
import Logo from "../../public/FIFA_WorldCup_logo.svg.png";
import { shuffle } from "../../helpers";
import Leftovers from "../../components/Leftovers";

const Draw = () => {
  const array = Object.values(mockSouls);
  const x = array.filter((soul) => soul);
  const [soulsValues] = useState(x);
  const [availableCountries, setAvailableCountries] = useState(
    shuffle(countries)
  );
  const [assignedCountries, setAssignedCountries] = useState([]);
  const [index, setIndex] = useState(0);
  const handleDraw = () => {
    setIndex((prev) => prev + 1);
    const foundCountry = availableCountries[0];
    setAvailableCountries((prev) =>
      prev.filter((country) => country !== foundCountry)
    );
    setAssignedCountries((prev) => [...prev, foundCountry]);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={Logo} alt="" width={800} />
      </div>
      <div className="table-container">
        {soulsValues?.map((soul, i) => (
          <div key={i} className="table-inner">
            <h3 key={soul}>{soul}</h3>
            <p>{assignedCountries[i]?.toUpperCase()}</p>
          </div>
        ))}
      </div>
      {availableCountries.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ width: "200px" }}
            onClick={handleDraw}
            className="button"
          >
            Draw
          </button>
        </div>
      )}
    </div>
  );
};

export default Draw;
