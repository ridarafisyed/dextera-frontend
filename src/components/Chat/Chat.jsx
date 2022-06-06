/** @format */

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Chip from "@mui/material/Chip"
import SendIcon from "@mui/icons-material/Send";
import React, { Fragment } from "react";
import Avatar from "@mui/material/Avatar";

const ChatHistory = () => {
  return (
    <Typography>
      <Box
        p={2}
        sx={{
          border: "1px solid lightgray",
          borderRadius: "1rem",
        }}
      >
        <Chip
          label="Hi"
          variant="outlined"
          avatar={<Avatar>D</Avatar>}
          size="large"
          sx={{
            float: "right",
            marginTop: "1rem",
          }}
        />
        <br />
        <Chip label="Hello" variant="outlined" avatar={<Avatar>M</Avatar>} />
        <br />
        <Chip
          label="Message by M"
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          sx={{
            marginTop: "1rem",
          }}
        />
        <br />
        <Chip
          label="Message by D"
          variant="outlined"
          avatar={<Avatar>D</Avatar>}
          sx={{
            float: "right",
            marginTop: "1rem",
          }}
        />
        <br />
        <Chip
          label="this is just a ui design"
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          sx={{ marginTop: "1rem" }}
        />
        <br />
        <Chip
          label="the chat feature is not working at backend"
          variant="outlined"
          avatar={<Avatar>D</Avatar>}
          sx={{
            float: "right",
            marginTop: "1rem",
          }}
        />
        <br />

        <br />
      </Box>
    </Typography>
  );
};

const Chatting = () => {
  return (
    <Fragment>
      <ChatHistory />
      <br />
      <Box
        component="form"
        sx={{
          //   border: "1px solid lightgray",
          //   borderRadius: "1rem",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <TextField type="text" size="small" variant="outlined" />
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          type="submit"
          sx={{
            m: 1,
          }}
        >
          Send
        </Button>
      </Box>
    </Fragment>
  );
};

export default Chatting;
