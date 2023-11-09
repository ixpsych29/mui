import Sidebar from "./Components/Sidebar.jsx";
import Feed from "./Components/Feed.jsx";
import Rightbar from "./Components/Rightbar.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./Components/Add.jsx";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
