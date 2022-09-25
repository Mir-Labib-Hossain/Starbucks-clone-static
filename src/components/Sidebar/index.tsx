import { AccountBox, Brightness4, Category, Coffee, CoffeeMaker, EmojiFoodBeverage, ExpandLess, ExpandMore, Home, LocalDrink, Settings, WineBar } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
export interface SidebarProps {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}
const Sidebar: React.FC<SidebarProps> = ({ mode, setMode }) => {
  // user dropdown
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // theme toggler / switch
  const switchLabel = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <Box width="15vw" sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed" width="14vw">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Category" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LocalDrink />
                </ListItemIcon>
                <ListItemText primary="Water" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Coffee />
                </ListItemIcon>
                <ListItemText primary="Coffee" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <WineBar />
                </ListItemIcon>
                <ListItemText primary="Drinks" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <EmojiFoodBeverage />
                </ListItemIcon>
                <ListItemText primary="Tea" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            <ListItemIcon>
              <CoffeeMaker />
            </ListItemIcon>
            <ListItemText primary="Roasters" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <EmojiFoodBeverage />
            </ListItemIcon>
            <ListItemText primary="Our Tea's" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Brightness4 />
            </ListItemIcon>
            <Switch {...switchLabel} defaultChecked onChange={() => setMode(mode === "light" ? "dark" : "light")} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};
export default Sidebar;
