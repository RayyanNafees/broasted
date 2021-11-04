import Layout from "../layout";
import { Grid, Typography } from "@mui/material";
import ItemCard from "./ItemCard";
function Menu() {
  const items = Array(5).fill(
    <Grid item>
      <ItemCard />
    </Grid>
  );
  return (
    <Layout title="Menu">
      <Grid>
        <Typography variant="h2">Items</Typography>
        <Grid container spacing={3}>
          {items}
        </Grid>
      </Grid>
      <Grid>
        <Typography variant="h2">Combos</Typography>
      </Grid>
    </Layout>
  );
}

export default Menu;
