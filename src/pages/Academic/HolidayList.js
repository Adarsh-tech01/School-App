import React, { useEffect, useState } from "react";
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
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const year = new Date().getFullYear();

    // Fixed public holidays
    const fixedHolidays = [
      { name: "New Year's Day", month: 0, day: 1 },
      { name: "Republic Day", month: 0, day: 26 },
      { name: "Independence Day", month: 7, day: 15 },
      { name: "Gandhi Jayanti", month: 9, day: 2 },
      { name: "Christmas Day", month: 11, day: 25 },
    ];

    // Approximate movable festival dates for the current year
    const festivalHolidays = [
      { name: "Makar Sankranti", month: 0, day: 14 },
      { name: "Holi", month: 2, day: 25 },
      { name: "Ram Navami", month: 3, day: 14 },
      { name: "Good Friday", month: 3, day: 18 },
      { name: "Eid al-Fitr", month: 3, day: 21 },
      { name: "Raksha Bandhan", month: 7, day: 19 },
      { name: "Ganesh Chaturthi", month: 8, day: 7 },
      { name: "Diwali", month: 10, day: 1 },
      { name: "Guru Nanak Jayanti", month: 10, day: 15 },
      { name: "Eid al-Adha", month: 5, day: 28 },
    ];

    // Combine both arrays
    const allHolidays = [...fixedHolidays, ...festivalHolidays];

    // Format dates
    const formatted = allHolidays.map((h) => {
      const dateObj = new Date(year, h.month, h.day);
      return {
        name: h.name,
        date: dateObj.toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
    });

    // Sort by date
    formatted.sort((a, b) => new Date(a.date) - new Date(b.date));

    setHolidays(formatted);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #ff512f, #dd2476)",
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
          <Typography variant="h2" fontWeight={700}>
            Holiday List {new Date().getFullYear()}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Official public holidays & major festivals in India 🎉
          </Typography>
        </motion.div>
      </Box>

      {/* Table Section */}
      <Container sx={{ py: 6 }}>
        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Holiday / Festival
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {holidays.map((h, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{h.date}</TableCell>
                  <TableCell align="center">{h.name}</TableCell>
                  <TableCell align="center">
                    <Chip label="Holiday" color="success" variant="outlined" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default HolidayList;
