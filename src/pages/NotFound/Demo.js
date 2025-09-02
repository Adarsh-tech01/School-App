// import React, { useState, useRef } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Grid,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   Box,
//   Avatar,
//   MenuItem,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import SchoolIcon from "@mui/icons-material/School";
// import PersonIcon from "@mui/icons-material/Person";
// import PhoneIcon from "@mui/icons-material/Phone";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import PaymentIcon from "@mui/icons-material/Payment";
// import DownloadIcon from "@mui/icons-material/Download";

// const steps = [
//   "Personal Details",
//   "Address",
//   "Verify",
//   "Payment",
//   "Download Form",
// ];

// const initialState = 

// { studentName: "",
//     dob: "",
//     grade: "",
//     gender: "",
//     bloodGroup: "",
//     parentName: "",
//     parentOccupation: "",
//     contactNumber: "",
//     email: "",
//     address: "",
//     emergencyContact: "",
//     admissionYear: new Date().getFullYear(),
//     photo: null,}

// const Demo = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({ initialState });
//   const [errors, setErrors] = useState({
//     contactNumber: false,
//     email: false,
//     emergencyContact: false,
//   });
//   const fileInputRef = useRef(null);

//   const grades = [
//     "Nursery", "LKG", "UKG", "1st Grade", "2nd Grade", "3rd Grade",
//     "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade",
//     "9th Grade", "10th Grade", "11th Science", "11th Commerce",
//     "11th Arts", "12th Science", "12th Commerce", "12th Arts",
//   ];
//   const genders = ["Male", "Female", "Other"];
//   const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "photo") {
//       setFormData({ ...formData, photo: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//     // Live validation
//     if (name === "contactNumber" || name === "emergencyContact") {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: !/^\d{10}$/.test(value),
//       }));
//     }
//     if (name === "email") {
//       setErrors((prev) => ({
//         ...prev,
//         email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
//       }));
//     }
//   };

//   const handleNext = () => {
//     let isValid = true;

//     switch (activeStep) {
//       case 0: // Personal Details
//         if (!formData.studentName || !formData.dob || !formData.grade || !formData.gender) {
//           isValid = false;
//           alert("Please fill in all required fields in Personal Details.");
//         }
//         break;
//       case 1: // Address
//         if (!formData.parentName || !formData.address) {
//           isValid = false;
//           alert("Please fill in all required fields in Address.");
//         }
//         break;
//       case 2: // Verify
//         if (
//           !formData.contactNumber ||
//           errors.contactNumber ||
//           !formData.email ||
//           errors.email ||
//           !formData.emergencyContact ||
//           errors.emergencyContact
//         ) {
//           isValid = false;
//           alert("Please fill in all required fields in Verify and ensure they are valid.");
//         }
//         break;
//       case 3: // Payment (assuming no required fields for this demo)
//         // Add validation if needed
//         break;
//       default:
//         break;
//     }

//     if (isValid && activeStep < steps.length - 1) {
//       setActiveStep((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (errors.contactNumber || errors.email || errors.emergencyContact) {
//       alert("Please fix validation errors before submitting.");
//       return;
//     }
//     console.log("Admission Data Submitted:", formData);
//     alert("Admission form submitted successfully!");
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     if (files && files[0]) {
//       setFormData({ ...formData, photo: files[0] });
//     }
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Student Name"
//                 name="studentName"
//                 value={formData.studentName}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Date of Birth"
//                 name="dob"
//                 type="date"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 select
//                 label="Grade Applying For"
//                 name="grade"
//                 value={formData.grade}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               >
//                 {grades.map((g) => (
//                   <MenuItem key={g} value={g}>
//                     {g}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 select
//                 label="Gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               >
//                 {genders.map((g) => (
//                   <MenuItem key={g} value={g}>
//                     {g}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 select
//                 label="Blood Group"
//                 name="bloodGroup"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 fullWidth
//               >
//                 {bloodGroups.map((b) => (
//                   <MenuItem key={b} value={b}>
//                     {b}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//           </Grid>
//         );
//       case 1:
//         return (
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Parent/Guardian Name"
//                 name="parentName"
//                 value={formData.parentName}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Parent Occupation"
//                 name="parentOccupation"
//                 value={formData.parentOccupation}
//                 onChange={handleChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 fullWidth
//                 multiline
//                 rows={3}
//                 required
//               />
//             </Grid>
//           </Grid>
//         );
//       case 2:
//         return (
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Contact Number"
//                 name="contactNumber"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//                 error={errors.contactNumber}
//                 helperText={
//                   errors.contactNumber ? "Enter a valid 10-digit number" : ""
//                 }
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//                 error={errors.email}
//                 helperText={errors.email ? "Enter a valid email" : ""}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Emergency Contact Number"
//                 name="emergencyContact"
//                 value={formData.emergencyContact}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//                 error={errors.emergencyContact}
//                 helperText={
//                   errors.emergencyContact ? "Enter a valid 10-digit number" : ""
//                 }
//               />
//             </Grid>
//           </Grid>
//         );
//       case 3:
//         return (
//           <Box
//             sx={{
//               border: "2px dashed #ccc",
//               borderRadius: 2,
//               p: 3,
//               textAlign: "center",
//               cursor: "pointer",
//               "&:hover": {
//                 backgroundColor: "#f9f9f9",
//               },
//             }}
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//             onClick={() => fileInputRef.current.click()}
//           >
//             <input
//               type="file"
//               name="photo"
//               accept="image/*"
//               hidden
//               ref={fileInputRef}
//               onChange={handleChange}
//             />
//             <Typography>Drag & drop an image here, or click to select</Typography>
//             {formData.photo && (
//               <>
//                 <Avatar
//                   src={URL.createObjectURL(formData.photo)}
//                   alt="Student"
//                   sx={{ width: 100, height: 100, mt: 2, mx: "auto" }}
//                 />
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   size="small"
//                   sx={{ mt: 1 }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setFormData({ ...formData, photo: null });
//                   }}
//                 >
//                   Remove
//                 </Button>
                
//               </>
//             )}
//           </Box>
//         );
//       case 4:
//         return (
//           <Box>
//             <Typography variant="h6">Review Your Details</Typography>
//             <Typography>
//               <strong>Student Name:</strong> {formData.studentName}
//             </Typography>
//             <Typography>
//               <strong>DOB:</strong> {formData.dob}
//             </Typography>
//             <Typography>
//               <strong>Grade:</strong> {formData.grade}
//             </Typography>
//             <Typography>
//               <strong>Parent Name:</strong> {formData.parentName}
//             </Typography>
//             <Typography>
//               <strong>Address:</strong> {formData.address}
//             </Typography>
//             <Typography>
//               <strong>Contact:</strong> {formData.contactNumber}
//             </Typography>
//             <Typography>
//               <strong>Email:</strong> {formData.email}
//             </Typography>
//             {formData.photo && (
//               <Avatar
//                 src={URL.createObjectURL(formData.photo)}
//                 alt="Student"
//                 sx={{ width: 120, height: 120, mx: "auto", my: 2 }}
//               />
//             )}
//           </Box>
//         );
//       default:
//         return <Typography>Unknown step</Typography>;
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <Typography variant="h4" align="center" gutterBottom>
//           School Admission Form
//         </Typography>
//         <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <form onSubmit={handleSubmit}>
//           {getStepContent(activeStep)}
//           <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//             {activeStep !== 0 && (
//               <Button onClick={handleBack} sx={{ mr: 1 }}>
//                 Back
//               </Button>
//             )}
//             {activeStep === steps.length - 1 ? (
//               <Button type="submit" variant="contained" color="primary">
//                 Submit
//               </Button>
//             ) : (
//               <Button onClick={handleNext} variant="contained" color="primary">
//                 Next
//               </Button>
//             )}
//           </Box>
//         </form>
//       </motion.div>
//     </Container>
//   );
// };

// export default Demo;

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist';

// Point to the local worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

const Demo = () => {
  const [text, setText] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      setText('Extracting text...');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      let extractedText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        extractedText += content.items.map(item => item.str).join(' ');
      }

      setText(extractedText);
    } else {
      setText('Please drop a PDF file.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Drag & Drop PDF to Extract Text</h1>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '5px',
          padding: '20px',
          textAlign: 'center',
          margin: '20px',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#f0f8ff' : 'white'
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the PDF file here...</p>
        ) : (
          <p>Drag and drop a PDF file here, or click to select</p>
        )}
      </div>
      <div
        style={{
          whiteSpace: 'pre-wrap',
          margin: '20px',
          padding: '10px',
          border: '1px solid #ddd',
          minHeight: '100px'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Demo;



