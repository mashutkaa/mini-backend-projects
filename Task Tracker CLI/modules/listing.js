import parseData from "./parseData.js";

const listing = (filePath, filter = "all-tasks") => {
    let tasks = [];

    const data = parseData(filePath);
    if (!data) {
        return;
    } else {
        tasks = data;
    }

    let filteredTasks = [];
    switch (filter) {
        case "all-tasks":
            filteredTasks = tasks;
            break;
        case "done":
            filteredTasks = tasks.filter((task) => task.status == "done");
            break;
        case "in-progress":
            filteredTasks = tasks.filter(
                (task) => task.status == "in-progress"
            );
            break;
        case "todo":
            filteredTasks = tasks.filter((task) => task.status == "todo");
            break;
        default:
            return console.log("Error! This status is unavailable.");
    }

    if (filteredTasks.length > 0) {
        console.table(
            filteredTasks.map(
                ({ id, description, status, createdAt, updatedAt }) => ({
                    ID: id,
                    Description: description,
                    Status: status,
                    "Created At": new Date(createdAt).toLocaleString(),
                    "Updated At": updatedAt
                        ? new Date(updatedAt).toLocaleString()
                        : "Not updated",
                })
            )
        );
    } else {
        console.log("No tasks found.");
    }
};

export default listing;
