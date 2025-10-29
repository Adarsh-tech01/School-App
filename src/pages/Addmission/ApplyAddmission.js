import {  useRef } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem,
  Box,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import WidgetCard from "../WidgetCard/WidgetCard"; // Adjust the import path as needed
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import * as Yup from "yup";
// import { useFormStatus } from "react-dom";
import { useFormik } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import LoadingPage from "../Layout/LoadingPage/Loading";

const validationSchema = Yup.object({
  studentName: Yup.string().required("Student name is required"),
  DOB: Yup.date()
    .typeError("Enter a valid date")
    .required("Date of birth is required"),
  grade: Yup.string().required("Grade is required"),
  gender: Yup.string().required("Gender is required"),
  parentName: Yup.string().required("Parents name is required"),
  contactNumber: Yup.string()
   .min(6,"Not a valid number")
   .max(10,"Length should be 10 digit")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ApplyAddmission = () => {
  const currentYear = new Date().getFullYear(); // current year

const delay =(d)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve();
},d* 1000)
})
};

  const formik = useFormik({
    initialValues: {
      studentName: "",
      DOB: null,
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
    },
    validationSchema,
    onSubmit: async(values, { resetForm }) => {
     await delay(4);
      console.log("Submitted Data", values);
      resetForm();
    },
  });

  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      formik.setFieldValue("photo", files[0]);
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

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files;
  //   if (files && files[0]) {
  //     setFormData({ ...formData, photo: files[0] });
  //   }
  // };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {formik.isSubmitting && <div>Loading ....</div>}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          School Admission Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {/* Student Info WidgetCard */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }}>
              <WidgetCard
                title="Student Information"
                icon={<SchoolIcon />}
                expandable
                body={
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Student Name"
                        name="studentName"
                        value={formik.values.studentName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.studentName &&
                          Boolean(formik.errors.studentName)
                        }
                        helperText={
                          formik.touched.studentName &&
                          formik.errors.studentName
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date Of Birth"
                          value={formik.values.DOB}
                          onChange={(value) =>
                            formik.setFieldValue("DOB", value)
                          }
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              onBlur: formik.handleBlur,
                              error:
                                formik.touched.DOB &&
                                Boolean(formik.errors.DOB),
                              helperText:
                                formik.touched.DOB && formik.errors.DOB,
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        select
                        label="Grade Applying For"
                        name="grade"
                        value={formik.values.grade}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        error={
                          formik.touched.grade && Boolean(formik.errors.grade)
                        }
                        helperText={formik.touched.grade && formik.errors.grade}
                      >
                        {grades.map((g) => (
                          <MenuItem key={g} value={g}>
                            {g}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        select
                        label="Gender"
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        error={
                          formik.touched.gender && Boolean(formik.errors.gender)
                        }
                        helperText={
                          formik.touched.gender && formik.errors.gender
                        }
                      >
                        {genders.map((g) => (
                          <MenuItem key={g} value={g}>
                            {g}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        select
                        label="Blood Group"
                        name="bloodGroup"
                        value={formik.values.bloodGroup}
                        onChange={formik.handleChange}
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
                }
              />
            </Grid>

            {/* Parent Info WidgetCard */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }}>
              <WidgetCard
                title="Parent / Guardian Information"
                icon={<PersonIcon />}
                expandable
                body={
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Parent/Guardian Name"
                        name="parentName"
                        value={formik.values.parentName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        error={
                          formik.touched.parentName &&
                          Boolean(formik.errors.parentName)
                        }
                        helperText={
                          formik.touched.parentName && formik.errors.parentName
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Parent Occupation"
                        name="parentOccupation"
                        value={formik.values.parentOccupation}
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Contact Number"
                        name="contactNumber"
                        value={formik.values.contactNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        error={
                          formik.touched.contactNumber &&
                          Boolean(formik.errors.contactNumber)
                        }
                        helperText={
                          formik.touched.contactNumber &&
                          formik.errors.contactNumber
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        fullWidth
                        multiline
                        rows={3}
                      />
                    </Grid>
                  </Grid>
                }
              />
            </Grid>

            {/* Emergency Info WidgetCard */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }}>
              <WidgetCard
                title="Emergency Contact"
                icon={<PhoneIcon />}
                expandable
                body={
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Emergency Contact Number"
                        name="emergencyContact"
                        value={formik.values.emergencyContact}
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, sm: 12 }}>
                      <TextField
                        label="Admission Year"
                        name="admissionYear"
                        value={formik.values.admissionYear}
                        fullWidth
                        disabled
                      />
                    </Grid>
                  </Grid>
                }
              />
            </Grid>

            {/* Photo Upload WidgetCard */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }}>
              <WidgetCard
                title="Upload Student Photo"
                icon={<CameraAltIcon />}
                expandable
                body={
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
                      ref={fileInputRef}
                      onChange={(e) => {
                        if (e.currentTarget.files && e.currentTarget.files[0]) {
                          formik.setFieldValue(
                            "photo",
                            e.currentTarget.files[0]
                          );
                        }
                      }}
                      required
                    />
                    <Typography>
                      Drag & drop an image here, or click to select
                    </Typography>
                    {formik.values.photo && (
                      <>
                        <Avatar
                          src={URL.createObjectURL(formik.values.photo)}
                          alt="Student"
                          sx={{ width: 100, height: 100, mt: 2, mx: "auto" }}
                        />
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          sx={{ mt: 1 }}
                          onClick={() => formik.setFieldValue("photo", null)}
                        >
                          Remove
                        </Button>
                      </>
                    )}
                  </Box>
                }
              />
            </Grid>

            {/* Submit Button */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={formik.isSubmitting}
                sx={{ py: 1.5, float: "right" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </motion.div>
    </Container>
  );
};

export default ApplyAddmission;
