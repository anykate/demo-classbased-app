import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Copyright &copy; 2023</p>
                <Link to="/about">About</Link>
            </footer>
        );
    }
}

export default Footer;
