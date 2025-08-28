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
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
  Phone,
  School,
  Badge,
  CheckCircle,
  Work
} from "@mui/icons-material";

const RegisterStudent = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    studentClass: "",
    teacherId: "",
    studentId: "",
    role: "student" // Default to student
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = React.useState(false);

  // Class options for the select dropdown
  const classOptions = [
    { value: "", label: "Select Class" },
    { value: "1", label: "Class 1" },
    { value: "2", label: "Class 2" },
    { value: "3", label: "Class 3" },
    { value: "4", label: "Class 4" },
    { value: "5", label: "Class 5" },
    { value: "6", label: "Class 6" },
    { value: "7", label: "Class 7" },
    { value: "8", label: "Class 8" },
    { value: "9", label: "Class 9" },
    { value: "10", label: "Class 10" },
    { value: "11", label: "Class 11" },
    { value: "12", label: "Class 12" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Show password requirements when password field is focused
    if (name === "password") {
      setShowPasswordRequirements(!!value);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Role-specific validation
    if (formData.role === "student") {
      if (!formData.studentClass) newErrors.studentClass = "Class is required";
      if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required";
    } else {
      if (!formData.teacherId.trim()) newErrors.teacherId = "Teacher ID is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Show success dialog
      setOpenSuccess(true);
      // Reset form (except role)
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        studentClass: "",
        teacherId: "",
        studentId: "",
        role: formData.role // Keep the selected role
      });
      console.log("Form submitted:", formData);
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
            color: theme.palette.primary.main,
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Registration
        </Typography>
      </Fade>
      <Fade in timeout={1000}>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          Create your account to access all features of our platform.
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
              {/* Role Selection */}
              <FormControl component="fieldset" sx={{ mb: 2, width: '100%' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Register As:
                </Typography>
                <RadioGroup
                  row
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Admin/Teacher"
                  />
                </RadioGroup>
              </FormControl>

              {/* Full Name */}
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

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
              <FormControl fullWidth error={!!errors.password} sx={{ mb: 2 }}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setShowPasswordRequirements(true)}
                  onBlur={() => setShowPasswordRequirements(!!formData.password)}
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
                {showPasswordRequirements && (
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                    Password must be at least 6 characters long
                  </Typography>
                )}
                {errors.password && (
                  <Typography color="error" variant="caption">
                    {errors.password}
                  </Typography>
                )}
              </FormControl>

              {/* Confirm Password */}
              <FormControl fullWidth error={!!errors.confirmPassword} sx={{ mb: 2 }}>
                <InputLabel>Confirm Password</InputLabel>
                <OutlinedInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                  startAdornment={
                    <InputAdornment position="start">
                      <Lock color="primary" />
                    </InputAdornment>
                  }
                />
                {errors.confirmPassword && (
                  <Typography color="error" variant="caption">
                    {errors.confirmPassword}
                  </Typography>
                )}
              </FormControl>

              {/* Phone */}
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              {/* Role-specific fields */}
              {formData.role === "student" ? (
                <>
                  {/* Class Select Dropdown (Student only) */}
                  <FormControl fullWidth error={!!errors.studentClass} sx={{ mb: 2 }}>
                    <InputLabel id="class-select-label">Class</InputLabel>
                    <Select
                      labelId="class-select-label"
                      id="class-select"
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <School color="primary" sx={{ mr: 1 }} />
                        </InputAdornment>
                      }
                      label="Class"
                      sx={{
                        '& .MuiSelect-select': {
                          paddingLeft: '35px !important'
                        }
                      }}
                    >
                      {classOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.studentClass && (
                      <Typography color="error" variant="caption">
                        {errors.studentClass}
                      </Typography>
                    )}
                  </FormControl>

                  {/* Student ID (Student only) */}
                  <TextField
                    fullWidth
                    label="Student ID"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    error={!!errors.studentId}
                    helperText={errors.studentId}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Badge color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 3 }}
                  />
                </>
              ) : (
                <>
                  {/* Teacher ID (Admin only) */}
                  <TextField
                    fullWidth
                    label="Teacher ID"
                    name="teacherId"
                    value={formData.teacherId}
                    onChange={handleChange}
                    error={!!errors.teacherId}
                    helperText={errors.teacherId}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Work color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 3 }}
                  />
                </>
              )}

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
                Register
              </Button>

              {/* Login Link */}
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    underline="hover"
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    Login here
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Fade>

      {/* Success Dialog */}
      <Dialog open={openSuccess} onClose={handleCloseSuccess}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <CheckCircle color="success" sx={{ fontSize: 60 }} />
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" align="center" gutterBottom>
            Registration Successful!
          </Typography>
          <Typography variant="body1" align="center">
            Your account has been created successfully as a {formData.role === "student" ? "student" : "teacher/admin"}. You can now login to access all features.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
          <Button
            onClick={handleCloseSuccess}
            variant="contained"
            color="primary"
            sx={{ px: 4 }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RegisterStudent;
