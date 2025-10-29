import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";

const AcademicOutcome = () => {
  const [selectedClass, setSelectedClass] = useState("Class 10");

  const dataByClass = {
    "Class 10": [
      { subject: "Mathematics", avgScore: 85, topStudent: "Adarsh K." },
      { subject: "Science", avgScore: 82, topStudent: "Priya S." },
      { subject: "English", avgScore: 88, topStudent: "Rahul M." },
      { subject: "Social Studies", avgScore: 80, topStudent: "Anjali R." },
      { subject: "Computer Science", avgScore: 92, topStudent: "Aditya P." },
    ],
    "Class 9": [
      { subject: "Mathematics", avgScore: 78, topStudent: "Rohan K." },
      { subject: "Science", avgScore: 81, topStudent: "Sneha P." },
      { subject: "English", avgScore: 84, topStudent: "Vikram S." },
      { subject: "Social Studies", avgScore: 79, topStudent: "Nisha T." },
      { subject: "Computer Science", avgScore: 88, topStudent: "Amit R." },
    ],
  };

  const summaryByClass = {
    "Class 10": { totalStudents: 120, passPercentage: 95, topPerformer: "Aditya P." },
    "Class 9": { totalStudents: 100, passPercentage: 92, topPerformer: "Vikram S." },
  };

const handleDownloadPDF = () => {
  const doc = new jsPDF();
  doc.text(`Academic Outcome - ${selectedClass}`, 14, 20);

  const tableColumn = ["Subject", "Average Score", "Top Student"];
  const tableRows = dataByClass[selectedClass].map((r) => [
    r.subject,
    r.avgScore + "%",
    r.topStudent,
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 30,
  });

  doc.save(`Academic_Outcome_${selectedClass}.pdf`);
};

  const results = dataByClass[selectedClass];
  const summary = summaryByClass[selectedClass];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "25vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          color: "white",
          textAlign: "center",
          p: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" fontWeight={700}>
            Academic Outcomes
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Performance overview of students 🎓
          </Typography>
        </motion.div>
      </Box>

      {/* Class Selector & Download PDF */}
      <Container sx={{ py: 4, display: "flex", justifyContent: "space-between" }}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Select Class</InputLabel>
          <Select
            value={selectedClass}
            label="Select Class"
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {Object.keys(dataByClass).map((cls) => (
              <MenuItem key={cls} value={cls}>
                {cls}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
          Download PDF
        </Button>
      </Container>

      {/* Summary Section */}
      <Container sx={{ py: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">Total Students</Typography>
              <Typography variant="h4" fontWeight={700}>
                {summary.totalStudents}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">Pass Percentage</Typography>
              <Typography variant="h4" fontWeight={700}>
                {summary.passPercentage}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={summary.passPercentage}
                sx={{ mt: 2, height: 10, borderRadius: 5 }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">Top Performer</Typography>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "#ffb74d",
                  fontSize: 24,
                  m: "auto",
                }}
              >
                {summary.topPerformer.charAt(0)}
              </Avatar>
              <Typography variant="h6" sx={{ mt: 1 }}>
                {summary.topPerformer}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Bar Chart */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Average Scores by Subject
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={results} margin={{ top: 20, bottom: 20 }}>
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="avgScore" fill="#2575fc" />
          </BarChart>
        </ResponsiveContainer>
      </Container>

      {/* Results Table */}
      <Container sx={{ py: 4 }}>
        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead >
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Subject
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Average Score
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Top Student
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((r, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{r.subject}</TableCell>
                  <TableCell align="center">
                    {r.avgScore}%
                    <LinearProgress
                      variant="determinate"
                      value={r.avgScore}
                      sx={{ mt: 1, height: 10, borderRadius: 5 }}
                    />
                  </TableCell>
                  <TableCell align="center">{r.topStudent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default AcademicOutcome;
