import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Card,
  CardContent,
  MenuItem,
  Avatar,
  Divider,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const ApplyAddmission = () => {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    grade: "",
    gender: "",
    bloodGroup: "",
    parentName: "",
    parentOccupation: "",
    contactNumber: "",
    email: "",
    address: "",
    emergencyContact: "",
    admissionYear: currentYear,
    photo: null,
  });

  const [errors, setErrors] = useState({
    contactNumber: false,
    email: false,
    emergencyContact: false,
  });
   const fileInputRef = useRef(null);

     const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFormData({ ...formData, photo: files[0] });
    }
  };

  const grades = [
    "Nursery",
    "LKG",
    "UKG",
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Science",
    "11th Commerce",
    "11th Arts",
    "12th Science",
    "12th Commerce",
    "12th Arts",
  ];
  const genders = ["Male", "Female", "Other"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Live validation
    if (name === "contactNumber" || name === "emergencyContact") {
      setErrors((prev) => ({
        ...prev,
        [name]: !/^\d{10}$/.test(value),
      }));
    }

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.contactNumber || errors.email || errors.emergencyContact) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    console.log("Admission Data Submitted:", formData);
    alert("Admission form submitted successfully!");
    setFormData({
      studentName: "",
      dob: "",
      grade: "",
      gender: "",
      bloodGroup: "",
      parentName: "",
      parentOccupation: "",
      contactNumber: "",
      email: "",
      address: "",
      emergencyContact: "",
      admissionYear: currentYear,
      photo: null,
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          School Admission Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Student Info Card */}
            <Grid item xs={12}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Student Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Student Name"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Grade Applying For"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        fullWidth
                        required
                      >
                        {grades.map((g) => (
                          <MenuItem key={g} value={g}>
                            {g}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        fullWidth
                        required
                      >
                        {genders.map((g) => (
                          <MenuItem key={g} value={g}>
                            {g}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Blood Group"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        fullWidth
                      >
                        {bloodGroups.map((b) => (
                          <MenuItem key={b} value={b}>
                            {b}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Parent Info Card */}
            <Grid item xs={12}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Parent / Guardian Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Parent/Guardian Name"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Parent Occupation"
                        name="parentOccupation"
                        value={formData.parentOccupation}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Contact Number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={errors.contactNumber}
                        helperText={
                          errors.contactNumber
                            ? "Enter a valid 10-digit number"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={errors.email}
                        helperText={errors.email ? "Enter a valid email" : ""}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={3}
                        required
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Emergency Info Card */}
            <Grid item xs={12}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Emergency Contact
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Emergency Contact Number"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={errors.emergencyContact}
                        helperText={
                          errors.emergencyContact
                            ? "Enter a valid 10-digit number"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Admission Year"
                        name="admissionYear"
                        value={formData.admissionYear}
                        fullWidth
                        disabled
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Photo Upload Card */}
           <Grid item xs={12}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Upload Student Photo
                  </Typography>
                  <Box
                    sx={{
                      border: "2px dashed #ccc",
                      borderRadius: 2,
                      p: 3,
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                  >
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      hidden
                      ref={fileInputRef}
                      onChange={handleChange}
                    />
                    <Typography>
                      Drag & drop an image here, or click to select
                    </Typography>
                    {formData.photo && (
                      <Avatar
                        src={URL.createObjectURL(formData.photo)}
                        alt="Student"
                        sx={{ width: 100, height: 100, mt: 2, mx: "auto" }}
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
               <Button
              variant="outlined"
              color="error"
              size="small"
              sx={{ mt: 1 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the file input click
                setFormData({ ...formData, photo: null });
              }}
            >
              Remove
            </Button>
            </Grid>

            {/* Summary Preview Card */}
            <Grid item xs={12}>
              <Card elevation={4} sx={{ backgroundColor: "#f5f5f5" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Preview Admission Details
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography>
                        <strong>Student Name:</strong> {formData.studentName}
                      </Typography>
                      <Typography>
                        <strong>DOB:</strong> {formData.dob}
                      </Typography>
                      <Typography>
                        <strong>Grade:</strong> {formData.grade}
                      </Typography>
                      <Typography>
                        <strong>Gender:</strong> {formData.gender}
                      </Typography>
                      <Typography>
                        <strong>Blood Group:</strong> {formData.bloodGroup}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography>
                        <strong>Parent Name:</strong> {formData.parentName}
                      </Typography>
                      <Typography>
                        <strong>Occupation:</strong> {formData.parentOccupation}
                      </Typography>
                      <Typography>
                        <strong>Contact:</strong> {formData.contactNumber}
                      </Typography>
                      <Typography>
                        <strong>Email:</strong> {formData.email}
                      </Typography>
                      <Typography>
                        <strong>Emergency Contact:</strong>{" "}
                        {formData.emergencyContact}
                      </Typography>
                      <Typography>
                        <strong>Address:</strong> {formData.address}
                      </Typography>
                    </Grid>
                    {formData.photo && (
                      <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Avatar
                          src={URL.createObjectURL(formData.photo)}
                          alt="Student"
                          sx={{ width: 120, height: 120, mx: "auto" }}
                        />
                      </Grid>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ py: 1.5 }}
              >
                Submit Admission Form
              </Button>
            </Grid>
          </Grid>
        </form>
      </motion.div>
    </Container>
  );
};

export default ApplyAddmission;
