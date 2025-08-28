import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import ChemistryIcon from "@mui/icons-material/LocalFireDepartment";
import ComputerIcon from "@mui/icons-material/Computer";
import LabIcon from "@mui/icons-material/ScienceOutlined";

const labs = [
  {
    icon: <ScienceIcon sx={{ fontSize: 50, color: "#ff416c" }} />,
    title: "Physics Lab",
    description: "Equipped with modern apparatus and experimental setups to understand the principles of physics.",
  },
  {
    icon: <ChemistryIcon sx={{ fontSize: 50, color: "#ff4b2b" }} />,
    title: "Chemistry Lab",
    description: "State-of-the-art chemistry lab with chemicals, instruments, and safety equipment for experiments.",
  },
  {
    icon: <BiotechIcon sx={{ fontSize: 50, color: "#1e3c72" }} />,
    title: "Biology Lab",
    description: "Fully functional biology lab with microscopes, specimens, and learning kits for hands-on study.",
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 50, color: "#2a5298" }} />,
    title: "Computer Lab",
    description: "High-speed computers with educational software for programming and research.",
  },
  {
    icon: <LabIcon sx={{ fontSize: 50, color: "#f9a825" }} />,
    title: "Instruments & Tools",
    description: "Various scientific instruments and tools to support practical learning in all science streams.",
  },
];

const LaboratoriesAndInstruments = () => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative",  bgcolor: "#f0f4f8" }}>
      {/* Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #ff416c, #ff4b2b, #1e3c72, #2a5298)",
          opacity: 0.05,
          zIndex: 0,
        }}
      />

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
                  Labs & Instruments
                </Typography>
                <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                 Explore our science labs and instruments that make learning interactive and practical.
                </Typography>
              </motion.div>
            </Box>
   
      {/* Labs Grid */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          {labs.map((lab, index) => (
            <Grid item size={{xs:12, md:6, sm:12}} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 4,
                    textAlign: "center",
                    py: 4,
                    px: 2,
                    background: "white",
                    color: "text.primary",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{lab.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {lab.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {lab.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: 6 }}>
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            color: "white",
            borderRadius: 4,
          }}
        >
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Hands-on Learning
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our labs and instruments provide students with practical exposure to science and technology, enhancing understanding and curiosity.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default LaboratoriesAndInstruments;
