import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Link,
  useTheme,
  Fade,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Email, CheckCircle, Refresh, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // State for email and OTP
  const [email, setEmail] = React.useState("");
  const [emailSent, setEmailSent] = React.useState(false);
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = React.useState(60);
  const [error, setError] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const [verified, setVerified] = React.useState(false);
  const inputRefs = React.useRef([]);

  // State for password reset
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const [resetSuccess, setResetSuccess] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (emailSent && timer > 0 && !verified) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [emailSent, timer, verified]);

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError("");

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailSent) {
      if (validateEmail()) {
        // Simulate sending OTP
        console.log("OTP sent to:", email);
        setEmailSent(true);
        setTimer(60);
      }
    } else if (!verified) {
      // Verify OTP
      const otpCode = otp.join("");
      if (otpCode.length === 6) {
        console.log("Verifying OTP:", otpCode);
        setVerified(true);
      } else {
        setOtpError("Please enter a valid 6-digit OTP");
      }
    } else {
      // Reset password
      if (validatePassword()) {
        console.log("Password reset for:", email, "New password:", password);
        setResetSuccess(true);
      }
    }
  };

  const handleResendOTP = () => {
    console.log("Resending OTP to:", email);
    setTimer(60);
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
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
          {resetSuccess ? "Password Reset Successful" :
           verified ? "Reset Your Password" :
           emailSent ? "OTP Verification" : "Forgot Password"}
        </Typography>
      </Fade>
      <Fade in timeout={1000}>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          {resetSuccess ? "Your password has been successfully reset." :
           verified ? "Enter your new password below." :
           emailSent ? "Enter the 6-digit OTP sent to your email" :
           "Enter your registered email to receive a password reset OTP."}
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
            {resetSuccess ? (
              <Box sx={{ textAlign: "center" }}>
                <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Password Reset Successful!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  You can now login with your new password.
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
                    "&:hover": { boxShadow: theme.shadows[8], transform: "translateY(-2px)" },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Go to Login
                </Button>
              </Box>
            ) : verified ? (
              <form onSubmit={handleSubmit}>
                {/* New Password */}
                <FormControl fullWidth error={!!passwordError} sx={{ mb: 2 }}>
                  <InputLabel>New Password</InputLabel>
                  <OutlinedInput
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock color="primary" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {/* Confirm Password */}
                <FormControl fullWidth error={!!passwordError} sx={{ mb: 3 }}>
                  <InputLabel>Confirm Password</InputLabel>
                  <OutlinedInput
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <Lock color="primary" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {passwordError && (
                  <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                    {passwordError}
                  </Typography>
                )}

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
                    "&:hover": { boxShadow: theme.shadows[8], transform: "translateY(-2px)" },
                  }}
                >
                  Reset Password
                </Button>
              </form>
            ) : !emailSent ? (
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!error}
                  helperText={error}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />
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
                    "&:hover": { boxShadow: theme.shadows[8], transform: "translateY(-2px)" },
                  }}
                >
                  Send OTP
                </Button>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Remember your password?{" "}
                    <Link
                      component="button"
                      underline="hover"
                      sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                      onClick={() => navigate("/login")}
                    >
                      Login here
                    </Link>
                  </Typography>
                </Box>
              </form>
            ) : (
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
                      error={!!otpError}
                      sx={{ width: "50px" }}
                    />
                  ))}
                </Box>
                {otpError && (
                  <Typography color="error" variant="body2" align="center" sx={{ mb: 2 }}>
                    {otpError}
                  </Typography>
                )}
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
                    "&:hover": { boxShadow: theme.shadows[8], transform: "translateY(-2px)" },
                    mb: 2,
                  }}
                >
                  Verify OTP
                </Button>
                <Box sx={{ textAlign: "center" }}>
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
            )}
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
};

export default ForgotPassword;
