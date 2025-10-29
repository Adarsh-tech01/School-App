import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Button,
  Card,
  CardContent,
  Grid,
  // useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const feeData = [
  { class: "Class 1", tuition: "15,000", exam: "2,000", misc: "1,500", total: "18,500" },
  { class: "Class 2", tuition: "16,000", exam: "2,000", misc: "1,500", total: "19,500" },
  { class: "Class 3", tuition: "17,000", exam: "2,500", misc: "2,000", total: "21,500" },
  { class: "Class 4", tuition: "18,000", exam: "2,500", misc: "2,000", total: "22,500" },
  { class: "Class 5", tuition: "19,000", exam: "3,000", misc: "2,000", total: "24,000" },
  { class: "Class 6", tuition: "20,000", exam: "3,000", misc: "2,500", total: "25,500" },
  { class: "Class 7", tuition: "21,000", exam: "3,500", misc: "2,500", total: "27,000" },
  { class: "Class 8", tuition: "22,000", exam: "3,500", misc: "3,000", total: "28,500" },
  { class: "Class 9", tuition: "24,000", exam: "4,000", misc: "3,000", total: "31,000" },
  { class: "Class 10", tuition: "25,000", exam: "4,000", misc: "3,500", total: "32,500" },
  { class: "Class 11 (Science)", tuition: "28,000", exam: "5,000", misc: "4,000", total: "37,000" },
  { class: "Class 11 (Arts)", tuition: "15,000", exam: "5,000", misc: "4,000", total: "24,000" },
  { class: "Class 11 (Commerce)", tuition: "15,000", exam: "5,000", misc: "4,000", total: "24,000" },
  { class: "Class 12 (Science)", tuition: "30,000", exam: "5,000", misc: "4,000", total: "39,000" },
   { class: "Class 12 (Arts)", tuition: "18,000", exam: "5,000", misc: "4,000", total: "27,000" },
    { class: "Class 12 (Commerce)", tuition: "18,000", exam: "5,000", misc: "4,000", total: "27,000" },
];

// Upcoming Due Dates
const dueDates = [
  { term: "Quarter 1", due: "April 10, 2025" },
  { term: "Quarter 2", due: "July 10, 2025" },
  { term: "Quarter 3", due: "October 10, 2025" },
  { term: "Quarter 4", due: "January 10, 2026" },
];

const FeesStructure = () => {
  const today = new Date();
  // const theme = useTheme();
  // Download function
 const downloadPDF = () => {
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");
doc.setFontSize(18);
doc.text("Maa Shanti U.M. Vidhyalaya", 105, 15, { align: "center" });

doc.setFont("helvetica", "normal");
doc.setFontSize(14);
doc.text("School Fee Structure (Classes 1–12)", 105, 25, { align: "center" });


  autoTable(doc, {
    startY: 25,
    head: [["Class", "Tuition Fee", "Exam Fee", "Miscellaneous", "Total"]],
    body: feeData.map((row) => [
      row.class,
      row.tuition,
      row.exam,
      row.misc,
      row.total,
    ]),
  });

  doc.save("School_Fee_Structure.pdf");
};


  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #8360c3, #2ebf91)",
          color: "white",
          p: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" fontWeight={700}>
            School Fee Structure
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Transparent and Affordable Fee Plan for Classes 1–12
          </Typography>
        </motion.div>
      </Box>

      {/* Table Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="primary"
          gutterBottom
        >
          Fee Details 📊
        </Typography>
        <Divider sx={{ width: "60%", mx: "auto", mb: 4 }} />

        <TableContainer component={Paper} elevation={6} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{  fontWeight: 600 }}>Class</TableCell>
                <TableCell sx={{  fontWeight: 600 }}>Tuition Fee</TableCell>
                <TableCell sx={{  fontWeight: 600 }}>Exam Fee</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Miscellaneous</TableCell>
                <TableCell sx={{  fontWeight: 600 }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feeData.map((row, index) => (
                <motion.tr
                  key={row.class}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                
                >
                  <TableCell >{row.class}</TableCell>
                  <TableCell >₹ {row.tuition}</TableCell>
                  <TableCell >₹ {row.exam}</TableCell>
                  <TableCell >₹ {row.misc}</TableCell>
                  <TableCell >
                    ₹ {row.total}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Download Button */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={downloadPDF}
          >
            Download Fee Structure PDF
          </Button>
        </Box>
      </Container>

      {/* Upcoming Due Dates */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          // color="secondary"
          gutterBottom
        >
          Upcoming Fee Due Dates ⏰
        </Typography>
        <Divider sx={{ width: "60%", mx: "auto", mb: 4 }} />

        <Grid container spacing={3}>
          {dueDates.map((item, index) => {
            const dueDate = new Date(item.due);
            const isOverdue = dueDate < today;
            // const isUpcoming = dueDate > today;

            return (
              <Grid item size={{xs:12, md:6, sm:12}} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card
                    elevation={4}
                    sx={{
                      borderRadius: 3,
                      textAlign: "center",
                      p: 3,
                      // backgroundColor: isOverdue ? "#ffebee" : "#e8f5e9",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight={600}>
                        {item.term}
                      </Typography>
                      <Typography sx={{ mt: 1, fontSize: "1rem" }}>
                        Due Date: {item.due}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontWeight: 600,
                          color: isOverdue ? "error.main" : "success.main",
                        }}
                      >
                        {isOverdue ? "Overdue ❌" : "Upcoming ✅"}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeesStructure;
