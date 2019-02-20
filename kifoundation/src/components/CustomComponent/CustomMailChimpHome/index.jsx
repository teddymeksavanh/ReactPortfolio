// Services
import React from 'react';

import './style.css';

const CustomMailChimp = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });
    let formRendered;

    // Need refactoring with only one html
    if (status === "sending") {
        formRendered = 
            <div className="input-group vertical-align">
                <input style={{ borderColor: "#0021f5", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button style={{ minWidth: 170, cursor: "pointer", borderColor: "#0021f5", padding: "6px 15px", backgroundColor: "#0021f5", color: "#fff"}} onClick={submit}>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </button>
            </div>;
    } else if (status === "error") {
        formRendered = 
            <div className="input-group vertical-align">
                <input style={{ borderColor: "#e74c3c", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button style={{ minWidth: 170, cursor: "pointer", borderColor: "#e74c3c", padding: "6px 15px", backgroundColor: "#e74c3c", color: "#fff"}} onClick={submit}>
                    This email is already used.
                </button>
            </div>;
    } else if (status === "success") {
        formRendered = 
            <div className="input-group vertical-align">
                <input style={{ borderColor: "#27ae60", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button style={{ minWidth: 170, cursor: "pointer", borderColor: "#27ae60", padding: "6px 15px", backgroundColor: "#27ae60", color: "#fff"}} onClick={submit}>
                    Thank you !
                </button>
            </div>;
    } else {
        formRendered = 
            <div className="input-group vertical-align">
                <input style={{ borderColor: "#0021f5", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button style={{ minWidth: 170, cursor: "pointer", borderColor: "#0021f5", padding: "6px 15px", backgroundColor: "#0021f5", color: "#fff"}} onClick={submit}>
                    Join the movement
                </button>
            </div>;
    }
    return formRendered;
};

export default CustomMailChimp;
  