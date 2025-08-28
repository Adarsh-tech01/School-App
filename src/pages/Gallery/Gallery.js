import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";


const galleryImages = [
  { category: "Events", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", title: "Annual Day Celebration" },
  { category: "Events", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80", title: "Science Exhibition" },
  { category: "Classes", src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80", title: "Smart Classroom" },
  { category: "Classes", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80", title: "Library" },
  { category: "Labs", src: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Science Lab" },
  { category: "Labs", src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80", title: "Computer Lab" },
  { category: "Sports", src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80", title: "Football Ground" },
  { category: "Sports", src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Basketball Court" },
];

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredImages =
    category === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #ff9966, #ff5e62)",
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
            School Gallery 📸
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Explore moments from our classrooms, labs, sports & events
          </Typography>
        </motion.div>
      </Box>

      {/* Category Filter */}
      <Container sx={{ py: 4, textAlign: "center" }}>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={(e, newCat) => newCat && setCategory(newCat)}
          sx={{ flexWrap: "wrap", gap: 1 }}
        >
          {["All", "Events", "Classes", "Labs", "Sports"].map((cat) => (
            <ToggleButton key={cat} value={cat} sx={{ px: 3 }}>
              {cat}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Container>

      {/* Gallery Grid */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {filteredImages.map((img, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={img.src}
                    alt={img.title}
                  />
                  <Box sx={{ p: 2, textAlign: "center" }}>
                    <Typography fontWeight={600}>{img.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {img.category}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Lightbox with Slideshow + Zoom */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={filteredImages.map((img) => ({
            src: img.src,
            description: img.title,
          }))}
          plugins={[Slideshow, Zoom]}
          slideshow={{ autoplay: true, delay: 3000 }} // auto play every 3s
          zoom={{ maxZoomPixelRatio: 3 }} // zoom up to 3x
        />
      )}
    </Box>
  );
};

export default Gallery;
