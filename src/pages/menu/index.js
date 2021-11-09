import Layout from "../layout";
import { Grid, Typography, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemCard from "./ItemCard";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ComboCard from "./ComboCard";
function Menu() {
  const { menu } = useSelector((s) => s);
  const navigate = useNavigate();

  const items = useMemo(
    () =>
      menu.items.map((props, n) => (
        <Grid item key={n}>
          <ItemCard {...props} />
        </Grid>
      )),
    [menu.items]
  );
  const combos = useMemo(
    () =>
      menu.combos.map((props, n) => (
        <Grid item key={n}>
          <ComboCard {...props} />
        </Grid>
      )),
    [menu.combos]
  );

  return (
    <Layout title="Menu">
      <Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Typography variant="h3" mb={3}>
              Items
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add item
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {items}
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 7 }} variant="full-width" />
      <Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Typography variant="h3" mb={3}>
              Combos
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Combo
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {combos}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Menu;
