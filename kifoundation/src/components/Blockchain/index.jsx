// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiDevice from '../../assets/ki_foundation/domo_device.png';

import './style.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop: "5rem",
      marginBottom: "5rem",
      height: "100%"
    },
    tabsRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabsIndicator: {
      backgroundColor: '#0021f5',
    },
    tabRoot: {
      display: 'flex',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing.unit * 4,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#0021f5',
        opacity: 1,
      },
      '&$tabSelected': {
        color: '#0021f5',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#0021f5',
      },
    },
    tabSelected: {},
    typography: {
      padding: theme.spacing.unit * 3,
    },
    octagon: {
        height: "30vh",
        maxHeight: "450px"
    }
});
  
class Blockchain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    handleChange = (event, value) => {
        this.setState({ value });
    }
    renderTabsContent = () => {
        const { value } = this.state;
        console.log('value', value);
        if (value == 0) {
            return this.renderAboutContent()
        } else if (value == 1) {
            return this.renderProofContent()
        } else {
            return this.renderDevnetContent()
        }
    }
    renderAboutContent = () => {
        return (
            <div>
                <Typography className="mb-3" variant="h5">About</Typography>
                <Typography variant="subtitle1">
                    The Ki Foundation is building a new blockchain that fulfils its objectives of enabling both (1) an open development ecosystem and decentralized marketplace for dApps as well as (2) a new resource sharing paradigm, where, anything with computational power, storage and connectivity can be monetized and leased in real-time with minimal effort from both the resource providers and the users, while maintaining its principles of privacy, security and fairness.
                    The approach of the Ki Foundation’s R&D team will result in a scalable and secure protocol that can deal with thousands of transactions per second using very low computational power but without sacrificing on the organisation’s fairness ethos and commitment to decentralisation.
                </Typography>
            </div>
        );
    }
    renderProofContent = () => {
        return (
            <div>
                <Typography className="mb-3" variant="h5">Proof of reputation</Typography>
            </div>
        );
    }
    renderDevnetContent = () => {
        return (
            <div>
                <Typography className="mb-3" variant="h5">Mizuki DEVNET</Typography>
            </div>
        );
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Tabs
                            value={value}
                            onChange={this.handleChange}
                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                            >
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="ABOUT"
                            />
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="PROOF OF REPUTATION"
                            />
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="MIZUKI DEVNET"
                            />
                            </Tabs>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            {this.renderTabsContent()}
                        </div>
                    </div>
                </div>
                {/* <Typography className={classes.typography}>Ant Design UI powered by Material-UI</Typography> */}
            </div>
        );
    }    
}

Blockchain.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Blockchain);