// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiFoundationLogo from '../../assets/ki_foundation/logo_foundation.svg';

const styles = {
    root: {
        padding: "80px 0"
    },
    divider: {
        margin: "50px 0"
    },
    title: {
        color: "#3b426c"
    },
    link: {
        color: "#3b426c",
        display: "block",
        margin: "1rem 0",
        "&:hover": {
            color: "#3b426c",
            textDecoration: "none"
        }
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img height="65" src={KiFoundationLogo} alt="Footer Ki Logo"/>
                        </div>
                    </div>
                    <Divider className={classes.divider}/>
                    <div className="row">
                        <div className="col-md-4">
                            <Typography className={classes.title} variant="h6"> The Ki Foundation </Typography>
                            <a className={classes.link} href="/">Ki Device</a>
                            <a className={classes.link} href="https://blockchain.ki">Ki Blockchain</a>
                            <a className={classes.link} href="https://wallet.ki">Ki Wallet</a>
                            <a className={classes.link} href="/">Ki Ecosystem</a>
                            <a className={classes.link} href="/">Buy Ki</a>

                        </div>
                        <div className="col-md-4">
                            <Typography className={classes.title} variant="h6"> Legal </Typography>
                            <a className={classes.link} href="/">Privacy Policy</a>
                            <a className={classes.link} href="/">Terms of use</a>
                        </div>
                        <div className="col-md-4">
                            <Typography className={classes.title} variant="h6"> Find Us </Typography>
                            <a className={classes.link} href="/">Contact</a>
                            <a className={classes.link} href="/">Facebook</a>
                            <a className={classes.link} href="/">Twitter</a>
                            <a className={classes.link} href="/">Linkedin</a>
                            <a className={classes.link} href="/">Discord</a>
                            <a className={classes.link} href="/">Medium</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);