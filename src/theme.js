import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3366",
    },
   black:{
        main:'#28282a'
    },
    third:{
        main:"#ffc071"
    },
    forth:{
         main:'#fff'
    }
  },
  typography: {
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
