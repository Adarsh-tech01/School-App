import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import axios from "axios";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const HomePage = () => {
  const navigate = useNavigate();
 
  const titleText = "माँ शांति उच्चतर माध्यमिक विद्यालय ".split(" ");

  const handleClick = () => {
    navigate("/admission/apply");
  };

  // api from express 
    // const [users, setUsers] = useState([]);
  
//  useEffect(()=>{
//   axios.get("http://localhost:3001/users")
//   .then((res)=>setUsers(res.data))
//   .catch((err)=> console.log(err))
//  },[]);

//  for(let i=0;i<users.length;i++){
//   console.log(users[i].Email,users[i].Password);
//  }
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #b60606ff, #eaeaeeff, #01cd23ff)",
          color: "white",
          p: 4,
          overflow: "hidden",
        }}
      >
        <Container>
          {/* Animated Heading (Looping Bounce/Fade) */}
          <Typography
            variant="h2"
            fontWeight={700}
            gutterBottom
            component="div"
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {titleText.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: [0, 1, 0] }} // fade in & out loop
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.5, // 👈 wave effect word by word
                }}
                style={{ marginRight: "8px",color:"black" }}
              >
                {word}
              </motion.span>
            ))}
          </Typography>

          {/* Subtitle with looping floating effect */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Typography variant="h6" sx={{ mb: 3,py:2, color:"black" }}>
              Empowering Students for a Brighter Future ✨
            </Typography>
          </motion.div>

          {/* Button with pulse animation */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 4, py: 1.2, fontWeight: 600 }}
              onClick={handleClick}
            >
              Enroll Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Why choose Section */}
      <Container sx={{ py: 2}}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            gutterBottom
            color="primary"
          >
            Why To Choose Us
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <Typography align="center" sx={{ mb: 4, color: "text.secondary" }}>
            We are dedicated to providing holistic education and fostering
            excellence in academics, sports, and extracurricular activities.
          </Typography>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Container sx={{ py: 2 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: <SchoolIcon color="primary" sx={{ fontSize: 50 }} />,
              title: "Quality Education",
              desc: "We nurture leadership, teamwork, and creativity in every child.",
            },
            {
              icon: <PeopleIcon color="primary" sx={{ fontSize: 50 }} />,
              title: "Student Community",
              desc: "We support growth and experiences and diverse perspectives.",
            },
            {
              icon: <SportsSoccerIcon color="primary" sx={{ fontSize: 50 }} />,
              title: "Sports & Activities",
              desc: "We encourage participation in sports, arts, and cultural events.",
            },
            {
              icon: <EmojiNatureIcon color="primary" sx={{ fontSize: 50 }} />,
              title: "Fresh Environment",
              desc: "We provide a green, healthy, and inspiring learning atmosphere.",
            },
          ].map((feature, i) => (
            <Grid item size={{xs:12 ,md:6, sm:4}} key={i}>
              <MotionCard
                elevation={4}
                sx={{ borderRadius: 3 }}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ scale: 1.05 }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  {feature.icon}
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    {feature.desc}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <MotionBox
        sx={{  py: 4 }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            gutterBottom
            color="primary"
          >
            Contact Us
          </Typography>
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Email: msumv@gmail.com
            </Typography>
            <Typography variant="h6">Phone: +91 98765 43210</Typography>
          </Box>
        </Container>
      </MotionBox>

      {/* Footer */}
      <MotionBox
        sx={{
          backgroundColor: "#3f51b5",
          color: "white",
          py: 3,
          textAlign: "center",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} MAA SHANTI U.M VIDHYALAYA. All rights
          reserved.
        </Typography>
      </MotionBox>
    </Box>
  );
};

export default HomePage;
