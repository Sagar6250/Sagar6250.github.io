import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#B5C9A1" }, // dusty sage green
        secondary: { main: "#C9A84C" }, // antique gold
        background: {
            default: "#0B0E0C", // deep forest black-green
            paper: "#101510", // dark moss card surface
        },
        text: {
            primary: "#E8EDE2", // soft off-white with green tint
            secondary: "#7A9472", // muted sage
        },
    },
    typography: {
        fontFamily: "'Share Tech Mono', sans-serif",
        h1: {
            fontFamily: "'Jersey 25', serif",
            letterSpacing: "-0.02em",
        },
        h2: {
            fontFamily: "'Jersey 25', serif",
            letterSpacing: "-0.02em",
        },
        h3: { fontFamily: "'Jersey 15', serif" },
        h4: { fontFamily: "' Share Tech Mono', sans-serif", fontWeight: 700 },
    },
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    fontFamily: "'Share Tech Mono', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 2,
                    textTransform: "none",
                    fontFamily: "'Share Tech Mono', sans-serif",
                },
            },
        },
    },
});

export default theme;
