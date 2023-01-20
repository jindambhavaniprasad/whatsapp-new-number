import { ThemeProvider, createTheme, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";

function App() {
  const [mode, setMode] = useState("light");
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("/whatsapp_light.png");

  useEffect(() => {
    setMode(checked ? "dark" : "light");
    setImage(checked ? "/whatsapp_dark.png" : "/whatsapp_light.png");
  }, [checked]);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{
          height: "100vh",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header checked={checked} setChecked={setChecked} image={image} />
        <Navigation
          image={image}
          logoBackground={mode === "dark" ? "#fff" : "inherit"}
          buttonBackground={mode === "dark" ? "inherit" : "#29dc4c"}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
