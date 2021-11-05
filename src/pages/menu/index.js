import Layout from "../layout";
import { Grid, Typography } from "@mui/material";
import ItemCard from "./ItemCard";
import { useEffect, useState, useMemo } from "react";
import { getDocs, collection } from "firebase/firestore";
import fstore from "../../firebase";

function Menu() {
  const [item, setItems] = useState([]);
  const [combo, setCombos] = useState([]);
  useEffect(() => {
    getDocs(collection(fstore, "items")).then((snap) =>
      setItems(snap.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(() => {
    getDocs(collection(fstore, "combos")).then((snap) =>
      setCombos(snap.docs.map((doc) => doc.data()))
    );
  }, []);

  const items = useMemo(
    () =>
      item.map((props, n) => (
        <Grid item key={n}>
          <ItemCard {...props} />
        </Grid>
      )),
    [item]
  );
  const combos = useMemo(
    () =>
      combo.map((props, n) => (
        <Grid item key={n}>
          <ItemCard {...props}  />
        </Grid>
      )),
    [combo]
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
