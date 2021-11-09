import Layout from "../layout";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

export default function Settings() {
  const { settings } = useSelector((s) => s);
  return (
    <Layout title="Settings">
      <Typography>Tables</Typography>
      <Typography>{settings.hotel.tables}</Typography>
    </Layout>
  );
}
