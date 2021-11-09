import Layout from "../layout";
import { Grid, Typography } from "@mui/material";
import ItemCard from "./ItemCard";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Menu() {
  const { menu } = useSelector((s) => s);

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
          <ItemCard {...props} />
        </Grid>
      )),
    [menu.combos]
  );

  return (
    <Layout title="Menu">
      <Grid>
        <Typography variant="h3" mb={3}>
          Items
        </Typography>
        <Grid container spacing={3}>
          {items}
        </Grid>
      </Grid>
      <Grid>
        <Typography variant="h3" mt={6} mb={3}>
          Combos
        </Typography>
        <Grid container spacing={3}>
          {combos}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Menu;
