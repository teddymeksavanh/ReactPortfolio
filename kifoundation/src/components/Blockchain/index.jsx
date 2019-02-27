// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiDevice from '../../assets/ki_foundation/Black_Front.png';
import KiDeviceSide from '../../assets/ki_foundation/Black_Side.png';
import KiDeviceWhiteSide from '../../assets/ki_foundation/device_side_white.png';
import iconDecentralized from '../../assets/blockchain/icon-decentralized.svg';
import iconFlash from '../../assets/blockchain/icon-flash.svg';
import iconReputation from '../../assets/blockchain/icon-reputation.svg';
import number1 from '../../assets/blockchain/number1.svg';
import number2 from '../../assets/blockchain/number2.svg';
import number3 from '../../assets/blockchain/number3.svg';
import BlockchainImage from '../../assets/home/blockchain.png';

import './style.css';
import styles from './materialStyle.js';
import { Divider } from '@material-ui/core';

class Blockchain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            nav1: null,
            nav2: null,
            imageSelected: KiDevice
        }
    }
    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }
    handleChange = (event, value) => {
        this.setState({ value });
    }
    selectThisImage = (image) => {
        document.getElementById('slide-1-wrapper').classList.remove('fadeIn');
        this.setState({imageSelected: image});
        setTimeout(() => { document.getElementById('slide-1-wrapper').classList.add('fadeIn') }, 0);
    }
    renderContents = () => {
        const { value } = this.state;
        if ( value == 1 ) {
            return this.renderPORContent()
        } else if ( value == 2 ) {
            return this.renderDevnetContent()
        } else {
            return this.renderAboutContent()
        }
    }
    renderAboutContent = () => {
        return (
            <div id="about" className="container p-0 mt-5">
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <Typography align="justify" variant="subtitle2">
                            &nbsp;&nbsp;&nbsp;The Ki Foundation is building a new blockchain that fulfils its objectives of enabling both (1) an open development ecosystem and decentralized marketplace for dApps as well as (2) a new resource sharing paradigm, where, anything with computational power, storage and connectivity can be monetized and leased in real-time with minimal effort from both the resource providers and the users, while maintaining its principles of privacy, security and fairness.
                        </Typography>
                    </div>
                    <div className="col-md-12">
                        <Typography align="justify" variant="subtitle2">
                            &nbsp;&nbsp;&nbsp;The approach of the Ki Foundation’s R&D team will result in a scalable and secure protocol that can deal with thousands of transactions per second using very low computational power but without sacrificing on the organisation’s fairness ethos and commitment to decentralisation.
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
    renderPORContent = () => {
        const { classes } = this.props;
        const por = [
            { name: 'Number 1', text: 'Energy efficiency by eliminating expensive hashing puzzles.', image: iconDecentralized, number: number1, classes: 'item col-md-4' },
            { name: 'Number 2', text: 'Prevention of stake-grinding and 51% attacks by reputation-based accountability.', image: iconFlash, number: number2, classes: 'item col-md-4' },
            { name: 'Number 3', text: 'No centralization by using a normalized reputation score.', image: iconReputation, number: number3, classes: 'item col-md-4' },
        ];
        let porDOM = por.map(c => {
            return <div className={c.classes}><div className="text-center"><img height="60" src={c.image} alt={c.name}/><div className="text"><Typography variant="subtitle1">{c.text}</Typography></div><div className="number"><img src={c.number} alt={c.name + ' Background'}/></div></div></div>
        });
        return (
            <div id="capabilities" className="my-5 container">
                <div className="container pl-0">
                    <div className="row pl-0">
                        <div className="items">
                            {porDOM}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderDevnetContent = () => {
        return (
            <div id="specifications" className="mb-5 mt-5 container">
            </div>
        );
    }
    renderSlider = () => {
        const { imageSelected } = this.state;
        const slides = [
            { name: 'Ki Device Side', image: KiDeviceSide },
            { name: 'Ki Device', image: KiDevice},
            { name: 'Ki Device Side White', image: KiDeviceWhiteSide }
        ];
        let slidesDOM = slides.map((s, index) => {
            return <div key={index} onClick={() => this.selectThisImage(s.image)} className="mr-3 cursor-pointer slide-wrapper"><img src={s.image} alt={s.name}/></div>
        });
        return (
            <div>
                <div className="slide-1">
                    <img id="slide-1-wrapper" className="mb-5 animated" height="300" src={imageSelected} alt="Ki Device Main"/>
                </div>
                <Divider className="margin-auto" style={{width: '100px', backgroundColor: '#0021f5', height: '2px'}}/>
                <div className="slide-2 vertical-align">
                    {slidesDOM}
                </div>
            </div>
        );
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <div className="container">
                    <div className="row device-wrapper">
                        <div className="col-md-8" style={{marginTop: '120px'}}>
                            <div>
                                <Typography className={classes.title + ' animated fadeInLeft'} variant="h2">The Ki Blockchain</Typography>
                                <Typography variant="h5" className={classes.subtitle + ' animated fadeIn'}>A new scalable blockchain technology</Typography>
                                <div className="mt-3">
                                    <Tabs
                                        value={value}
                                        onChange={this.handleChange}
                                        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                        >
                                        <Tab
                                            disableRipple
                                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                            label="About"
                                        />
                                        <Tab
                                            disableRipple
                                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                            label="Proof of Reputation"
                                        />
                                        <Tab
                                            disableRipple
                                            disabled={true}
                                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                            label="Mizuki Devnet"
                                        />
                                    </Tabs>
                                </div>
                                <div className="custom-content">{this.renderContents()}</div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center vertical-align">
                            <div className="mt-5">
                                <img src={BlockchainImage} alt="Ki Blockchain" height="350"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

Blockchain.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Blockchain);