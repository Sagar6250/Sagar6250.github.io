import { Box, Typography, Container, Stack } from "@mui/material";
import { personal } from "../data/portfolio";
import profilePic from "../assets/sagar_linkedin.jpg";
import CharacterCard from "./CharCard";

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                pt: { xs: 10, md: 0 },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    px: { xs: 3, md: 6 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 4,
                }}
            >
                {/* <Box
                    sx={{
                        flexShrink: 0,
                        display: { xs: "none", md: "block" }, // hide on small screens
                    }}
                >
                    <Box
                        component="img"
                        src={profilePic}
                        alt="Profile"
                        sx={{
                            width: 300,
                            height: 300,
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "5px solid",
                            borderColor: "secondary.main",
                        }}
                    />
                </Box> */}
                <CharacterCard profilePic={profilePic} />

                <Box sx={{ maxWidth: 720 }}>
                    <Typography
                        sx={{
                            color: "secondary.main",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            mb: 1,
                        }}
                    >
                        What I do
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            lineHeight: 1.0,
                            color: "primary.main",
                            mb: 3,
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.25s",
                        }}
                    >
                        About Me
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
                        {personal.about}
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={12}
                        flexWrap="wrap"
                        gap={2}
                        sx={{
                            opacity: 0,
                            animation: "fadeUp 0.6s ease forwards",
                            animationDelay: "0.55s",
                            borderTop: "1px solid #7A947230",
                            borderBottom: "1px solid #7A947230",
                            p: 2,
                            mx: -2,
                        }}
                    >
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "secondary.main",
                                    fontSize: "0.875rem",
                                }}
                            >
                                Location
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.35rem",
                                    fontFamily: "'Jersey 15', serif",
                                }}
                            >
                                Tempe, AZ
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "secondary.main",
                                    fontSize: "0.875rem",
                                }}
                            >
                                Status
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.35rem",
                                    fontFamily: "'Jersey 15', serif",
                                }}
                            >
                                Open to Work
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
