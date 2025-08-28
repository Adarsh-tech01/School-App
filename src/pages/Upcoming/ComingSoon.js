import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

const ComingSoonPage = () => {

    const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0072ff, #00c6ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: 3,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <AccessTimeIcon sx={{ fontSize: 80, mb: 2 }} />
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Coming Soon
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              mb: 4,
              fontSize: { xs: "1rem", md: "1.2rem" },
              opacity: 0.9,
            }}
          >
            We are working hard to bring something amazing for you.  
            Stay tuned for updates!
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "#0072ff",
                fontWeight: 600,
                borderRadius: "25px",
                px: 4,
                py: 1.5,
                boxShadow: 3,
                "&:hover": {
                  bgcolor: "#f1f1f1",
                },
              }}
              onClick={()=>{
                navigate("/")
              }}
            >
              Go to Home
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ComingSoonPage;
