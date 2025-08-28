import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        textAlign: "center",
        p: 2,
      }}
    >
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "8px",
            height: "8px",
            bgcolor: "rgba(255,255,255,0.6)",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-${i} ${3 + Math.random() * 5}s ease-in-out infinite alternate`,
            opacity: Math.random(),
          }}
        />
      ))}

      {/* Keyframes for floating animation */}
      <style>
        {`
          ${[...Array(30)]
            .map(
              (_, i) => `
            @keyframes float-${i} {
              0% { transform: translateY(0px); }
              100% { transform: translateY(${10 + Math.random() * 30}px); }
            }
          `
            )
            .join("\n")}
        `}
      </style>

      {/* Animated 404 Text */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", md: "8rem" },
            fontWeight: "bold",
            background: "linear-gradient(90deg, #ff416c, #ff4b2b, #ff416c)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "shimmer 3s infinite linear",
          }}
        >
          404
        </Typography>
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, maxWidth: 400 }}>
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </Typography>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          sx={{
            borderRadius: "30px",
            px: 5,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0px 12px 24px rgba(0,0,0,0.3)",
              background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
            },
          }}
        >
          Go to Home Page
        </Button>
      </motion.div>

      {/* Shimmer effect keyframes */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -500px 0; }
            100% { background-position: 500px 0; }
          }
        `}
      </style>
    </Box>
  );
}
