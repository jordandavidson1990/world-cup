import { useState } from "react";

const Leftovers = ({ countries, souls }) => {
  const [availableSouls, setAvailableSouls] = useState(souls);
  const [availableCountries, setAvailableCountries] = useState(
    countries.concat(countries)
  );

  const createPairings = (i) => {
    const firstSoul = availableSouls[i];
    const secondSoul = availableSouls[i + 1];
    const country = availableCountries[i];

    return { firstSoul, secondSoul, country };
  };

  return (
    <div style={{ marginBottom: "12px" }}>
      <h4 style={{ textAlign: "center", marginBottom: "12px" }}>
        2nd Choice: Split the Winnings
      </h4>
      <div className="table-container">
        {availableSouls?.map((soul, i) => (
          <div key={i} className="table-inner">
            <h3 key={soul}>{soul}</h3>
            <p>{availableCountries[i]}</p>
          </div>
        ))}
      </div>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        {countries.map((country, i) => (
          <div key={i} style={{ width: "100px", textAlign: "center" }}>
            <h4>{country}</h4>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {souls.map((soul) => (
          <p key={soul}>{soul}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Leftovers;
