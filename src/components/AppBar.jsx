import * as React from "react";
import MaterialAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MaterialAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI
          </Typography>
        </Toolbar>
      </MaterialAppBar>
    </Box>
  );
}

export default AppBar;
