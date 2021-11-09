import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { get_items, get_combos } from "../../actions/menu";
import { useNavigate } from "react-router-dom";
export default function Loader() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([get_items(dispatch), get_combos(dispatch)]).then(() => {
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
        <Typography variant="h3" align="center" color="white">
          Al-Baik
        </Typography>
        <LinearProgress
          style={{ width: "80%", alignSelf: "center" }}
          color="warning"
        />
      </Box>
    </Dialog>
  );
}
