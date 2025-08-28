import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  // List,
  // ListItem,
  // ListItemText,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

const PrincipalOffice = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: "40vh", md: "50vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #8360c3, #2ebf91)",
          color: "white",
          p: { xs: 3, md: 5 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Principal’s Office
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            Meet our Principal and explore the vision & mission of our school
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={5}>
          {/* Principal Profile */}
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, textAlign: "center", p: 2,display:'flex'}}>
              <Avatar
                alt="Principal"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{
                  width: 140,
                  height: 140,
                  mx: "auto",
                  mt: 2,
                  border: "4px solid #2ebf91",
                }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={700}>
                  Dr. Rakesh Sharma
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Principal, Green Valley School
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ mb: 1 }}>
                  🎓 Ph.D. in Education
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  📘 20+ Years of Teaching Experience
                </Typography>
                <Typography variant="body2">
                  🌍 Dedicated to nurturing young minds
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Principal's Message */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary"
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              Message from the Principal
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Welcome to Green Valley School! Our mission is to provide quality
              education that empowers students with knowledge, creativity, and
              discipline. We focus on holistic development, fostering curiosity,
              and instilling values of integrity and respect.  
              <br />
              <br />
              Education is not only about academics, but also about preparing
              students for life. I invite parents, teachers, and students to
              work hand in hand to make learning a joyful journey.
            </Typography>
          </Grid>
        </Grid>

        {/* Quick Info Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            color="secondary"
            gutterBottom
          >
            Quick Information
          </Typography>
          <Divider sx={{ width: "60%", mx: "auto", mb: 3 }} />

          <Grid container spacing={4}>
            <Grid item size={{xs:12, md:6,sm:12}}>
              <Card sx={{ borderRadius: 3, p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight={600}>
                  Vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To create lifelong learners who contribute positively to
                  society.
                </Typography>
              </Card>
            </Grid>
            <Grid item size={{xs:12, md:6,sm:12}}>
              <Card sx={{ borderRadius: 3, p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight={600}>
                  Mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Providing holistic education with innovation and discipline.
                </Typography>
              </Card>
            </Grid>
            <Grid item size={{xs:12, md:6,sm:12}}>
              <Card sx={{ borderRadius: 3, p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight={600}>
                  Office Hours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mon - Fri <br /> 9:00 AM - 4:00 PM
                </Typography>
              </Card>
            </Grid>
            <Grid item size={{xs:12, md:6,sm:12}}>
              <Card sx={{ borderRadius: 3, p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight={600}>
                  Contact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  principal@gvs.edu <br /> +91 98765 43210
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Achievements / Gallery */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            color="primary"
            gutterBottom
          >
            Achievements & Highlights
          </Typography>
          <Divider sx={{ width: "60%", mx: "auto", mb: 3 }} />
          <Grid container spacing={3}>
            {[
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
            ].map((img, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={img}
                      alt="Principal achievement"
                    />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PrincipalOffice;
