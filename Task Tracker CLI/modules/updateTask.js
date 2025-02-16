import fs from "fs";

import parseData from "./parseData.js";

const updateTask = (taskID, newDescr, filePath) => {
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

    tasks[taskIndex].description = newDescr;
    tasks[taskIndex].updatedAt = new Date();

    let dataWrite = JSON.stringify(tasks, null, 4);
    fs.writeFileSync(filePath, dataWrite);
};

export default updateTask;
