// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import { withStyles } from '@material-ui/core/styles';

// Images
import KiDevice from '../../../assets/home/markets_illustration_h.gif';
import KiBlockchain from '../../../assets/home/exchange_illustration_h.gif';
import KiWallet from '../../../assets/home/launch_illustration_h.gif';
import KiEcosystem from '../../../assets/home/solutions_illustration_h.gif'; 

import "./style.css";

const styles = {
    card: {
        // width: 200,
        // height: 230,
        // margin: "0 15px",
        backgroundColor: "#f8fbfa",
        boxShadow: "0 9px 50px rgba(0,0,0,0.1)",
        transition: "all 0.1s ease-out",
        '&:hover': {
            boxShadow: "0 9px 50px rgba(0,0,0,0.2)",
        },
        '&:hover .card-image': {
            top: -40
        }
    },
    cardImageWrapper: {
        height: 140,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    cardButton: {
        color: "#3b426c",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: 500,
        paddingLeft: 0,
        '&:hover': {
            backgroundColor: "inherit",
            cursor: "pointer"
        },
        '&:focus': {
            backgroundColor: "inherit",
            outline: "transparent",
            cursor: "pointer"
        }
    },
    arrowRight: {
        marginLeft: "0.2rem",
        opacity: 0.2,
        height: 18
    },
    cardTitle: {
        color: "#3b426c",
        whiteSpace: "nowrap"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    headerTitle: {
        color: "#3b426c",
        position: "relative",
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
        '&::before': {
            content: `''`,
            position: 'absolute',
            width: '1.2rem',
            height: '0',
            border: '2px solid transparent',
            borderTopColor: '#0021f5',
            left: "-40px",
            bottom: "8px"
        }
    },
    headerTitleText: {
        color: "#3b426c",
        marginBottom: "3rem"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    renderCards = () => {
        const { classes } = this.props;
        const cardsData = [
            { name: "Ki Device", image: KiDevice, action: "test" },
            { name: "Ki Blockchain", image: KiBlockchain, action: "test" },
            { name: "Ki Wallet", image: KiWallet, action: "test" },
            { name: "Ki Ecosystem", image: KiEcosystem, action: "test" }            
        ];
        let renderCardsData = cardsData.map((cd, key) => {
            return (
                <div className="col-md-3 my-4">
                    <Card key={key} className={classes.card}>
                        <CardContent>
                            <div className={classes.cardImageWrapper}>
                                <img className="card-image" src={cd.image} alt={cd.image} />
                            </div>
                            <Typography className={classes.cardTitle} variant="h6"> {cd.name} </Typography>
                            <button type="button" className={classes.cardButton} size="small">Learn More <ArrowRightAlt className={classes.arrowRight}/></button>
                        </CardContent>
                    </Card>
                </div>
            );
        });
        return <div className="row">{renderCardsData}</div>
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="h-100 header-component" id="header-component">
                <div className="container custom-header-container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-5">
                            <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle}>
                                Privacy is Ki
                            </Typography>
                            <Typography align="center" variant="subtitle1" gutterBottom className={classes.headerTitleText}>
                                Building an ecosystem for a truly decentralized internet, to protect your data and share value.
                            </Typography>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12">
                            {this.renderCards()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Typography align="center" variant="h6" className={classes.cardTitle}>
                                1984 should remain a book, not a reality.
                            </Typography>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="input-group mb-3 mt-3 vertical-align">
                                <input type="text" className="form-control header-mail" style={{padding: "1.2rem", borderColor: "#0021f5", borderRadius: 0}} placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                <div className="input-group-append" style={{cursor: "pointer"}}>
                                    <span className="input-group-text primary-bg" style={{padding: "0.5rem", borderRadius: 0, backgroundColor: "#0021f5"}} id="basic-addon2">Join the movement</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Header);