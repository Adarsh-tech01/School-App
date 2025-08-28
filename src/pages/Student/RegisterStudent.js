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
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme
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
import { motion } from "framer-motion";

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
    role: "student"
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = React.useState(false);

  const classOptions = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `Class ${i + 1}`
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "password") setShowPasswordRequirements(!!value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "At least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Must be 10 digits";

    if (formData.role === "student") {
      if (!formData.studentClass) newErrors.studentClass = "Class is required";
      if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required";
    } else {
      if (!formData.teacherId.trim()) newErrors.teacherId = "Teacher ID is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      setOpenSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        studentClass: "",
        teacherId: "",
        studentId: "",
        role: formData.role
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
          }}
        >
          Registration
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }
          }}
        >
          Create your account to access all features of our platform.
        </Typography>
      </motion.div>

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Card
          elevation={12}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            mt: 2,
            p: { xs: 2, sm: 3, md: 4 },
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: theme.shadows[14]
            },
            transition: "all 0.3s ease"
          }}
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              {/* Role */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <FormControl component="fieldset" sx={{ mb: 2, width: "100%" }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Register As:
                  </Typography>
                  <RadioGroup
                    row
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="admin" control={<Radio />} label="Admin/Teacher" />
                  </RadioGroup>
                </FormControl>
              </motion.div>

              {/* Form Fields */}
              {[
                { label: "Full Name", name: "fullName", icon: <Person color="primary" />, type: "text" },
                { label: "Email", name: "email", icon: <Email color="primary" />, type: "email" },
                { label: "Phone", name: "phone", icon: <Phone color="primary" />, type: "tel" }
              ].map((field, idx) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                >
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{field.icon}</InputAdornment>
                      )
                    }}
                    sx={{ mb: 2 }}
                  />
                </motion.div>
              ))}

              {/* Password Fields */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <FormControl fullWidth error={!!errors.password} sx={{ mb: 2 }}>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
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
                      Password must be at least 6 characters
                    </Typography>
                  )}
                  {errors.password && (
                    <Typography color="error" variant="caption">
                      {errors.password}
                    </Typography>
                  )}
                </FormControl>

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
                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
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
              </motion.div>

              {/* Role-specific fields */}
              {formData.role === "student" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <FormControl fullWidth error={!!errors.studentClass} sx={{ mb: 2 }}>
                    <InputLabel>Class</InputLabel>
                    <Select
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <School color="primary" sx={{ mr: 1 }} />
                        </InputAdornment>
                      }
                    >
                      {classOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.studentClass && <Typography color="error" variant="caption">{errors.studentClass}</Typography>}
                  </FormControl>
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
                      )
                    }}
                    sx={{ mb: 3 }}
                  />
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
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
                      )
                    }}
                    sx={{ mb: 3 }}
                  />
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5, fontWeight: 600, borderRadius: 3 }}
                >
                  Register
                </Button>
              </motion.div>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Already have an account?{" "}
                  <Link href="/login" underline="hover" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    Login here
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Dialog */}
      <Dialog open={openSuccess} onClose={() => setOpenSuccess(false)}>
        <DialogTitle sx={{ textAlign: "center" }}>
          <CheckCircle color="success" sx={{ fontSize: 60 }} />
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" align="center" gutterBottom>
            Registration Successful!
          </Typography>
          <Typography variant="body1" align="center">
            Your account has been created successfully as a {formData.role === "student" ? "student" : "teacher/admin"}.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", mb: 2 }}>
          <Button variant="contained" onClick={() => setOpenSuccess(false)} sx={{ px: 4 }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RegisterStudent;
