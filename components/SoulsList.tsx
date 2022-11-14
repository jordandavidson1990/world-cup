import { Button, Paper, TextField } from "@mui/material";

const SoulsList = ({
  number,
  setNumber,
}: {
  number: number;
  setNumber: any;
}) => {
  return (
    <>
      <Paper>
        <div style={{ display: "grid" }}>
          {Array.from(Array(number).keys()).map((element) => {
            return (
              <div style={{ marginBottom: "6px" }} key={element}>
                <TextField
                  id="outlined-basic"
                  label="name"
                  variant="outlined"
                />
              </div>
            );
          })}
        </div>
      </Paper>
      <div style={{ marginTop: "12px", display: "grid" }}>
        <Button onClick={() => setNumber(number + 1)} variant="contained">
          +
        </Button>
      </div>
    </>
  );
};

export default SoulsList;
