import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0,
};

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        style={{
          background: "transparent",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                flexDirection: "row-reverse",
              },
            }}
          >
            <List style={flexContainer}>
              <ListItem>
                <Link to={"/dashboard-overview"}>
                  <DashboardTwoToneIcon />
                </Link>
              </ListItem>
              <ListItem>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <IconButton>
                      <SchoolTwoToneIcon />
                    </IconButton>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      component={Link}
                      to="/invoices"
                      onClick={handleClose}
                    >
                      Invoices
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/school-listing"
                      onClick={handleClose}
                    >
                      School Listing
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/collections"
                      onClick={handleClose}
                    >
                      Collections
                    </MenuItem>
                  </Menu>
                </div>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

export default Navbar;
