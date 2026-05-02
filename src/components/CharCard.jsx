import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";

const STATS = [
    { label: "Frontend", pct: 90 },
    { label: "Backend", pct: 82 },
    { label: "Problem Solving", pct: 96 },
    { label: "Caffeine", pct: 100 },
];

export default function CharacterCard({ profilePic }) {
    const { palette } = useTheme();

    const barColor = (pct) =>
        pct === 100
            ? "#c0392b"
            : pct >= 94
              ? palette.secondary.main
              : palette.primary.main;

    return (
        <Box
            sx={{
                width: 300,
                background: palette.background.default,
                border: `2px solid ${palette.secondary.main}`,
                borderRadius: "8px",
                overflow: "hidden",
                color: "text.primary",
                userSelect: "none",
            }}
        >
            <Box
                sx={{
                    background: palette.secondary.main,
                    px: 1.5,
                    py: 0.75,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: palette.background.default,
                        letterSpacing: 1,
                    }}
                >
                    MLE + SDE
                </Box>
                <Box
                    sx={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: palette.background.default,
                    }}
                >
                    LV. 23
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 2.5,
                    pb: 2,
                    background: palette.background.paper,
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: 240,
                        height: 300,
                        border: `2px solid ${palette.secondary.main}`,
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: `0 0 18px ${palette.secondary.main}44`,
                        position: "relative",
                    }}
                >
                    <Box
                        component="img"
                        src={profilePic}
                        alt="Profile"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${palette.primary.main}08 5px, ${palette.primary.main}10 5px)`,
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        bottom: 11,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: palette.secondary.main,
                        color: palette.background.default,
                        fontSize: 9,
                        fontWeight: 700,
                        px: 6,
                        py: 0.75,
                        letterSpacing: 1,
                        whiteSpace: "nowrap",
                    }}
                >
                    {""}
                </Box>
            </Box>

            <Box
                sx={{
                    textAlign: "center",
                    py: 1.5,
                    borderBottom: `1px solid ${palette.secondary.main}33`,
                }}
            >
                <Box
                    sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: palette.secondary.main,
                        letterSpacing: 1,
                        fontFamily: "'Jersey 25', serif",
                    }}
                >
                    SAGAR S
                </Box>
                <Box
                    sx={{
                        fontSize: 12,
                        color: palette.text.secondary,
                        letterSpacing: 2,
                        mt: 0.5,
                    }}
                >
                    SOFTWARE DEVELOPER
                </Box>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1px",
                    background: `${palette.secondary.main}18`,
                    borderBottom: `1px solid ${palette.secondary.main}33`,
                }}
            >
                {STATS.map((s) => (
                    <Box
                        key={s.label}
                        sx={{
                            background: palette.background.default,
                            px: 1.5,
                            py: 1,
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: 10,
                                color: palette.text.secondary,
                                letterSpacing: 1,
                                mb: 0.75,
                            }}
                        >
                            {s.label.toUpperCase()}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75,
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    height: 5,
                                    background: palette.background.paper,
                                    borderRadius: "1px",
                                    overflow: "hidden",
                                    border: `1px solid ${palette.secondary.main}22`,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "100%",
                                        width: `${s.pct}%`,
                                        background: barColor(s.pct),
                                        borderRadius: "1px",
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    fontSize: 8,
                                    color: barColor(s.pct),
                                    minWidth: 26,
                                    textAlign: "right",
                                }}
                            >
                                {s.pct === 100 ? "MAX" : s.pct}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
