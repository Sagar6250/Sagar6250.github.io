import {
    Box,
    Typography,
    Container,
    Chip,
    Stack,
    Grid,
    Card,
    // CardMedia,
    CardContent,
} from "@mui/material";
import { projects } from "../data/portfolio";
// import theme from "../theme";

export default function Projects() {
    return (
        <Box
            id="projects"
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
                    Things I've Built
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        color: "primary.main",
                        mb: 8,
                    }}
                >
                    Projects
                </Typography>

                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(3, 1fr)",
                        },
                        gridAutoRows: "1fr",
                    }}
                >
                    {projects.map((p, i) => (
                        <Grid
                            // size={{ xs: 12, sm: 6, lg: 4 }}
                            key={i}
                            // sx={{ minHeight: 300 }}
                        >
                            <Card
                                sx={{
                                    height: "100%",
                                    // p: 3.5,
                                    border: "1px solid rgba(181,201,161,0.09)",
                                    borderRadius: 1,
                                    // bgcolor: "background.paper",
                                    transition: "all 0.25s ease",
                                    cursor: "default",
                                    display: "flex",
                                    flexDirection: "column",
                                    "&:hover": {
                                        borderColor: "rgba(181,201,161,0.28)",
                                        transform: "translateY(-4px)",
                                        boxShadow:
                                            "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)",
                                        bgcolor: "rgba(16,21,16,0.98)",
                                    },
                                }}
                            >
                                {/* <CardMedia
                                    component="div"
                                    sx={{
                                        height: 200,
                                    }}
                                    style={{
                                        backgroundImage: `linear-gradient(to top, rgb(16, 21, 16) 0%, transparent 100%), url(${p.image})`,
                                    }}
                                    image={p.image}
                                    alt={p.title}
                                    title={p.title}
                                /> */}
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.1em",
                                            mb: 2,
                                        }}
                                    >
                                        {p.year}
                                    </Typography>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: "1.05rem",
                                            color: "primary.main",
                                            mb: 0.5,
                                        }}
                                    >
                                        {p.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "secondary.main",
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            mb: 2,
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {p.subtitle}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.7,
                                            flex: 1,
                                            mb: 3,
                                        }}
                                    >
                                        {p.description}
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        sx={{ flexWrap: "wrap", mt: "auto" }}
                                        // spacing={{ xs: "1px", sm: "1px" }}
                                    >
                                        {p.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    m: "1px",
                                                    bgcolor: "transparent",
                                                    color: "text.secondary",
                                                    border: "1px solid rgba(181,201,161,0.14)",
                                                    fontSize: "0.65rem",
                                                    textTransform: "none",
                                                    alignItems: "center",
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
