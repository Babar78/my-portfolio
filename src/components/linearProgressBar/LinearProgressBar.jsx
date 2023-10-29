import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function LinearProgressBar({ label, percentage }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const duration = 1000; // Total duration in milliseconds

    const steps = percentage; // Number of steps to reach 50
    const increment = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(timer); // Stop the timer when progress reaches 50
        return;
      }
      const newProgress = (currentStep / steps) * percentage;
      setProgress(newProgress);
    }, increment);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <label htmlFor="progress-bar">{label}</label>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "gray", // Background color
        }}
        id="progress-bar"
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            backgroundColor: "transparent",
            "& .MuiLinearProgress-bar": { backgroundColor: "#b91813" },
          }}
        />
      </Box>
    </>
  );
}

export default LinearProgressBar;
