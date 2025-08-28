import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Link,
  useTheme,
  Fade,
  TextField,
  InputAdornment,
} from "@mui/material";
import { CheckCircle, Refresh } from "@mui/icons-material";

const OTPVerification = () => {
  const theme = useTheme();
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = React.useState(60);
  const [verified, setVerified] = React.useState(false);
  const inputRefs = React.useRef([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      // Simulate OTP verification
      console.log("Verifying OTP:", otpCode);
      setVerified(true);
    }
  };

  const handleResendOTP = () => {
    // Simulate resending OTP
    console.log("Resending OTP");
    setTimer(60);
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
            color: theme.palette.primary.main,
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          OTP Verification
        </Typography>
      </Fade>
      <Fade in timeout={1000}>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          Enter the 6-digit OTP sent to your email
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
              boxShadow: theme.shadows[12],
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {!verified ? (
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                  {otp.map((digit, index) => (
                    <TextField
                      key={index}
                      inputRef={(el) => (inputRefs.current[index] = el)}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
                      sx={{ width: "50px" }}
                    />
                  ))}
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                      boxShadow: theme.shadows[8],
                      transform: "translateY(-2px)",
                    },
                    mb: 2,
                  }}
                >
                  Verify OTP
                </Button>

                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Didn't receive OTP?{" "}
                    <Button
                      disabled={timer > 0}
                      onClick={handleResendOTP}
                      sx={{ fontWeight: 600, textTransform: "none" }}
                      startIcon={<Refresh />}
                    >
                      Resend OTP {timer > 0 && `(${timer}s)`}
                    </Button>
                  </Typography>
                </Box>
              </form>
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <CheckCircle
                  color="success"
                  sx={{ fontSize: 60, mb: 2 }}
                />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Verification Successful!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Your identity has been verified. You can now reset your password.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                      boxShadow: theme.shadows[8],
                      transform: "translateY(-2px)",
                    },
                  }}
                  onClick={() => {
                    // Navigate to reset password page
                    console.log("Navigate to reset password");
                  }}
                >
                  Reset Password
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
};

export default OTPVerification;
