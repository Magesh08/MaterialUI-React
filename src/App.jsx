import * as React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import AirlineSeatReclineNormalOutlinedIcon from "@mui/icons-material/AirlineSeatReclineNormalOutlined";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div>
      <div class="flex ...">
  <div class="flex-1 h-16 ...  ">
    01
  </div>

  <div class="shrink-0 h-16 w-32 ...">
    02
  </div>
  <div class="flex-1 h-16 ...">
    03
  </div>

  <div className="pt-8 pr-6 font-medium text-black   bg-metal">
              Job Title
            </div>
</div>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AirlineSeatReclineNormalOutlinedIcon></AirlineSeatReclineNormalOutlinedIcon>
      <Button variant="contained">Hello World</Button>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <div>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
          <Slider defaultValue={30} aria-label="Disabled slider" />
        </Box>
      </div>

      <div>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src="/static/images/grid/complex.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default App;
