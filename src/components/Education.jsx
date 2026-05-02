import { Box, Typography, Container, Grid } from "@mui/material";
// import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import { education, personal } from "../data/portfolio";

export default function Education() {
    return (
        <>
            <Box
                id="education"
                sx={{
                    py: { xs: 10, md: 16 },
                }}
            >
                <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
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
                        Education
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2.2rem", md: "3rem" },
                            color: "primary.main",
                            mb: 8,
                        }}
                    >
                        Academic Background
                    </Typography>

                    <Grid container spacing={4} juastifyContent="space-around">
                        {education.map((edu, i) => (
                            <Grid
                                item
                                sx={{
                                    width: "48%",
                                }}
                                key={i}
                            >
                                <Box
                                    sx={{
                                        p: 4,
                                        border: "1px solid rgba(181,201,161,0.09)",
                                        borderRadius: 1,
                                        bgcolor: "background.paper",
                                        height: "100%",
                                        transition: "border-color 0.2s ease",
                                        alignItems: "center",
                                        "&:hover": {
                                            borderColor:
                                                "rgba(201,168,76,0.25)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 1,
                                            bgcolor: "#cbaf61",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 3,
                                        }}
                                    >
                                        <Avatar
                                            src={edu.icon}
                                            alt={`${edu.school} logo`}
                                            sx={{ width: 80, height: 80 }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontSize: "1rem",
                                                color: "primary.main",
                                                mb: 0.5,
                                            }}
                                        >
                                            {edu.school}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "0.8rem",
                                                mb: 2,
                                            }}
                                        >
                                            {edu.location}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "text.primary",
                                                fontSize: "0.9rem",
                                                mb: 1,
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {edu.degree}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "secondary.main",
                                                fontSize: "0.8rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            GPA: {edu.gpa}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box
                sx={{
                    py: 6,
                    borderTop: "1px solid rgba(181,201,161,0.08)",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: "'DM Serif Display', serif",
                            color: "primary.main",
                            fontSize: { xs: "1.8rem", md: "2.5rem" },
                            mb: 2,
                        }}
                    >
                        Let's build something together.
                    </Typography>
                    <Typography
                        component="a"
                        href={`mailto:${personal.email}`}
                        sx={{
                            color: "secondary.main",
                            fontSize: "1rem",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(201,168,76,0.4)",
                            pb: 0.5,
                            "&:hover": { borderColor: "secondary.main" },
                        }}
                    >
                        {personal.email}
                    </Typography>
                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: "0.78rem",
                            mt: 6,
                        }}
                    >
                        © {new Date().getFullYear()} Sagar Subbaraya
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
