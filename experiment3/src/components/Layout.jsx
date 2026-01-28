import { Link, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
