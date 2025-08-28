import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

const AdmissionProcess = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Step 1: Registration",
      desc: "Parents/Guardians need to fill out the registration form available at the school office or online.",
      icon: <AssignmentTurnedInIcon color="primary" fontSize="large" />,
    },
    {
      title: "Step 2: Fill Admission Form",
      desc: "An entrance test or interview will be conducted depending on the class applied for.",
      icon: <DescriptionIcon color="primary" fontSize="large" />,
    },
    {
      title: "Step 3: Document Uploads",
      desc: "Submit required documents including birth certificate, previous school records, and ID proofs.",
      icon: <DescriptionIcon color="primary" fontSize="large" />,
    },
    {
      title: "Step 4: Fees Payments",
      desc: "Upon successful verification, admission will be confirmed when you complete fee payment.",
      icon: <AssignmentTurnedInIcon color="primary" fontSize="large" />,
    },
  ];

  const documents = [
    "Birth Certificate",
    "Passport Size Photographs",
    "Previous School Report Card",
    "Transfer Certificate (if applicable)",
    "Aadhar Card / ID Proof of Student & Parents",
  ];

  const importantDates = [
    "Admission Opens: March 1, 2025",
    "Last Date of Admission: March 30, 2025",
    "Fees Payment last date: April 10, 2025",
    "Final list: April 31, 2025",
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #36D1DC, #5B86E5)",
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
          <Typography variant="h2" fontWeight={700}>
            Admission Process
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Join us for a brighter future 🌟
          </Typography>
        </motion.div>
      </Box>

      {/* Admission Steps */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary"
          gutterBottom
          align="center"
        >
          Step-by-Step Process
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {steps.map((step, i) => (
            <Grid item size={{xs:12, md:6,sm:12}} key={i}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  elevation={4}
                  sx={{ borderRadius: 3, p: 2, height: "100%" }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    {step.icon}
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{ mt: 2 }}
                    >
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Documents Required */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="secondary"
          gutterBottom
          align="center"
        >
          Documents Required 📄
        </Typography>
        <List sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
          {documents.map((doc, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <DescriptionIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={doc} />
            </ListItem>
          ))}
        </List>
      </Container>

      <Divider />

      {/* Important Dates */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary"
          gutterBottom
          align="center"
        >
          Important Dates 📅
        </Typography>
        <List sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
          {importantDates.map((date, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <DateRangeIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary={date} />
            </ListItem>
          ))}
        </List>
      </Container>

      <Divider />

      {/* Contact CTA */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 6,
          textAlign: "center",
        }}
      >
        <ContactMailIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Need Help with Admission?
        </Typography>
        <Typography sx={{ mb: 3, color: "text.secondary" }}>
          For queries, please contact the school office or email us at
          admissions@msumvschool.com
        </Typography>
        <Button 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={()=>{
          navigate("/contact-us")
        }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default AdmissionProcess;
