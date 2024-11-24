import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
