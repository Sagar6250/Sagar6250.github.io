import { useState } from "react";
import {
  AppBar, Toolbar, Box, Typography, Container, Button,
  IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { personal } from "../data/portfolio";

const navLinks = ["About", "Experience", "Projects", "Skills", "Education"];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{
        background: trigger ? "rgba(11,14,12,0.92)" : "transparent",
        backdropFilter: trigger ? "blur(12px)" : "none",
        borderBottom: trigger ? "1px solid rgba(181,201,161,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <Toolbar sx={{ maxWidth: 1100, width: "100%", mx: "auto", px: { xs: 2, md: 4 } }}>
          <Typography variant="h6" sx={{
            fontFamily: "'DM Serif Display', serif",
            color: "primary.main", flexGrow: 1,
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            cursor: "pointer",
          }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            SS
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button key={link} onClick={() => scrollTo(link)}
                sx={{ color: "text.secondary", fontSize: "0.8rem", letterSpacing: "0.08em", "&:hover": { color: "primary.main" } }}>
                {link}
              </Button>
            ))}
            <IconButton href={personal.github} target="_blank"
              sx={{ color: "text.secondary", ml: 1, "&:hover": { color: "primary.main" } }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton href={personal.linkedin} target="_blank"
              sx={{ color: "text.secondary", "&:hover": { color: "secondary.main" } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>

          <IconButton sx={{ display: { md: "none" }, color: "primary.main" }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "background.default", width: 220, borderLeft: "1px solid rgba(181,201,161,0.1)" } }}>
        <List sx={{ pt: 4 }}>
          {navLinks.map((link) => (
            <ListItem key={link} onClick={() => scrollTo(link)} sx={{ cursor: "pointer" }}>
              <ListItemText primary={link} primaryTypographyProps={{
                sx: { color: "text.primary", fontWeight: 600, fontSize: "0.9rem" }
              }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
