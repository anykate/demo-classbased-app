import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            day: "",
            reminder: false,
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.text) {
            alert("Please add a task");
            return;
        }

        this.props.onAddTask({
            text: this.state.text,
            day: this.state.day,
            reminder: this.state.reminder,
        });

        this.setState({ text: "" });
        this.setState({ day: "" });
        this.setState({ reminder: false });
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <div className="form-control">
                    <label htmlFor="add_task">Task</label>
                    <input
                        type="text"
                        placeholder="Add Task"
                        id="add_task"
                        value={this.state.text}
                        onChange={(e) =>
                            this.setState({ text: e.target.value })
                        }
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="add_day">Day & Time</label>
                    <input
                        type="text"
                        placeholder="Add Day & Time"
                        id="add_day"
                        value={this.state.day}
                        onChange={(e) => this.setState({ day: e.target.value })}
                    />
                </div>
                <div className="form-control form-control-check">
                    <label htmlFor="add_reminder">Set Reminder</label>
                    <input
                        type="checkbox"
                        id="add_reminder"
                        value={this.state.reminder}
                        onChange={(e) =>
                            this.setState({ reminder: e.target.value })
                        }
                    />
                </div>
                <input
                    type="submit"
                    id="submit"
                    value="Save Task"
                    className="btn btn-block"
                />
            </form>
        );
    }
}

export default AddTask;
