import React, { useEffect, useState } from "react";
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
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     newErrors.email = "Email is invalid";
  //   }
  //   if (!formData.password) {
  //     newErrors.password = "Password is required";
  //   } else if (formData.password.length < 6) {
  //     newErrors.password = "Password must be at least 6 characters";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   alert("Login successful! Welcome back.");
    //   // Replace with your API call
    //   console.log("Login submitted:", formData);
    // }
    if (
      users[0].Email === formData.email &&
      users[0].Password === formData.password
    ) {
      navigate("/");
    } else {
      console.log("Invalid Credentials");
      alert("Invalid username or password");
      setFormData({ email: " ", password: "" });
    }
  };

  //  users data from the api

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error from login", err));
  }, []);

  // console.log(users)

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
          Welcome Back
        </Typography>
      </Fade>
      <Fade in timeout={1000}>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          Login to access your account and all platform features.
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
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
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

              {/* Password */}
              <FormControl fullWidth error={!!errors.password} sx={{ mb: 3 }}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
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
                  startAdornment={
                    <InputAdornment position="start">
                      <Lock color="primary" />
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <Typography color="error" variant="caption">
                    {errors.password}
                  </Typography>
                )}
              </FormControl>

              {/* Submit Button */}
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
                }}
              >
                Login
              </Button>

              {/* Forgot Password & Register Link */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Link
                  href="/reset-password"
                  underline="hover"
                  sx={{ fontWeight: 500, color: theme.palette.text.secondary }}
                >
                  Forgot Password?
                </Link>
                <Link
                  href="/student/registration"
                  underline="hover"
                  sx={{ fontWeight: 500, color: theme.palette.primary.main }}
                >
                  Sign up
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
};

export default Login;
