import { Box, Typography } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { skills } from "../data/portfolio";

// ─── Row layout config ────────────────────────────────────────────────────────
// Each entry is one visual row. Single string = full-width. Array = side-by-side.

const ROW_LAYOUT = [
    "Languages",
    ["Frontend", "Databases"],
    ["Backend & APIs", "Cloud & DevOps"],
    "AI / ML",
    "Tools",
];

// ─── SkillChip ────────────────────────────────────────────────────────────────

function SkillChip({ name, icon }) {
    return (
        <Box
            component="span"
            sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                px: "12px",
                py: "7px",
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: "4px",
                bgcolor: "transparent",
                whiteSpace: "nowrap",
                flexShrink: 0,
                cursor: "default",
                userSelect: "none",
                transition: "background-color 0.15s ease",
                "&:hover": { bgcolor: "rgba(212, 175, 55, 0.08)" },
            }}
        >
            {icon && (
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
            )}
            <Typography
                component="span"
                sx={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "text.primary",
                }}
            >
                {name}
            </Typography>
        </Box>
    );
}

// ─── MarqueeTrack ─────────────────────────────────────────────────────────────

function MarqueeTrack({ category, direction }) {
    const skillList = skills[category];
    const repeated = [...skillList, ...skillList, ...skillList, ...skillList];
    const duration = `${Math.max(20, skillList.length * 4)}s`;
    const animClass = direction === "left" ? "marquee-left" : "marquee-right";

    return (
        <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
                sx={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "primary.main",
                    mb: 1,
                    pl: 0.5,
                }}
            >
                {category}
            </Typography>

            <Box
                sx={{
                    overflow: "hidden",
                    width: "100%",
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
                }}
            >
                <Box
                    className={animClass}
                    style={{ "--marquee-duration": duration }}
                    sx={{
                        display: "flex",
                        gap: "8px",
                        width: "max-content",
                        py: "4px",
                        "&:hover": { animationPlayState: "paused" },
                    }}
                >
                    {repeated.map((skill, i) => (
                        <SkillChip
                            key={i}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

// ─── SkillsMarquee ────────────────────────────────────────────────────────────

export default function SkillsMarquee() {
    return (
        <>
            <GlobalStyles
                styles={`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  var(--marquee-duration, 30s) linear infinite; }
        .marquee-right { animation: marquee-right var(--marquee-duration, 30s) linear infinite; }
        .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
      `}
            />

            <Box sx={{ mx: "auto", width: "60%", overflow: "hidden", py: 6 }}>
                {ROW_LAYOUT.map((row, rowIndex) => {
                    const categories = Array.isArray(row) ? row : [row];
                    return (
                        <Box
                            key={rowIndex}
                            sx={{
                                display: "flex",
                                gap: 4,
                                mb: 3,
                                // On mobile, stack vertically
                                flexDirection: { xs: "column", sm: "row" },
                            }}
                        >
                            {categories.map((category, colIndex) => (
                                <MarqueeTrack
                                    key={category}
                                    category={category}
                                    // Alternate direction: paired cols go opposite ways
                                    direction={
                                        categories.length > 1
                                            ? colIndex % 2 === 0
                                                ? "left"
                                                : "right"
                                            : rowIndex % 2 === 0
                                              ? "left"
                                              : "right"
                                    }
                                />
                            ))}
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
