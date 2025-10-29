import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import WifiIcon from "@mui/icons-material/Wifi";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const libraryFeatures = [
  {
    icon: <MenuBookIcon sx={{ fontSize: 50, color: "#ff416c" }} />,
    title: "Extensive Book Collection",
    description: "A rich variety of books covering academics, fiction, non-fiction, and reference materials for all grades.",
  },
  {
    icon: <LaptopMacIcon sx={{ fontSize: 50, color: "#ff4b2b" }} />,
    title: "Digital Library",
    description: "Access to e-books, journals, and educational resources to support modern learning and research.",
  },
  {
    icon: <LocalLibraryIcon sx={{ fontSize: 50, color: "#1e3c72" }} />,
    title: "Reading Areas",
    description: "Quiet, well-lit reading areas with comfortable seating for focused study and learning.",
  },
  {
    icon: <WifiIcon sx={{ fontSize: 50, color: "#2a5298" }} />,
    title: "Wi-Fi Access",
    description: "High-speed internet connectivity to help students access online research and educational platforms.",
  },
  {
    icon: <ImportContactsIcon sx={{ fontSize: 50, color: "#f9a825" }} />,
    title: "Research Support",
    description: "Guidance from library staff and access to study materials to aid in research and project work.",
  },
];

const Library = () => {
  return (
    <Box sx={{  position: "relative"}}>
      {/* Subtle Background Gradient */}
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
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
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
                School Library
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                Explore our resources, reading spaces, and digital facilities for enhanced learning
              </Typography>
            </motion.div>
          </Box>

      {/* Library Features Grid */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          {libraryFeatures.map((feature, index) => (
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
                    color: "text.primary",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {feature.description}
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
            width:'100%'
          }}
        >
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              A Hub for Learning
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our library is designed to foster curiosity, research, and knowledge sharing among students.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Library;
