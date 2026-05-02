import { Box, Typography, Container, Chip, Stack, Grid } from "@mui/material";
import { skills } from "../data/portfolio";

export default function Skills() {
    return (
        <Box
            id="skills"
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
                    What I Work With
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        color: "primary.main",
                        mb: 8,
                    }}
                >
                    Skills
                </Typography>

                <Grid container spacing={4}>
                    {Object.entries(skills).map(([category, items]) => (
                        <Grid item xs={12} sm={6} md={4} key={category}>
                            <Typography
                                sx={{
                                    color: "secondary.main",
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    mb: 2,
                                    pb: 1.5,
                                    borderBottom:
                                        "1px solid rgba(201,168,76,0.18)",
                                }}
                            >
                                {category}
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {Object.entries(items).map(
                                    ([key, { name, icon }]) => (
                                        <Chip
                                            key={key}
                                            label={name}
                                            icon={
                                                icon && (
                                                    <Box
                                                        component="img"
                                                        src={icon}
                                                        alt=""
                                                        aria-hidden="true"
                                                        sx={{
                                                            width: 16,
                                                            height: 16,
                                                            display: "block",
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                )
                                            }
                                            size="large"
                                            sx={{
                                                bgcolor:
                                                    "rgba(181,201,161,0.06)",
                                                color: "text.primary",
                                                border: "1px solid rgba(181,201,161,0.12)",
                                                fontSize: "0.75rem",
                                                fontWeight: 500,
                                                letterSpacing: "0.02em",
                                                textTransform: "none",
                                                "&:hover": {
                                                    bgcolor:
                                                        "rgba(181,201,161,0.13)",
                                                    borderColor:
                                                        "rgba(181,201,161,0.3)",
                                                },
                                                transition: "all 0.15s ease",
                                                p: "5px",
                                                m: "1px",
                                            }}
                                        />
                                    ),
                                )}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
