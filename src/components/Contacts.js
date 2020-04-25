import React from "react";
import '../App.css';
function Contacts() {
    return (<div className="container">
        <h1>Contacts</h1>
        <div className="container contacts">
            <a href="mailto:vavarooks123@gmail.com"><i className="fa fa-envelope fa-1x"></i> Email</a>
            <br />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Vavarooks"><i className="fa fa-github fa-1x"></i> Github</a>
            <br />
            <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/vanessa-emerick"><i className="fa fa-linkedin fa-1x"></i> Linkedin</a>
        </div>
    </div>
    )
}
export default Contacts;