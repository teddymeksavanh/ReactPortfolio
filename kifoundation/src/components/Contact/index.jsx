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

// Components
import CustomMailChimpContact from '../CustomComponent/CustomMailChimpContact';

import './style.css';

const styles = {
    title: {
        marginBottom: "1rem",
        color: "#3b426c"
    },
    subtitle: {
        marginBottom: "1rem",
        color: "#3b426c"
    }
};

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        const url = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=d7cfb8a289";
        return (
            <div className="pt-5 h-100 contact-page">
                <div className="container px-4 pt-5">
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-6">
                            <Typography className={classes.title} align="center" variant="h2">
                                Contact Us
                            </Typography>
                            <Typography className={classes.subtitle} align="center" variant="subtitle1">
                                Got a question ? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </Typography>
                            {/* <form action="mailto:teddymeksavanh@yahoo.fr" method="post" enctype="text/plain">
                                <div className="form-group">
                                    <label for="contact-name">Name*</label>
                                    <input type="text" id="contact-name" className="form-control no-border" placeholder="John Smith"/>
                                </div>
                                <div className="form-group">
                                    <label for="contact-email">Email address*</label>
                                    <input type="email" className="form-control no-border" id="contact-email" aria-describedby="emailHelp" placeholder="Johnsmith@gmail.com"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="contact-message">Message*</label>
                                    <textarea class="form-control" id="contact-message" rows="3"></textarea>
                                </div>
                                <div className="vertical-align pt-3">
                                    <button type="submit" className="btn btn-primary primary-bg primary-bg-hover no-border contact-submit-btn">Submit</button>
                                </div>
                            </form> */}
                            <div className="vertical-align pt-3">
                                <a a href="mailto:contact@gen.ki"><button className="btn btn-primary primary-bg primary-bg-hover no-border contact-submit-btn">Send an email</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Contact);