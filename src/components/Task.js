import React from "react";
import { FaTimes } from "react-icons/fa";

class Task extends React.Component {
    render() {
        return (
            <div
                className={`task ${this.props.task.reminder ? "reminder" : ""}`}
                onDoubleClick={() => this.props.onToggle(this.props.task.id)}
            >
                <h3>
                    {this.props.task.text}
                    <FaTimes
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => this.props.onDelete(this.props.task.id)}
                    />
                </h3>
                <p>{this.props.task.day}</p>
            </div>
        );
    }
}

export default Task;
