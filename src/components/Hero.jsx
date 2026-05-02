import { Box, Typography, Button, Container, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { personal } from "../data/portfolio";
import { useEffect, useState } from "react";
// import profilePic from "../assets/sagar_linkedin.jpg";

const roles = [
    "Software Engineer",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Gamer",
    "Artist",
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % roles.length);
                setVisible(true); // Fade in with next word
            }, 400); // Wait for fade-out to complete
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <Box
            id="home"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                pt: { xs: 10, md: 0 },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                    radial-gradient(ellipse 70% 55% at 60% 45%, rgba(111, 141, 104, 0.08) 0%, transparent 70%),
                    radial-gradient(ellipse 40% 35% at 48% 43%, rgba(111, 141, 104, 0.06) 0%, transparent 60%)
                    `,
                    pointerEvents: "none",
                    mixBlendMode: "soft-light",
                }}
            />
            <Container
                maxWidth="lg"
                sx={{
                    px: { xs: 3, md: 6 },
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                    gap: 4,
                }}
            >
                <Box sx={{ maxWidth: 720 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            maxWidth: 520,
                            lineHeight: 1.8,
                            fontSize: "1rem",
                            mb: 1,
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.4s",
                        }}
                    >
                        Hi, I am
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {
                                xs: "3.2rem",
                                sm: "4.5rem",
                                md: "6rem",
                            },
                            lineHeight: 1.0,
                            color: "primary.main",
                            mb: 3,
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.25s",
                        }}
                    >
                        Sagar
                        <br />
                        Subbaraya
                    </Typography>
                    <Typography
                        sx={{
                            color: "secondary.main",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            mb: 3,
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.1s",
                            display: "flex",
                            gap: "0.5em",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: "inline-block",
                                transition:
                                    "opacity 0.4s ease, transform 0.4s ease",
                                opacity: visible ? 1 : 0,
                                transform: visible
                                    ? "translateY(0)"
                                    : "translateY(-8px)",
                            }}
                        >
                            {roles[index]}
                        </Box>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            maxWidth: 520,
                            lineHeight: 1.8,
                            fontSize: "1rem",
                            mb: 5,
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.4s",
                        }}
                    >
                        {personal.summary}
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={2}
                        flexWrap="wrap"
                        gap={2}
                        sx={{
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.55s",
                        }}
                    >
                        <Button
                            variant="outlined"
                            href={`mailto:${personal.email}`}
                            startIcon={<EmailIcon />}
                            sx={{
                                borderColor: "secondary.main",
                                color: "secondary.main",
                                px: 3,
                                py: 1.2,
                                fontSize: "0.85rem",
                                "&:hover": {
                                    bgcolor: "secondary.main",
                                    color: "#0B0E0C",
                                    borderColor: "secondary.main",
                                },
                                transition: "all 0.2s ease",
                            }}
                        >
                            Get in Touch
                        </Button>
                        <Button
                            variant="text"
                            href={personal.github}
                            target="_blank"
                            startIcon={<GitHubIcon />}
                            sx={{
                                color: "text.secondary",
                                px: 2,
                                "&:hover": { color: "primary.main" },
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="text"
                            href={personal.linkedin}
                            target="_blank"
                            startIcon={<LinkedInIcon />}
                            sx={{
                                color: "text.secondary",
                                px: 2,
                                "&:hover": { color: "primary.main" },
                            }}
                        >
                            LinkedIn
                        </Button>
                    </Stack>
                </Box>
            </Container>
            <Box
                onClick={() => scrollTo("about")}
                sx={{
                    position: "absolute",
                    bottom: 40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    cursor: "pointer",
                    color: "text.secondary",
                    animation: "bounce 2s ease infinite",
                    "&:hover": { color: "primary.main" },
                }}
            >
                <KeyboardArrowDownIcon />
            </Box>
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
        </Box>
    );
}
