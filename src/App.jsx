import "@fontsource/syne/400.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/dm-serif-display";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import ApiTwoToneIcon from "@mui/icons-material/ApiTwoTone";
import FaceRetouchingNaturalTwoToneIcon from "@mui/icons-material/FaceRetouchingNaturalTwoTone";
import TerminalTwoToneIcon from "@mui/icons-material/TerminalTwoTone";
import DataObjectTwoToneIcon from "@mui/icons-material/DataObjectTwoTone";
import OfflineBoltTwoToneIcon from "@mui/icons-material/OfflineBoltTwoTone";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import SkillsMarquee from "./components/Skillsm";
import Education from "./components/Education";
import About from "./components/About";
import EllipseBackground from "./components/Backgroud";

const SECTIONS = [
    { id: "hero", label: "Home", icon: ApiTwoToneIcon },
    { id: "about", label: "About", icon: FaceRetouchingNaturalTwoToneIcon },
    { id: "experience", label: "Experience", icon: TerminalTwoToneIcon },
    { id: "projects", label: "Projects", icon: DataObjectTwoToneIcon },
    { id: "skills", label: "Skills", icon: OfflineBoltTwoToneIcon },
    { id: "education", label: "Education", icon: AutoStoriesTwoToneIcon },
];

export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(Number(entry.target.dataset.index));
                    }
                });
            },
            { threshold: 0.4 },
        );

        sectionRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (i) => {
        sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <EllipseBackground
                sx={{ bgcolor: "background.default", minHeight: "100vh" }}
            >
                <Navbar />

                {/* Vertical icon nav */}
                <Box
                    sx={{
                        position: "fixed",
                        right: 28,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1000,
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Vertical line */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: "3px",
                            top: 20,
                            bottom: 20,
                            bgcolor: "#7A9472",
                            opacity: 0.3,
                            borderRadius: 1,
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "40px",
                            zIndex: 1,
                        }}
                    >
                        {SECTIONS.map((section, i) => {
                            const isActive = activeIndex === i;
                            const Icon = section.icon;
                            return (
                                <Box
                                    key={section.id}
                                    sx={{
                                        width: 40, // fixed outer cell — always the same
                                        height: 40,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box
                                        onClick={() => scrollTo(i)}
                                        sx={{
                                            position: "relative",

                                            "&::before": {
                                                content: `"${section.label}"`,
                                                position: "absolute",
                                                right: "calc(100% + 12px)",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                bgcolor: "grey.900",
                                                color: isActive
                                                    ? "secondary.main"
                                                    : "grey.100",
                                                fontSize: 12,
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 1,
                                                whiteSpace: "nowrap",
                                                opacity: 0,
                                                pointerEvents: "none",
                                                transition: "opacity 0.2s ease",
                                                border: "1px solid",
                                                borderColor: isActive
                                                    ? "secondary.main"
                                                    : "grey.700",
                                                boxShadow: isActive
                                                    ? "0 0 8px 2px rgba(var(--primary-rgb), 0.4)"
                                                    : "none",
                                            },
                                            "&:hover::before": {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <Box
                                            onClick={() => scrollTo(i)}
                                            sx={{
                                                width: isActive ? 36 : 16,
                                                height: isActive ? 36 : 16,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                transition:
                                                    "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                                                bgcolor: isActive
                                                    ? "secondary.main"
                                                    : "#101510",
                                                border: "1.5px solid",
                                                borderColor: isActive
                                                    ? "primary.main"
                                                    : "primary.main",
                                                boxShadow: isActive
                                                    ? "0 0 0 4px rgba(255,255,255,0.08)"
                                                    : "none",
                                                "&:hover": {
                                                    borderColor:
                                                        "secondary.main",
                                                    bgcolor: isActive
                                                        ? "secondary.main"
                                                        : "#7A9472",
                                                },
                                            }}
                                        >
                                            {isActive ? (
                                                <Icon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: "primary.contrastText",
                                                        transition:
                                                            "color 0.25s ease",
                                                    }}
                                                />
                                            ) : (
                                                <RadioButtonUncheckedIcon
                                                    sx={{
                                                        fontSize: 14,
                                                        color: "grey.400",
                                                        transition:
                                                            "color 0.25s ease",
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                {/* Sections */}
                {[Hero, About, Experience, Projects, Skills, Education].map(
                    (Component, i) => (
                        <Box
                            key={SECTIONS[i].id}
                            id={SECTIONS[i].id}
                            ref={(el) => (sectionRefs.current[i] = el)}
                            data-index={i}
                        >
                            <Component />
                        </Box>
                    ),
                )}
            </EllipseBackground>
        </ThemeProvider>
    );
}
