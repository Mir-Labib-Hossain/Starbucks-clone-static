import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Stack } from "@mui/material";
import { brown } from "@mui/material/colors";
import React, { useState } from "react";
import AddBtn from "./components/AddBtn";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [mode, setMode] = useState("light");

  const theme: any = createTheme({
    palette: {
      mode: mode as any,
      primary: { main: brown[500]},
    },
  });
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.background.default} color={theme.palette.text.primary}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddBtn />
      </Box>
    </ThemeProvider>
  );
};
export default App;
