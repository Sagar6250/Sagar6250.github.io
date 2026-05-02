import { Box, Typography, Container, Chip, Stack, Paper } from "@mui/material";
import { experience } from "../data/portfolio";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

export default function Experience() {
    return (
        <Box
            id="experience"
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
                    Where I've Worked
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        color: "primary.main",
                        mb: 8,
                    }}
                >
                    Experience
                </Typography>
                <Timeline position="alternate">
                    {experience.map((job, i) => (
                        <TimelineItem key={i} gap={4}>
                            <TimelineOppositeContent
                                sx={{
                                    mt: "auto",
                                    mb: "auto",
                                    pt: 0,
                                }}
                                color="text.secondary"
                            >
                                <Typography
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {job.period}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "secondary.main",
                                        fontSize: "0.8rem",
                                        mt: 0.5,
                                    }}
                                >
                                    {job.location}
                                </Typography>
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineConnector
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderWidth: "0.5px",
                                        borderColor: "text.secondary",
                                        borderStyle:
                                            i !== 0 ? "solid" : "dashed",
                                    }}
                                />
                                <TimelineDot
                                    color="secondary"
                                    variant="outlined"
                                    sx={{ p: 1 }}
                                >
                                    <RadioButtonCheckedOutlinedIcon color="secondary" />
                                </TimelineDot>
                                <TimelineConnector
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderWidth: "0.5px",
                                        borderColor: "text.secondary",
                                        borderStyle:
                                            i < experience.length - 1
                                                ? "solid"
                                                : "dashed",
                                    }}
                                />
                            </TimelineSeparator>

                            <TimelineContent
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    py: "12px",
                                    px: 2,
                                }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                        width: "100%",
                                        alignItems: "flex-start",
                                        border: "1px solid rgba(164, 199, 128, 0.09)",
                                        transition: "all 0.25s ease",
                                        "&:hover": {
                                            borderColor:
                                                "rgba(163, 199, 128, 0.47)",
                                            transform: "translateY(-2px)",
                                            boxShadow:
                                                "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)",
                                            bgcolor: "rgba(16,21,16,0.98)",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: "1.1rem",
                                            color: "primary.main",
                                            mb: 0.5,
                                        }}
                                    >
                                        {job.role}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.85rem",
                                            mb: 2,
                                        }}
                                    >
                                        {job.company}
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                        gap={1}
                                        sx={{
                                            mb: 3,
                                            justifyContent:
                                                i % 2 === 0
                                                    ? "flex-start"
                                                    : "flex-end",
                                        }}
                                    >
                                        {job.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    bgcolor:
                                                        "rgba(201,168,76,0.1)",
                                                    color: "secondary.main",
                                                    border: "1px solid rgba(201,168,76,0.22)",
                                                }}
                                            />
                                        ))}
                                    </Stack>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1.5,
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "0.875rem",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {job.description}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}
