// AcademicCalendarPage.jsx
import React, { useMemo, useState } from "react";
import {
  Container,
  Typography,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  // Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EventIcon from "@mui/icons-material/Event";
import TodayIcon from "@mui/icons-material/Today";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import dayjs from "dayjs";

export default function AcademicCalendarPage() {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add / Update event
  const handleSaveEvent = () => {
    const key = selectedDate.format("YYYY-MM-DD");
    if (!eventName.trim()) return;

    setEvents((prev) => {
      const updated = { ...prev };
      if (!updated[key]) updated[key] = [];

      if (editingIndex !== null) {
        updated[key][editingIndex] = eventName.trim();
      } else {
        updated[key].push(eventName.trim());
      }
      return updated;
    });

    setEventName("");
    setEditingIndex(null);
    setOpen(false);
  };

  // Delete event
  const handleDeleteEvent = (dateKey, index) => {
    setEvents((prev) => {
      const updated = { ...prev };
      updated[dateKey].splice(index, 1);
      if (updated[dateKey].length === 0) delete updated[dateKey];
      return updated;
    });
  };

  // Edit event
  const handleEditEvent = (dateKey, index, currentValue) => {
    setSelectedDate(dayjs(dateKey));
    setEventName(currentValue);
    setEditingIndex(index);
    setOpen(true);
  };

  // Custom calendar day
  const EventDay = useMemo(
    () =>
      function EventDay(innerProps) {
        const { day, outsideCurrentMonth, ...others } = innerProps;
        const key = day.format("YYYY-MM-DD");
        const hasEvent = Boolean(events[key]?.length);

        return (
          <Badge
            overlap="circular"
            variant={hasEvent ? "dot" : undefined}
            color="secondary"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <PickersDay
              {...others}
              day={day}
              outsideCurrentMonth={outsideCurrentMonth}
            />
          </Badge>
        );
      },
    [events]
  );

  // Open dialog on date select
  const handleCalendarChange = (newValue) => {
    if (!newValue) return;
    setSelectedDate(newValue);
    setEventName("");
    setEditingIndex(null);
    setOpen(true);
  };

  // Today’s & Upcoming events
  const todayKey = dayjs().format("YYYY-MM-DD");
  const todaysEvents = events[todayKey] || [];

  const upcomingEvents = Object.entries(events)
    .flatMap(([dateKey, list]) =>
      list.map((ev) => ({ date: dayjs(dateKey), title: ev }))
    )
    .filter((ev) => ev.date.isAfter(dayjs(), "day"))
    .sort((a, b) => a.date.valueOf() - b.date.valueOf());

  return (
    <Container sx={{ py: 5 }}>
      <Box
        sx={{
          minHeight: { xs: "40vh", md: "50vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #8360c3, #2ebf91)",
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
            Academic Calendar
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            Track all school events, festivals, and important dates
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4} sx={{ py: 4 }}>
        {/* Calendar */}
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Select a Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={selectedDate}
                  onChange={handleCalendarChange}
                  slots={{ day: EventDay }}
                />
              </LocalizationProvider>
            </CardContent>
          </Card>
        </Grid>

        {/* Today + Upcoming */}
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 3, mb: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <TodayIcon color="primary" /> Today’s Events
              </Typography>
              <List>
                {todaysEvents.length === 0 ? (
                  <ListItem>
                    <ListItemText primary="No events today." />
                  </ListItem>
                ) : (
                  todaysEvents.map((ev, idx) => (
                    <ListItem key={idx} sx={{ borderBottom: "1px solid #eee" }}>
                      <ListItemText primary={ev} secondary="Today" />
                    </ListItem>
                  ))
                )}
              </List>
            </CardContent>
          </Card>

          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <RocketLaunchIcon color="secondary" /> Upcoming Events
              </Typography>
              <List>
                {upcomingEvents.length === 0 ? (
                  <ListItem>
                    <ListItemText primary="No upcoming events." />
                  </ListItem>
                ) : (
                  upcomingEvents.map((ev, idx) => (
                    <ListItem key={idx} sx={{ borderBottom: "1px solid #eee" }}>
                      <ListItemText
                        primary={ev.title}
                        secondary={ev.date.format("MMMM D, YYYY")}
                      />
                    </ListItem>
                  ))
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Event Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {editingIndex !== null ? "Edit event" : "Add event"} for{" "}
          {selectedDate.format("DD MMMM YYYY")}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event name"
            fullWidth
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          {/* Existing events for this date */}
          {events[selectedDate.format("YYYY-MM-DD")]?.length ? (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Events on this date:
              </Typography>
              <List dense>
                {events[selectedDate.format("YYYY-MM-DD")].map((ev, i) => (
                  <ListItem
                    key={i}
                    secondaryAction={
                      <>
                        <IconButton
                          edge="end"
                          onClick={() =>
                            handleEditEvent(
                              selectedDate.format("YYYY-MM-DD"),
                              i,
                              ev
                            )
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          onClick={() =>
                            handleDeleteEvent(
                              selectedDate.format("YYYY-MM-DD"),
                              i
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemText primary={ev} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEvent}>
            {editingIndex !== null ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* All Events */}
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <EventIcon color="info" /> All Events
        </Typography>
        <Card elevation={3} sx={{ borderRadius: 3 }}>
          <CardContent>
            <List>
              {Object.entries(events).length === 0 && (
                <ListItem>
                  <ListItemText primary="No events added yet." />
                </ListItem>
              )}
              {Object.entries(events).map(([dateKey, list]) =>
                list.map((ev, idx) => (
                  <ListItem
                    key={`${dateKey}-${idx}`}
                    sx={{ borderBottom: "1px solid #eee" }}
                  >
                    <ListItemText
                      primary={ev}
                      secondary={dayjs(dateKey).format("MMMM D, YYYY")}
                    />
                  </ListItem>
                ))
              )}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
