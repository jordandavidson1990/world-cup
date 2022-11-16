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
      <div style={{ display: "grid", width: "90%", margin: "24px auto" }}>
        <Button type="submit" variant="outlined">
          To the draw
        </Button>
      </div>
    </form>
  );
};

export default SoulsList;
