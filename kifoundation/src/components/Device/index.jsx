// Services
import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

// Material
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ProcessorIcon from '@material-ui/icons/Memory';
import HardDriveIcon from '@material-ui/icons/DeveloperBoard';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import WifiIcon from '@material-ui/icons/Wifi';
import ZWaveIcon from '@material-ui/icons/Waves';
import ZigbeeIcon from '@material-ui/icons/DeviceHub';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiDevice from '../../assets/ki_foundation/Black_Front.png';
import KiDeviceSide from '../../assets/ki_foundation/Black_Side.png';
import KiDeviceBlackBack from '../../assets/ki_foundation/Black_Back.png';
import KiDeviceWhiteBack from '../../assets/ki_foundation/White_Back.png';
import KiDeviceWhiteSide from '../../assets/ki_foundation/device_side_white.png';
import KiDeviceWhite from '../../assets/ki_foundation/device_front_white.png';
import DimensionsSvg from './svg/dimensions.svg';
import ColorsSvg from './svg/colors.svg';
import AudioSvg from './svg/audio.svg';
import WirelessSvg from './svg/wireless.svg';
import OperatingSvg from './svg/operating.svg';
import PowerSvg from './svg/power.svg';
import PortSvg from './svg/port.svg';
import SpeakerSvg from './svg/speaker.svg';

import './style.css';
import styles from './materialStyle.js';
import { Divider } from '@material-ui/core';

class Device extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
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
        // document.getElementById('slide-1-wrapper').classList.remove('fadeIn');
        this.setState({imageSelected: image});
        // setTimeout(() => { document.getElementById('slide-1-wrapper').classList.add('fadeIn') }, 0);
    }
    renderContents = () => {
        const { value } = this.state;
        if ( value == 1 ) {
            return this.renderCapabilitiesContent()
        } else if ( value == 2 ) {
            return this.renderSpecsContent()
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
                            The Ki Foundation has built a home device that utilises a new blockchain-based operating system and an open dApp store, both of which can never be leveraged to monitor, manipulate or monetise its occupants. Ki provides users with access to a vibrant and open ecosystem of applications and services without forcing them to relinquish control of their data.
                        </Typography>
                    </div>
                    <div className="col-md-12">
                        <Typography align="justify" variant="subtitle2">
                            Utilising Ki's new Proof of Reputation consensus mechanism and scalable new blockchain, control and governance of the Ki ecosystem and the value arising from it will be shared across all of the network’s participants.
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
    renderCapabilitiesContent = () => {
        const { classes } = this.props;
        const capabilities = [
            { name: 'Processor', icon: <ProcessorIcon className={classes.cardIcon}/> },
            { name: 'Hard Drive', icon: <HardDriveIcon className={classes.cardIcon}/> },
            { name: 'Bluetooth', icon: <BluetoothIcon className={classes.cardIcon}/> },
            { name: 'Wifi', icon: <WifiIcon className={classes.cardIcon}/> },
            { name: 'Z-wave', icon: <ZWaveIcon className={classes.cardIcon}/> },
            { name: 'Zigbee', icon: <ZigbeeIcon className={classes.cardIcon}/> }
        ];
        let capabilitiesDOM = capabilities.map(c => {
            return (<div className="col-md-4 col-sm-4 col-xs-4 px-0"><div className="pl-0 text-center mb-4">{c.icon}<Typography variant="subtitle1" className={classes.capabilitiesText} align="center">{c.name}</Typography></div></div>);
        });
        return (
            <div id="capabilities" className="my-5 container">
                <div className="container pl-0">
                    <div className="row pl-0">
                        {capabilitiesDOM}
                    </div>
                </div>
            </div>
        );
    }
    renderSpecsContent = () => {
        const specs = [
            { title: 'Dimensions & Weight', subtitle: '100mm Diam ● 162.3 mm Height', icon: DimensionsSvg },
            { title: 'colors', subtitle: 'White ● Slate fabric', icon: ColorsSvg },
            { title: 'Supported Audio Formats', subtitle: 'HE-AAC ● LC-AAC+', icon: AudioSvg },
            { title: 'Wireless', subtitle: 'Wi-fi 802.11b/g/n/ac ● Zigbee ● Z-wave ● Bluetooth®', icon: WirelessSvg }
        ];
        const specs2 = [
            { title: 'Speaker', subtitle: '360° sound with sub-woofer.', icon: SpeakerSvg },
            { title: 'Power', subtitle: '16.5V, 2A', icon: PowerSvg },
            { title: 'Ports Connectors', subtitle: 'DC power jack', icon: PortSvg },
            { title: 'Supported Operating Systems', subtitle: 'Genki OS', icon: OperatingSvg }
        ]
        let specsDOM = specs.map(s => {
            return (
                <li>
                    <div className="list-icons--icon vertical-align">
                        <img src={s.icon} alt={s.title}/>
                    </div>
                    <div>
                        <h3>{s.title}</h3>
                        <p className="mb-0">{s.subtitle}</p>
                    </div>
                </li>
            );
        });
        let specsDOM2 = specs2.map(s => {
            return (
                <li>
                    <div className="list-icons--icon vertical-align">
                        <img src={s.icon} alt={s.title}/>
                    </div>
                    <div>
                        <h3>{s.title}</h3>
                        <p className="mb-0">{s.subtitle}</p>
                    </div>
                </li>
            );
        });
        return (
            <div id="specifications" className="mb-5 mt-5 container">
                <section className="genki-specs p-0" id="genki-specs">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 pl-0 custom-specdom">
                                <ul className="boxshadow xd list-icons p-0 no-list-style">
                                    {specsDOM}
                                </ul>
                            </div>
                            <div className="pr-0 col-md-6 col-sm-12 col-xs-12 custom-specdom">
                                <ul className="boxshadow xd list-icons p-0 no-list-style">
                                    {specsDOM2}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    renderSlider = () => {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            dots: true,
            speed: 500
        };
        const { imageSelected } = this.state;
        const slides = [
            { name: 'Ki Device Side', image: KiDeviceSide },
            { name: 'Ki Device', image: KiDevice},
            { name: 'Ki Device Back', image: KiDeviceBlackBack },
            { name: 'Ki Device Side White', image: KiDeviceWhiteSide },
            { name: 'Ki Device White', image: KiDeviceWhite},
            { name: 'Ki Device Back White', image: KiDeviceWhiteBack }
        ];
        let slidesDOM = slides.map((s, index) => {
            return <div key={index}><img className="cursor-pointer" onClick={() => this.selectThisImage(s.image)} src={s.image} alt={s.name}/></div>
        });
        return (
            <div>
                <div className="slide-1">
                    <img id="slide-1-wrapper" className="mb-5 animated" height="300" src={imageSelected} alt="Ki Device Main"/>
                </div>
                <Divider className="margin-auto" style={{width: '100px', backgroundColor: '#0021f5', height: '2px'}}/>
                <div className="slide-2">
                    <Slider {...settings}>
                        {slidesDOM}
                    </Slider>
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
                        <div className="d-block d-md-none col-md-6 text-center vertical-align">
                            <div className="mt-5">
                                {this.renderSlider()}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <Typography className={classes.title + ' animated fadeInLeft'} variant="h2">The Ki Device</Typography>
                                <Typography variant="h5" className={classes.subtitle + ' animated fadeIn'}>A decentralized smart Homepod</Typography>
                                <div className="mt-3">
                                    <Tabs
                                        value={value}
                                        centered
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
                                            label="Capabilities"
                                        />
                                        <Tab
                                            disableRipple
                                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                            label="Specifications"
                                        />
                                    </Tabs>
                                </div>
                                <div className="custom-content">{this.renderContents()}</div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-6 text-center vertical-align">
                            <div className="mt-5">
                                {this.renderSlider()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

Device.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Device);