import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div>
                <h4>Version 1.0.0</h4>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

export default About;
