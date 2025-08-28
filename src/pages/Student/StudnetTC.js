import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Container,
  InputAdornment,
  IconButton,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  CheckCircle,
  PictureAsPdf,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.6 } },
// };

const hoverEffect = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

const StudentTC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const downloadTC = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Customize the PDF content (e.g., add text, images, etc.)
    doc.setFontSize(20);
    doc.text("Transfer Certificate", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 105, 40, { align: "center" });
    doc.text("This is your official Transfer Certificate.", 105, 50, {
      align: "center",
    });
    doc.text("Generated on: " + new Date().toLocaleDateString(), 105, 60, {
      align: "center",
    });

    // Save the PDF
    doc.save("Transfer_Certificate.pdf");
  };

  const handleGenerateTC = () => {
    if (validateForm()) {
      // Download the TC automatically
      downloadTC();
      // Show success dialog
      setOpenSuccess(true);
    }
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Fade in timeout={800}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.main",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Generate Your TC
        </Typography>
      </Fade>
      <Fade in timeout={1000}>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ color: "text.secondary" }}
        >
          Enter your credentials to generate and download your Transfer
          Certificate.
        </Typography>
      </Fade>
      <Fade in timeout={1200}>
        <Card
          elevation={6}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            mt: 2,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 12,
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <motion.div
              whileHover="whileHover"
              whileTap="whileTap"
              variants={hoverEffect}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleGenerateTC}
                sx={{
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: 4,
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Generate and Download TC
              </Button>
            </motion.div>
            <motion.div
              whileHover="whileHover"
              whileTap="whileTap"
              variants={hoverEffect}
            >
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: 2,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                  },
                }}
                onClick={() => {
                  navigate("/student/registration")
                }}
              >
                Sign Up
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </Fade>

      {/* Success Dialog */}
      <Dialog
        open={openSuccess}
        onClose={handleCloseSuccess}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: "center", p: 3 }}>
          <CheckCircle color="success" sx={{ fontSize: 60 }} />
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            TC Generated and Downloaded Successfully!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Your Transfer Certificate has been downloaded as a PDF.
          </Typography>
          <Box sx={{ mt: 2, color: "primary.main" }}>
            <PictureAsPdf sx={{ fontSize: 40 }} />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", mb: 2 }}>
          <Button
            onClick={handleCloseSuccess}
            variant="contained"
            color="primary"
            sx={{ px: 4 }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default StudentTC;
