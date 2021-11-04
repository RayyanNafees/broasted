// import * as React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Item = ({ name, Icon }) => (
  <ListItem button>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

export const mainListItems = (
  <div>
    <Item Icon={DashboardIcon} name="Dashboard" />
    <Item Icon={ShoppingCartIcon} name="Orders" />
    <Item Icon={LayersIcon} name="Menu" />
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <Item Icon={AssignmentIcon} name="Current month" />
    <Item Icon={AssignmentIcon} name="Last quarter" />
    <Item Icon={AssignmentIcon} name="Year-end sale" />
  </div>
);
