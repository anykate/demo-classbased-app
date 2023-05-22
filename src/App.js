import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddTask: false,
            tasks: [],
        };
    }

    async componentDidMount() {
        this.setState({ tasks: await this.fetchTasks() });
    }

    async componentWillUnmount() {
        this.setState({ tasks: [] });
    }

    fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks/");

        const data = await res.json();
        return data;
    };

    fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}/`);

        const data = await res.json();
        return data;
    };

    deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}/`, {
            method: "DELETE",
        });

        this.setState({
            tasks: this.state.tasks.filter((task) => task.id !== id),
        });
    };

    toggleReminder = async (id) => {
        const taskToToggle = await this.fetchTask(id);
        const updateTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder,
        };

        const res = await fetch(`http://localhost:5000/tasks/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateTask),
        });

        const data = await res.json();

        this.setState({
            tasks: this.state.tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            ),
        });
    };

    addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });

        const data = await res.json();
        this.setState({ tasks: [...this.state.tasks, data] });
    };

    render() {
        return (
            <div className="container">
                <Header
                    showAdd={this.state.showAddTask}
                    onAdd={() =>
                        this.setState({
                            showAddTask: !this.state.showAddTask,
                        })
                    }
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {this.state.showAddTask && (
                                    <AddTask onAddTask={this.addTask} />
                                )}
                                {this.state.tasks.length > 0 ? (
                                    <Tasks
                                        tasks={this.state.tasks}
                                        onDelete={this.deleteTask}
                                        onToggle={this.toggleReminder}
                                    />
                                ) : (
                                    <h3
                                        className="task"
                                        style={{ cursor: "initial" }}
                                    >
                                        Task list - Empty !
                                    </h3>
                                )}
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;
