import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

class AppHeader extends React.Component {
  public render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Ahmed AlAskalany
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppHeader;
