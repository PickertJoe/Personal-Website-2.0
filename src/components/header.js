import { Link } from "gatsby"
import React from "react"
import SideDrawer from "../components/SideDrawer"
import { AppBar, Toolbar, makeStyles, IconButton, Container, List, ListItem, ListItemText, Hidden } from "@material-ui/core"
import { Home } from "@material-ui/icons";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `about me`, path: `/about` },
  { title: `work`, path: `/work` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
]

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg"className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Hidden smDown>
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
              {navLinks.map(({ title, path }) => (
                <Link to={path} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}          
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks}/>
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
