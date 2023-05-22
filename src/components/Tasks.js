import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
    render() {
        return (
            <>
                {this.props.tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={this.props.onDelete}
                        onToggle={this.props.onToggle}
                    />
                ))}
            </>
        );
    }
}

export default Tasks;
