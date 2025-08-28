import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import ComputerIcon from "@mui/icons-material/Computer";
import WifiIcon from "@mui/icons-material/Wifi";
import MemoryIcon from "@mui/icons-material/Memory";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";

const facilities = [
  {
    icon: <ComputerIcon sx={{ fontSize: 50, color: "#ff416c" }} />,
    title: "Computer Labs",
    description: "State-of-the-art computer labs with high-speed desktops and latest software to enhance learning.",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 50, color: "#ff4b2b" }} />,
    title: "Hardware & Devices",
    description: "Equipped with modern hardware, projectors, smart boards, and peripherals for interactive learning.",
  },
  {
    icon: <WifiIcon sx={{ fontSize: 50, color: "#1e3c72" }} />,
    title: "High-speed Internet",
    description: "Reliable internet connectivity throughout the campus to support research and online learning.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 50, color: "#2a5298" }} />,
    title: "Smart Classrooms",
    description: "Interactive smart classrooms with digital boards and multimedia resources for engaging lessons.",
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 50, color: "#f9a825" }} />,
    title: "Software Tools",
    description: "Access to educational software, programming tools, and learning platforms for students and teachers.",
  },
];

const ICT = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 12 },
          mb: 6,
          background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
          color: "white",
          borderRadius: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            ICT Facilities
          </Typography>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
            Empowering students with modern technology for enhanced learning experience
          </Typography>
        </motion.div>
      </Box>

      {/* Facilities Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {facilities.map((facility, index) => (
            <Grid item size={{xs:12, md:6, sm:12}} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  elevation={6}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    textAlign: "center",
                    py: 4,
                    px: 2,
                    background: "white",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{facility.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {facility.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {facility.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          mt: 6,
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          borderRadius: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
            Experience the Power of Technology
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
            Our ICT facilities are designed to provide students with the best digital learning environment.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ICT;
