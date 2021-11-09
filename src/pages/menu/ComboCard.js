import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Create from "@mui/icons-material/Create";
import Delete from "@mui/icons-material/Delete";
import image from "../../assets/burger.jpg";

const _pcs = (pcs) => (typeof pcs === "string" ? pcs : pcs + " Pcs");

export default function ComboCard({ name, price, items, editable = false }) {
  const item_list = useMemo(
    () => (
      <ul>
        {items.map((i, n) => (
          <li key={n}>
            {i.name} ({_pcs(i.pcs)})
          </li>
        ))}
      </ul>
    ),
    [items]
  );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="max-content"
          image={image}
          alt="burger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item_list}
          </Typography>
          <Typography variant="h5" color="success.light">
            {"₹ " + price}
          </Typography>
        </CardContent>
      </CardActionArea>
      {editable && (
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Button
                size="small"
                color="primary"
                variant="contained"
                startIcon={<Create />}
              >
                Edit
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                color="error"
                variant="outlined"
                startIcon={<Delete />}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      )}
    </Card>
  );
}
