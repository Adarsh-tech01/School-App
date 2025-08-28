import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useNavigate } from "react-router-dom";


// Sample gallery images
const galleryImages = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
];


const AboutSchool = () => {
  
  const navigate = useNavigate()
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #77A1D3, #79CBCA, #E684AE)",
          color: "white",
          textAlign: "center",
          p: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" fontWeight={700} gutterBottom>
            About Our School
          </Typography>
          <Typography variant="h6">
            Shaping young minds for a brighter tomorrow 🌟
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ py: 6 }}>
        {/* Mission & Vision */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    Our Mission 🎯
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    To provide quality education that empowers students to
                    achieve academic excellence, develop strong character, and
                    embrace lifelong learning.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card elevation={4} sx={{ borderRadius: 3, p: 2 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    Our Vision 👁️
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    To nurture responsible global citizens by fostering critical
                    thinking, creativity, and respect for diversity in a
                    supportive environment.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Highlights */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
            color="primary"
          >
            Key Highlights
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                icon: <SchoolIcon color="primary" sx={{ fontSize: 40 }} />,
                title: "Modern Classrooms",
                desc: "Smart classrooms equipped with the latest technology.",
              },
              {
                icon: <GroupsIcon color="primary" sx={{ fontSize: 40 }} />,
                title: "Dedicated Faculty",
                desc: "Experienced and passionate teachers guiding every child.",
              },
              {
                icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />,
                title: "Achievements",
                desc: "Consistent success in academics, sports, and competitions.",
              },
              {
                icon: (
                  <LocationCityIcon color="primary" sx={{ fontSize: 40 }} />
                ),
                title: "Infrastructure",
                desc: "Spacious campus with library, labs, and playgrounds.",
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    elevation={4}
                    sx={{
                      borderRadius: 3,
                      textAlign: "center",
                      p: 3,
                      height: "100%",
                    }}
                  >
                    {item.icon}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mt: 1 }}>
                      {item.desc}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Image Gallery */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
            color="primary"
          >
            Campus Life Gallery
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {galleryImages.map((img, i) => (
              <Grid item size={{xs:12,md:3,sm:6}} key={i}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Box
                    component="img"
                    src={img}
                    alt={`Gallery ${i}`}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 3,
                      boxShadow: 3,
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box
          sx={{
            mt: 8,
            py: 6,
            background:
              "linear-gradient(135deg, rgba(119,161,211,0.2), rgba(233,130,157,0.2))",
            borderRadius: 3,
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: "1200+", label: "Students" },
              { number: "80+", label: "Teachers" },
              { number: "50+", label: "Awards" },
              { number: "500+", label: "Alumni" },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i} textAlign="center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  <Typography variant="h4" fontWeight={700} color="primary">
                    {stat.number}
                  </Typography>
                  <Typography color="text.secondary">{stat.label}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Principal's Message */}
        <Box sx={{ mt: 8 }}>
          <Card elevation={4} sx={{ borderRadius: 3, p: 4 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Avatar
                  src="https://via.placeholder.com/150"
                  alt="Principal"
                  sx={{ width: 150, height: 150, mx: "auto" }}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Principal’s Message
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  “Education is not just about learning facts but training the
                  mind to think. At our school, we strive to create an
                  environment where curiosity thrives, values are nurtured, and
                  students become lifelong learners.”
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* History / Timeline */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
            color="primary"
          >
            Our Journey
          </Typography>
          <Divider sx={{ width: "60%", mx: "auto", my: 2 }} />
          <Typography
            align="center"
            sx={{ maxWidth: 700, mx: "auto", color: "text.secondary" }}
          >
            Established in 2005, our school has grown from a small institution
            to a leading center of learning. Over the years, we’ve achieved
            excellence in academics, expanded infrastructure, and created a
            strong alumni network contributing to society.
          </Typography>
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: "12px", px: 4 }}
            onClick= {()=>{
              navigate("/admission/apply")
            }}
          >
            Explore Admissions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSchool;
