import PropTypes from "prop-types";
import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="btn"
                style={{ backgroundColor: this.props.color }}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {
    color: "steelblue",
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
