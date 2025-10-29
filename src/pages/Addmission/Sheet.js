import React, { useState } from "react";
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
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const Sheet = () => {
  // Data with streams for 11 & 12
  const seatData = [
    { class: "Class 1", total: 40, filled: 35 },
    { class: "Class 2", total: 40, filled: 40 },
    { class: "Class 3", total: 40, filled: 32 },
    { class: "Class 4", total: 40, filled: 28 },
    { class: "Class 5", total: 40, filled: 39 },
    { class: "Class 6", total: 40, filled: 31 },
    { class: "Class 7", total: 40, filled: 30 },
    { class: "Class 8", total: 40, filled: 37 },
    { class: "Class 9", total: 40, filled: 34 },
    { class: "Class 10", total: 40, filled: 40 },
    { class: "Class 11 (Science)", total: 40, filled: 25 },
    { class: "Class 11 (Commerce)", total: 40, filled: 30 },
    { class: "Class 11 (Arts)", total: 40, filled: 20 },
    { class: "Class 12 (Science)", total: 40, filled: 38 },
    { class: "Class 12 (Commerce)", total: 40, filled: 35 },
    { class: "Class 12 (Arts)", total: 40, filled: 28 },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter data by search query
  const filteredData = seatData.filter((row) =>
    row.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #00b09b, #96c93d)",
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
          <Typography variant={isMobile ? "h4" : "h2"} fontWeight={700}>
            Vacant Seats Availability
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 1 }}>
            Check the availability of seats for each class (1–12)
          </Typography>
        </motion.div>
      </Box>

      {/* Search + Table/Card Section */}
      <Container sx={{ py: 6 }}>
        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search class (e.g. Class 11 Science)"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />

        {/* ✅ Desktop/Tablet → Table */}
        {!isMobile ? (
          <TableContainer
            component={Paper}
            elevation={4}
            sx={{
              borderRadius: 3,
              overflowX: "auto",
            }}
          >
            <Table>
              <TableHead >
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Class
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Total Seats
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Filled Seats
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Vacant Seats
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, i) => {
                  const vacant = row.total - row.filled;
                  return (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <TableCell align="center">{row.class}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                      <TableCell align="center">{row.filled}</TableCell>
                      <TableCell align="center" style={{ fontWeight: 600 }}>
                        {vacant}
                      </TableCell>
                      <TableCell align="center">
                        {vacant > 0 ? (
                          <Chip
                            label="Available"
                            color="success"
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            label="Full"
                            color="error"
                            variant="outlined"
                          />
                        )}
                      </TableCell>
                    </motion.tr>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          // ✅ Mobile → Card Layout
          <Grid container spacing={2}>
            {filteredData.map((row, i) => {
              const vacant = row.total - row.filled;
              return (
                <Grid item xs={12} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card
                      elevation={3}
                      sx={{
                        borderRadius: 3,
                        p: 2,
                        background:
                          vacant > 0
                            ? "linear-gradient(to right, #d4fc79, #96e6a1)"
                            : "linear-gradient(to right, #ff758c, #ff7eb3)",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" fontWeight={700}>
                          {row.class}
                        </Typography>
                        <Typography>Total Seats: {row.total}</Typography>
                        <Typography>Filled Seats: {row.filled}</Typography>
                        <Typography fontWeight={600}>
                          Vacant: {vacant}
                        </Typography>
                        <Chip
                          label={vacant > 0 ? "Available" : "Full"}
                          color={vacant > 0 ? "success" : "error"}
                          sx={{ mt: 1 }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Sheet;
