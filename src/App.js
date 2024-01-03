import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material"
import { deepOrange, teal, deepPurple } from "@mui/material/colors"

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#51358C",
      },
      secondary: {
        main: teal[700],
      },
      morcivert: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
        lg: 1200,
        xl: 1536,
      },
    },
  })

  return (
    <div>
        <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
