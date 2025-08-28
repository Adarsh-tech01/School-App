import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for news
const newsData = [
  {
    title: "Annual Sports Day Celebration",
    date: "March 10, 2025",
    description:
      "Our school hosted its Annual Sports Day with great enthusiasm. Students showcased their talents in athletics and cultural events.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Science Exhibition 2025",
    date: "February 18, 2025",
    description:
      "Students displayed innovative science models, projects, and experiments, sparking curiosity and creativity.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Republic Day Celebration",
    date: "January 26, 2025",
    description:
      "The school celebrated Republic Day with patriotic fervor, cultural programs, and a flag-hoisting ceremony.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
    {
    title: "Republic Day Celebration",
    date: "January 26, 2025",
    description:
      "The school celebrated Republic Day with patriotic fervor, cultural programs, and a flag-hoisting ceremony.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
];

// Announcements
const announcements = [
  "Parent-Teacher Meeting on March 20, 2025",
  "Admissions open for Academic Year 2025-26",
  "School will remain closed on March 29 for Holi",
];

const News = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: "30vh", md: "40vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #36D1DC, #5B86E5)",
          color: "white",
          p: { xs: 2, md: 4 },
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
            School News & Updates
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Stay updated with the latest happenings at our school 📰
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* News Section */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary"
              gutterBottom
              sx={{ fontSize: { xs: "1.75rem", md: "2rem" } }}
            >
              Latest News
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              {newsData.map((news, i) => (
                <Grid item size={{xs:12, md:6, sm:6}} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={news.image}
                        alt={news.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {news.date}
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                        >
                          {news.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            mt: 1,
                            color: "text.secondary",
                            fontSize: { xs: "0.85rem", md: "0.95rem" },
                          }}
                        >
                          {news.description}
                        </Typography>
                        <Chip
                          label="Read More"
                          color="primary"
                          size="small"
                          sx={{ mt: 2 }}
                          clickable
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Announcements */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontWeight={700}
              color="secondary"
              gutterBottom
              sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
            >
              Announcements 📢
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {announcements.map((a, i) => (
                <ListItem
                  key={i}
                  sx={{
                    py: 1,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <ListItemText
                    primary={a}
                    primaryTypographyProps={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* Media / Gallery Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            color="primary"
            gutterBottom
            sx={{ fontSize: { xs: "1.75rem", md: "2rem" } }}
          >
            Media Highlights
          </Typography>
          <Divider sx={{ width: "60%", mx: "auto", my: 2 }} />

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {[
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
            ].map((img, i) => (
              <Grid item size={{xs:12, md:3, sm:6}} key={i}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: { xs: 1, md: 3 },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={img}
                      alt="School Event"
                      sx={{ objectFit: "cover" }}
                    />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default News;
