import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

// Sample Data for Courses with streams for Class 11 & 12
const courses = {
  "Class 1": ["English", "Mathematics", "EVS", "Art & Craft"],
  "Class 2": ["English", "Mathematics", "Science", "Hindi", "Drawing"],
  "Class 3": ["English", "Mathematics", "Science", "Social Studies", "Computer"],
  "Class 4": ["English", "Mathematics", "Science", "Social Studies", "GK"],
  "Class 5": ["English", "Mathematics", "Science", "Social Studies", "Computer"],
  "Class 6": ["English", "Mathematics", "Science", "Social Studies", "Sanskrit"],
  "Class 7": ["English", "Mathematics", "Physics", "Chemistry", "History", "Geography"],
  "Class 8": ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Computer"],
  "Class 9": ["English", "Mathematics", "Science", "Social Studies", "IT"],
  "Class 10": ["English", "Mathematics", "Science", "Social Studies", "Computer Science"],
  "Class 11 (Science)": ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
  "Class 11 (Commerce)": ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
  "Class 11 (Arts)": ["History", "Political Science", "Geography", "Economics", "English"],
  "Class 12 (Science)": ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
  "Class 12 (Commerce)": ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
  "Class 12 (Arts)": ["History", "Political Science", "Geography", "Economics", "English"],
};

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stream, setStream] = useState("All");

  // Filter courses by search and stream
  const filteredCourses = Object.entries(courses).filter(([className, subjects]) => {
    const search = searchTerm.toLowerCase();

    // Filter by stream
    if (stream !== "All") {
      if (!className.includes(`(${stream})`)) return false;
    }

    // Filter by search term (class or subject)
    return (
      className.toLowerCase().includes(search) ||
      subjects.some((subj) => subj.toLowerCase().includes(search))
    );
  });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: "35vh", md: "45vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          color: "white",
          p: { xs: 3, md: 5 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            School Courses
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            Explore the curriculum from Class 1 to Class 12
          </Typography>
        </motion.div>
      </Box>

      {/* Search + Filter Bar */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by class or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                background: "white",
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl sx={{width:'200%'}}>
              <InputLabel>Filter by Stream</InputLabel>
              <Select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                label="Filter by Stream"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Arts">Arts</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>

      {/* Course Grid */}
      <Container sx={{ pb: 6 }}>
        <Grid container spacing={4}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(([className, subjects], index) => (
              <Grid item size={{xs:12, md:4,sm:12}} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      height: "100%",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        color="primary"
                        gutterBottom
                      >
                        {className}
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      {subjects.map((subj, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{ mb: 0.5 }}
                          color="text.secondary"
                        >
                          📘 {subj}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              color="error"
              sx={{ textAlign: "center", width: "100%", mt: 4 }}
            >
              ❌ No courses found
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesPage;
