// Services
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
  rootTransparent: {
    flexGrow: 1,
    zIndex: 1000,
    backgroundColor: "transparent"
  },
  growRight: {
    flexGrow: 1,
    textAlign: "right"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbarTransparent: {
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "none",
    paddingTop: "0.5rem",
    // padding: "0.5rem 1rem 0 1rem",
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
    whiteSpace: "nowrap",
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
  },
  menuIconWrapper: {
    background: "none",
    border: "none",
    outline: "none",
    "&:focus": {
      outline: "none"
    }
  },
  menuIcon: {
    cursor: "pointer"
  },
  menuFixed: {
    position: "fixed",
    top: 0,
    left: 0,
    background: "#fff",
    width: "100%",
    height: "100%",
    zIndex: 100000
  },
  listWrapper: {
    paddingTop: "72px"
  }
};

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      mobileOpened: true
    }
  }
  updateDimensions = () => {
    this.setState({width: window.innerWidth});
  }
  componentWillMount = () => {
      this.updateDimensions();
  }
  componentDidMount = () => {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount = () => {
      window.removeEventListener("resize", this.updateDimensions);
  }
  openNavbar = () => {
    const { mobileOpened } = this.state;
    this.setState({mobileOpened: !mobileOpened});
  }
  closeNavbar = () => {
    this.setState({mobileOpened: false});
  }
  render() {
    const { classes } = this.props;
    const { width, mobileOpened } = this.state;
    let isMobile = width < 500;
    let otherThanHome = window.location.pathname !== "/";
    let threeDom = document.getElementsByClassName("threejswrapper");
    if (!otherThanHome && threeDom && threeDom[0]) {
        threeDom[0].classList.remove("d-none");
    } else {
        threeDom[0].classList.add("d-none");
    }
    let navbar;
    if (isMobile) {
      navbar = 
        <div className={classes.rootTransparent}>
          <AppBar position="absolute" color="default" className={classes.navbarTransparent}>
            <Toolbar>
              <NavLink className="ki-foundation-logo-mobile" to="/"><img height="30" src={KiFoundationLogoMobile} alt="Ki Foundation"/></NavLink>
              <div className={classes.growRight}>
                {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                <button className={classes.menuIconWrapper} type="button" onClick={this.openNavbar}>
                  <MenuIcon className={classes.menuIcon}/>
                </button>
                {/* <NavLink to="/team"><span className={classes.button}>test</span></NavLink> */}
                {/* <NavLink to="/contact"><span className={classes.button}>test Us</span></NavLink> */}
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.menuFixed} hidden={mobileOpened}>
            <AppBar position="absolute" color="default" className={classes.navbarTransparent}>
              <Toolbar>
                <NavLink onClick={this.openNavbar} className="ki-foundation-logo-mobile" to="/"><img height="30" src={KiFoundationLogoMobile} alt="Ki Foundation"/></NavLink>
                <div className={classes.growRight}>
                  {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                  <button className={classes.menuIconWrapper} type="button" onClick={this.openNavbar}>
                    <CloseIcon className={classes.menuIcon}/>
                  </button>
                </div>
              </Toolbar>
            </AppBar>
            <div className={classes.listWrapper}>
              <List component="nav">
                <ListItemLink button href="/team">
                  <ListItemText align="center" primary="Team" />
                </ListItemLink>
                <Divider/>
                <ListItemLink button href="/contact">
                  <ListItemText align="center" primary="Contact Us" />
                </ListItemLink>
                <Divider/>
                <ListItemLink button href="https://domo.ki" target="_blank">
                  <ListItemText align="center" primary="Ki Device" />
                </ListItemLink>
              </List>
            </div>
          </div>
        </div>;
    } else {
      navbar = 
        <div className={classes.rootTransparent}>
          <div className="container">
            <div className="row">
              <div className="col">
                <AppBar position="absolute" color="default" className={classes.navbarTransparent}>
                  <Toolbar>
                    <NavLink className="ki-foundation-logo" to="/"><img height="30" src={KiFoundationLogo} alt="Ki Foundation"/></NavLink>
                    <div className={classes.growRight}>
                      {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                      {/* <NavLink to="/device"><span className={classes.button}>Device</span></NavLink> */}
                      <NavLink to="/team"><span className={classes.button}>Team</span></NavLink>
                      <NavLink to="/contact"><span className={classes.button}>Contact Us</span></NavLink>
                    </div>
                  </Toolbar>
                </AppBar>
              </div>
            </div>
          </div>
        </div>;
    }
    return navbar;
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);