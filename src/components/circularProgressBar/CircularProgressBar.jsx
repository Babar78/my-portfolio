import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100px",
        height: "100px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: "gray",
            "& .MuiCircularProgress-svg": {
              transform: "scale(2.5)", // Adjust the scale factor to reduce bar size
            },
            "@media (max-width: 576px)": {
              "& .MuiCircularProgress-svg": {
                transform: "scale(2)", // Adjust the scale factor to reduce bar size
              },
            },
          }}
          size={40} // Adjust the size to control the overall circular bar size
          thickness={2.5}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          {...props}
          sx={{
            color: "#b91813",
            width: "100px", // Adjust the size to control the overall circular bar size
            height: "100px", // Adjust the size to control the overall circular bar size
            position: "absolute",
            left: 0,
            "& .MuiCircularProgress-svg": {
              transform: "scale(2.5)", // Adjust the scale factor to reduce bar size
            },
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
            "@media (max-width: 576px)": {
              "& .MuiCircularProgress-svg": {
                transform: "scale(2)", // Adjust the scale factor to reduce bar size
              },
            },
          }}
          thickness={2.5}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          color="white"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function CircularProgressBar({ label, percentage }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const duration = 1000; // Total duration in milliseconds

    const steps = percentage; // Number of steps to reach the percentage
    const increment = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep > steps) {
        clearInterval(timer); // Stop the timer when progress reaches or exceeds the percentage
        return;
      }
      const newProgress = (currentStep / steps) * percentage;
      setProgress(newProgress);
    }, increment);

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <CircularProgressWithLabel value={progress} id="language" />
      <label htmlFor="language">{label}</label>
    </div>
  );
}

export default CircularProgressBar;
