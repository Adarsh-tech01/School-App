import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  // Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fade,
  CircularProgress
} from "@mui/material";
import {
  Person,
  School,
  Cake,
  Search,
  CheckCircle,
  ErrorOutline
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';

const Result = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useState({
    rollNumber: "",
    studentClass: "",
    dob: null
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Sample class options
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
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSearchParams(prev => ({ ...prev, dob: date }));
  };

  const validateForm = () => {
    if (!searchParams.rollNumber.trim()) {
      setError("Roll Number is required");
      return false;
    }
    if (!searchParams.studentClass) {
      setError("Class is required");
      return false;
    }
    if (!searchParams.dob) {
      setError("Date of Birth is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        // Sample result data - replace with actual API response
        const sampleResult = {
          studentName: "John Doe",
          rollNumber: searchParams.rollNumber,
          class: `Class ${searchParams.studentClass}`,
          dob: searchParams.dob,
          subjects: [
            { name: "Mathematics", marks: 95, maxMarks: 100, grade: "A+" },
            { name: "Science", marks: 88, maxMarks: 100, grade: "A" },
            { name: "English", marks: 92, maxMarks: 100, grade: "A+" },
            { name: "Social Science", marks: 85, maxMarks: 100, grade: "A" },
            { name: "Computer Science", marks: 90, maxMarks: 100, grade: "A+" },
          ],
          totalMarks: 450,
          maxTotalMarks: 500,
          percentage: 90,
          result: "Pass",
          division: "First"
        };
        setResult(sampleResult);
        setShowResult(true);
        setLoading(false);
      }, 1500);
    }
  };

  const handleReset = () => {
    setSearchParams({
      rollNumber: "",
      studentClass: "",
      dob: null
    });
    setResult(null);
    setShowResult(false);
    setError("");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md" sx={{ py: 6 }}>
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
            Student Result Portal
          </Typography>
        </Fade>

        <Fade in timeout={1000}>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ color: theme.palette.text.secondary, maxWidth: 600, mx: "auto" }}
          >
            Enter your details to view your academic results
          </Typography>
        </Fade>

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
            {!showResult ? (
              <form onSubmit={handleSearch}>
                {/* Roll Number */}
                <TextField
                  fullWidth
                  label="Roll Number"
                  name="rollNumber"
                  value={searchParams.rollNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />

                {/* Class Select */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="class-select-label">Class</InputLabel>
                  <Select
                    labelId="class-select-label"
                    id="class-select"
                    name="studentClass"
                    value={searchParams.studentClass}
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
                </FormControl>

                {/* Modern Date Picker */}
                <DatePicker
                  label="Date of Birth"
                  value={searchParams.dob}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Cake color="primary" />
                          </InputAdornment>
                        ),
                      },
                      sx: { mb: 3 }
                    }
                  }}
                  format="MM/dd/yyyy"
                />

                {error && (
                  <Typography color="error" variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
                    {error}
                  </Typography>
                )}

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<Search />}
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
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Show Result"}
                  </Button>

                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    fullWidth
                    onClick={handleReset}
                    sx={{
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: 2,
                    }}
                    disabled={loading}
                  >
                    Reset
                  </Button>
                </Box>
              </form>
            ) : (
              <>
                {loading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <>
                    {/* Student Information */}
                    <Card sx={{ mb: 3, boxShadow: 3 }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CheckCircle color="success" sx={{ mr: 1, fontSize: 30 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Student Information
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Name</Typography>
                            <Typography variant="body1">{result.studentName}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Roll Number</Typography>
                            <Typography variant="body1">{result.rollNumber}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Class</Typography>
                            <Typography variant="body1">{result.class}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Date of Birth</Typography>
                            <Typography variant="body1">
                              {result.dob ? format(new Date(result.dob), 'MMM dd, yyyy') : ''}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>

                    {/* Result Summary */}
                    <Card sx={{ mb: 3, boxShadow: 3 }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CheckCircle color="success" sx={{ mr: 1, fontSize: 30 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Result Summary
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mb: 2 }}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Total Marks</Typography>
                            <Typography variant="body1">{result.totalMarks}/{result.maxTotalMarks}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Percentage</Typography>
                            <Typography variant="body1">{result.percentage}%</Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Result</Typography>
                            <Typography variant="body1" color={result.result === "Pass" ? "success.main" : "error.main"}>
                              {result.result}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">Division</Typography>
                            <Typography variant="body1">{result.division}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>

                    {/* Subject-wise Marks */}
                    <Card sx={{ boxShadow: 3 }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center' }}>
                          <School color="primary" sx={{ mr: 1 }} />
                          Subject-wise Performance
                        </Typography>

                        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                          <Table>
                            <TableHead>
                              <TableRow sx={{ bgcolor: theme.palette.primary.light }}>
                                <TableCell>Subject</TableCell>
                                <TableCell align="center">Marks Obtained</TableCell>
                                <TableCell align="center">Max Marks</TableCell>
                                <TableCell align="center">Grade</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {result.subjects.map((subject, index) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                  <TableCell component="th" scope="row">
                                    {subject.name}
                                  </TableCell>
                                  <TableCell align="center">{subject.marks}</TableCell>
                                  <TableCell align="center">{subject.maxMarks}</TableCell>
                                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                    {subject.grade}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </CardContent>
                    </Card>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleReset}
                        sx={{
                          py: 1,
                          fontWeight: 600,
                          borderRadius: 2,
                        }}
                      >
                        Search Another Result
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => window.print()}
                        sx={{
                          py: 1,
                          fontWeight: 600,
                          borderRadius: 2,
                        }}
                        startIcon={<ErrorOutline />}
                      >
                        Print Result
                      </Button>
                    </Box>
                  </>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </Container>
    </LocalizationProvider>
  );
};

export default Result;
