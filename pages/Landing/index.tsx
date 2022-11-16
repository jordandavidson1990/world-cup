import { Box } from "@material-ui/core";
import { useState } from "react";
import SoulsList from "../../components/SoulsList/SoulsList";
import { countries } from "../data/data";

const Landing = ({ setSouls }: any) => {
  const [availableCountries, setAvailableCountries] =
    useState<string[]>(countries);
  const [numberOfSouls, setNumberOfSouls] = useState(1);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <h1>Countries:</h1>
        <ul>
          {availableCountries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      </Box>
      <Box>
        <h2>Contestants:</h2>
        <SoulsList
          number={numberOfSouls}
          setNumber={setNumberOfSouls}
          setSouls={setSouls}
        />
      </Box>
    </div>
  );
};

export default Landing;
