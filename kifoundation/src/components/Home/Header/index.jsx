// Services
import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import { withStyles } from '@material-ui/core/styles';

// Images
// import KiDevice from '../../../assets/home/markets_illustration_h.gif';
import KiDevice from '../../../assets/ki_foundation/domo_device_side.png';
import KiBlockchain from '../../../assets/home/blockchain.png';
import KiWallet from '../../../assets/home/launch_illustration_h.gif';
import KiEcosystem from '../../../assets/home/solutions_illustration_h.gif'; 

// Components
import CustomMailChimpHome from '../../CustomComponent/CustomMailChimpHome';

import "./style.css";

const styles = {
    card: {
        // width: 200,
        // height: 230,
        // margin: "0 15px",
        maxWidth: 250,
        margin: "0 auto",
        cursor: "pointer",
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
    headerSubtitle: {
        color: "#3b426c",
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
            content: `'_'`,
            position: 'absolute',
            left: "-40px",
            top: "-7px",
            color: "#0021f5"
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
    },
    joinBtn: {
        padding: "0.5rem 1rem",
        border: "2px solid #0021f5 !important",
        color: "#fff",
        border: "none",
        '&:focus': {
            outline: "none"
        }
    },
    joinInput: {
        padding: ".37rem",
        border: "2px solid #0021f5 !important",
        '&:focus': {
            outline: "none"
        }
    },
    cardHref: {
        '&:hover': {
            textDecoration: "none"
        }
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: ''
        }
    }
    renderCards = () => {
        const { classes } = this.props;
        const cardsData = [
            { name: "Ki Device", image: KiDevice, href: "/device" },
            { name: "Ki Blockchain", image: KiBlockchain, href: "blockchain" },
            // { name: "Ki Wallet", image: KiWallet, action: "test" },
            // { name: "Ki Ecosystem", image: KiEcosystem, action: "test" }            
        ];
        let renderCardsData = cardsData.map((cd, key) => {
            return (
                <div key={key} className="col-md-4 my-4">
                    <a className={classes.cardHref} href={cd.href}>
                        <Card key={key} className={classes.card}>
                            <CardContent>
                                <div className={classes.cardImageWrapper}>
                                    <img className="card-image" src={cd.image} alt={cd.image} />
                                </div>
                                <Typography className={classes.cardTitle} variant="h6"> {cd.name} </Typography>
                                <button type="button" className={classes.cardButton} size="small">Learn More <ArrowRightAlt className={classes.arrowRight}/></button>
                            </CardContent>
                        </Card>
                    </a>
                </div>
            );
        });
        return <div className="row justify-content-center">{renderCardsData}</div>
    }
    render() {
        const { classes } = this.props;
        const url = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=d7cfb8a289";
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
                            <Typography align="center" variant="h6" className={classes.headerSubtitle}>
                                1984 should remain a book, not a reality.
                            </Typography>
                        </div>
                        <div className="col-md-12 text-center pt-4">
                            <MailchimpSubscribe 
                                url={url}
                                render={({ subscribe, status, message }) => (
                                    <CustomMailChimpHome
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                    />
                                )}
                            />
                            {/* <form action="https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=d7cfb8a289" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div className="input-group mb-3 mt-3 vertical-align">
                                    <input value={this.state.emailValue} onChange={(e)=>{this.setState({emailValue: e.target.value})}} type="email" value="" name="EMAIL" required className="form-control header-mail" style={{padding: "1.2rem", borderColor: "#0021f5", borderRadius: 0}} placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append" style={{cursor: "pointer"}}>
                                        <button onClick={this.postToMailChimp()} className="input-group-text primary-bg" style={{padding: "0.5rem", borderRadius: 0, backgroundColor: "#0021f5"}} id="basic-addon2">Join the movement</button>
                                    </div>
                                </div>
                            </form> */}
                            {/* <div className="input-group mb-3 mt-3 vertical-align">
                                <form action="https://gen.us17.list-manage.com/subscribe/post" method="POST" noValidate>
                                    <input type="hidden" name="u" value="3865106d3d479f1d2e1ec8400"/>
                                    <input type="hidden" name="id" value="d7cfb8a289"/>
                                    <label htmlFor='MERGE0'>
                                        <input
                                            className={classes.joinInput}
                                            type="email" 
                                            name="EMAIL" 
                                            id="MERGE0"
                                            value={this.state.emailValue} 
                                            onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                                            autoCapitalize="off" 
                                            autoCorrect="off"
                                        /> 
                                    </label>
                                    <input type="submit" onClick={(e) => this.postToMailChimp(e)} value="Join the movement" name="subscribe" id="mc-embedded-subscribe" className={classes.joinBtn}/>

                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                                        <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>
                                    </div>
                                </form>
                            </div> */}
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