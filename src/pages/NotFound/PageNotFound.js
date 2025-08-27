import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 6,
          maxWidth: 500,
          textAlign: "center",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          color: "white",
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 90,
            color: "error.main",
            mb: 2,
          }}
        />

        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
        >
          404
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
          Oops! Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 400,
            mx: "auto",
            mb: 4,
            opacity: 0.8,
          }}
        >
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </Typography>

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
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0px 12px 24px rgba(0,0,0,0.3)",
              background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
            },
          }}
        >
          Go to Home Page
        </Button>
      </Paper>
    </Box>
  );
}
