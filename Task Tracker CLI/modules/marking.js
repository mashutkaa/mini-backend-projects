import fs from "fs";

import parseData from "./parseData.js";

const marking = (taskID, newStatus, filePath) => {
    taskID = Number(taskID);
    let tasks = [];

    const data = parseData(filePath);
    if (!data) {
        return;
    } else {
        tasks = data;
    }

    let taskIndex = tasks.findIndex((task) => task.id === taskID);

    if (taskIndex === -1) {
        return console.log("Error! Task hasn`t been created yet.");
    }

    if (tasks[taskIndex].status == "done") {
        return console.log("This task has already done.");
    }

    tasks[taskIndex].status = newStatus;
    tasks[taskIndex].updatedAt = new Date();

    let dataWrite = JSON.stringify(tasks, null, 4);
    fs.writeFileSync(filePath, dataWrite);
};

export default marking;
