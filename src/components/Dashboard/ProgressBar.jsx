/** @format */

import React, { useState } from "react";
import { LinearProgress, Box, Grid, Typography } from "@mui/material";

const ProgressBar = () => {
  const [progress, setProgress] = useState(69);
  return (
    <Box paddingLeft={3} paddingRight={3}>
      <Grid container>
        <Grid item lg={1} xs={12}>
          <Typography>{progress}%</Typography>
        </Grid>
        <Grid item lg={11} xs={12} mt={2} mb={5}>
          <LinearProgress variant="determinate" value={progress} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgressBar;
