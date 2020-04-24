import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <Link className="navbar-brand" to="/">Vanessa Emerick</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/about">about <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/projects">projects</Link>
                    <Link className="nav-item nav-link" to="/contacts">contacts</Link>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default Header;