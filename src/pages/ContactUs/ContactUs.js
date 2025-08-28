import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Link,
  Divider,
  Stack,
  useTheme,
  // useMediaQuery,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const ContactUs = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="lg">
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
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            We’d love to hear from you! Fill out the form below or reach out via
            our contact details.
          </Typography>
        </motion.div>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%",py:4 }}>
        <Grid
          container
          spacing={4}
          sx={{ mt: 2, maxWidth: 1200, width: "100%" }}
        >
          {/* Contact Form */}
          <Grid item size={{xs:12, md:12,sm:6}}>
            <Fade in timeout={1200}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[12],
                  },
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    Send Us a Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        mt: 1,
                        py: 1.2,
                        fontWeight: 600,
                        borderRadius: 2,
                        boxShadow: theme.shadows[4],
                        "&:hover": {
                          boxShadow: theme.shadows[8],
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
          {/* Contact Details */}
          <Grid item size={{xs:12, md:12,sm:6}}>
            <Fade in timeout={1200}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[12],
                  },
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    Contact Details
                  </Typography>
                  <Divider
                    sx={{ my: 2, borderColor: theme.palette.primary.light }}
                  />
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <LocationOn
                      color="primary"
                      sx={{ mr: 2, fontSize: 32, mt: 0.5 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Jalalpur Jhabara Post-Deipur
                      <br />
                      Varanasi 221405
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Phone color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      +91-8765456776
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Email color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      msumv@gmail.com
                    </Typography>
                  </Box>
                  <Divider
                    sx={{ my: 2, borderColor: theme.palette.primary.light }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                    >
                      <Facebook fontSize="large" color="primary" />
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                    >
                      <Twitter fontSize="large" color="primary" />
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                    >
                      <LinkedIn fontSize="large" color="primary" />
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                    >
                      <Instagram fontSize="large" color="primary" />
                    </Link>
                  </Stack>
                  <Typography variant="body1" sx={{ marginTop: "10px" }}>
                    Search Us On Map
                  </Typography>
                  <Box
                    sx={{
                      height: 400,
                      width: "100%",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <iframe
                      title="Maa Shanti Uma Vidyalaya"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.047099073654!2d82.8136382!3d25.3262682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd18b8d9d3ceb%3A0xc607f2c2690529f4!2sMaa%20Shanti%20Uma%20Vidyalaya!5e0!3m2!1sen!2sin!4v1724838400000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: 4 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
