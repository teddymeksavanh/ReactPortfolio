// Services
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

// Images
import KiFoundationLogo from '../../assets/ki_foundation/logo_foundation.svg';
import KiFoundationLogoMobile from '../../assets/ki_foundation/ki_foundation_logo_short.png';

// Components
import NavLink from '../CustomComponent/NavLink';

import './style.css';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1000,
    backgroundColor: "#fff"
  },
  growRight: {
    flexGrow: 1,
    textAlign: "right"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar: {
    background: "#fff",
    border: 0,
    boxShadow: "none",
    padding: "0.5rem 1rem 0 1rem",
    minHeight: 72
  },
  link: {
    textTransform: "uppercase",
    '&:hover': {
      textDecoration: "none"
    }
  },
  button: {
    color: "#3b426c",
    margin: "0 0 0 4rem",
    position: "relative",
    textTransform: "uppercase",
    '&:hover': {
      backgroundColor: "inherit"
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '1rem',
      height: '0',
      border: '1px solid transparent',
      borderTopColor: '#0021f5',
      left: "-26px",
      bottom: "4px"
    }
  }
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="default" className={classes.navbar}>
        <Toolbar>
          <NavLink className="ki-foundation-logo" to="/"><img height="30" src={KiFoundationLogo} alt="Ki Foundation"/></NavLink>
          <NavLink className="ki-foundation-logo-mobile" to="/"><img height="30" src={KiFoundationLogoMobile} alt="Ki Foundation"/></NavLink>
          <div className={classes.growRight}>
            {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
            <NavLink to="/team"><span className={classes.button}>Team</span></NavLink>
            <NavLink to="/contact"><span className={classes.button}>Contact Us</span></NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);