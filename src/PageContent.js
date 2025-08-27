import { Box, Typography } from "@mui/material";

export default function PageContent({ title }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
}
