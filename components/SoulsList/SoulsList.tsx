import { Button } from "@mui/material";
import { useSoulsList } from "./useSoulsList";

const SoulsList = ({
  number,
  setNumber,
  setSouls,
}: {
  number: number;
  setNumber: any;
  setSouls: any;
}) => {
  const { handleSubmit, onSubmit, control, register } = useSoulsList();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "grid" }}>
        {Array.from(Array(number).keys()).map((element) => {
          return (
            <div style={{ marginBottom: "6px" }} key={element}>
              <input id="outlined-basic" {...register(element.toString())} />
            </div>
          );
        })}
      </div>
      <div style={{ margin: "12px 0", display: "grid" }}>
        <Button onClick={() => setNumber(number + 1)} variant="contained">
          +
        </Button>

        <div style={{ marginTop: "12px", display: "grid" }}>
          <Button onClick={() => setNumber(number - 1)} variant="contained">
            -
          </Button>
        </div>
      </div>
      <div style={{ display: "grid" }}>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SoulsList;
