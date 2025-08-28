import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceIcon from "@mui/icons-material/Science";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const infrastructures = [
  {
    icon: <SchoolIcon sx={{ fontSize: 50, color: "#ff416c" }} />,
    title: "School Buildings",
    description: "Spacious classrooms with proper lighting and ventilation for a comfortable learning environment.",
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 50, color: "#ff4b2b" }} />,
    title: "Playgrounds",
    description: "Well-maintained playgrounds for football, cricket, and other outdoor activities to encourage physical fitness.",
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 50, color: "#1e3c72" }} />,
    title: "Library",
    description: "A rich collection of books, journals, and digital resources to support learning and research.",
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 50, color: "#2a5298" }} />,
    title: "Science Labs",
    description: "Fully-equipped laboratories for Physics, Chemistry, and Biology to provide hands-on learning experiences.",
  },
  {
    icon: <LocalLibraryIcon sx={{ fontSize: 50, color: "#f9a825" }} />,
    title: "Auditorium & Multipurpose Hall",
    description: "Spacious halls for cultural events, seminars, and extracurricular activities.",
  },
];

const Infrastructure = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
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
            School Infrastructure
          </Typography>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
            Explore the facilities and resources that make our school a center of excellence
          </Typography>
        </motion.div>
      </Box>

      {/* Infrastructure Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {infrastructures.map((infra, index) => (
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
                  <Box sx={{ mb: 2 }}>{infra.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {infra.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {infra.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          mt: 6,
          background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
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
            Discover Our Campus
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
            Our infrastructure is designed to provide students with the best environment for learning, sports, and cultural activities.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Infrastructure;
