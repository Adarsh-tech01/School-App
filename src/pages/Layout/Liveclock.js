import  { useState, useEffect } from "react";

function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", fontSize: 12 }}>
      <span>{dateString}</span>
      <span>{timeString}</span>
    </div>
  );
}


export default LiveClock ;
