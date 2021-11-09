import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar";

import { get_items, get_combos } from "../actions/menu";
import { useNavigate } from "react-router-dom";
import { hotel_data } from "../actions/settings";
import logo from "../assets/chicken-leg.png";

export default function Loader() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      get_items(dispatch),
      get_combos(dispatch),
      hotel_data(dispatch),
    ]).then(() => {
      setOpen(false);
      navigate("/dashboard");
    });
  }, [dispatch, navigate]);

  return (
    <Dialog fullScreen open={open}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "error.dark",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <img
          alt="Al-Baik"
          src={logo}
          style={{ width: 150, height: 150, alignSelf: "center", marginBottom:50, boarder:'1px solid orange'}}
        /> */}
        <Typography variant="h3" align="center" color="white">
          Al-Baik
        </Typography>
        <Typography variant="body" align="center" color="white">
          Please wait while we make everything ready for you...
        </Typography>

        <LinearProgress
          style={{ width: "80%", alignSelf: "center", marginTop: 20 }}
          color="warning"
        />
      </Box>
    </Dialog>
  );
}
