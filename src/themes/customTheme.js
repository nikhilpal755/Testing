import { createTheme } from "@mui/material/styles";

const DEFAULT_THEME = createTheme({
  palette: {
    login: {
      green1: "#184f58",
      green2: "#1c555e0a",
    },
    background: {
      paper: "#fff",
      bg: "#f2f2f2",
    },
    action: {
      active: "#001E3C",
    },
  },
  typography: {
    fontSize: 14,
    light: {
      fontSize: "14px",
      color: "#000",
      opacity: "0.8",
      fontStyle: "italic",
    },
    boldStyle: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    ellipsis: {
      fontStyle: "italic",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    boldItalic: {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      "&::first-letter": {
        textTransform: "uppercase",
      },
    },
    fontFamily: [
      "Candara",
      "PT Sans",
      "Quattrocento",
      "Roboto",
      "Forte",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Candara",
      },
    },
  },
});

export default DEFAULT_THEME;
