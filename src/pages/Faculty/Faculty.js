// src/pages/FacultyPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

const facultyData = [
  {
    id: 1,
    name: "Mr. Rajesh Sharma",
    subject: "Mathematics",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "Passionate about teaching logical thinking and problem-solving.",
  },
  {
    id: 2,
    name: "Mrs. Neha Verma",
    subject: "Science",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    desc: "Dedicated to making science fun and practical for all students.",
  },
  {
    id: 3,
    name: "Mr. Amit Singh",
    subject: "English",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    desc: "Focuses on literature, writing skills, and communication.",
  },
  {
    id: 4,
    name: "Mrs. Anjali Gupta",
    subject: "Computer Science",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    desc: "Loves to teach coding, AI concepts, and digital literacy.",
  },
  {
    id: 4,
    name: "Mrs. Anjali Gupta",
    subject: "Computer Science",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    desc: "Loves to teach coding, AI concepts, and digital literacy.",
  },
  {
    id: 4,
    name: "Mrs. Anjali Gupta",
    subject: "Computer Science",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    desc: "Loves to teach coding, AI concepts, and digital literacy.",
  },
];

const Faculty = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Page Title */}
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
            marginBottom:'20px'
          }}
        >
          <Box textAlign="center" sx={{ mb: 5 }}>
            <SchoolIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
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
                Our Faculty
              </Typography>
              <Typography
                variant="h6"
                sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
              >
                Meet our highly qualified and dedicated teachers.
              </Typography>
            </motion.div>
          </Box>
        </Box>

        {/* Faculty Grid */}
        <Grid container spacing={4}>
          {facultyData.map((teacher) => (
            <Grid item size={{ xs: 12, md: 6, sm: 4 }} key={teacher.id}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 3,
                  textAlign: "center",
                  p: 2,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {/* Teacher Image */}
                <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src={teacher.img}
                    alt={teacher.name}
                    sx={{ width: 100, height: 100, mb: 2 }}
                  />
                </CardMedia>

                {/* Teacher Info */}
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {teacher.name}
                  </Typography>
                  <Typography color="primary" fontWeight={500}>
                    {teacher.subject}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {teacher.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Faculty;
