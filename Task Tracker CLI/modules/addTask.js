import fs from "fs";

import parseData from "./parseData.js";

const addTask = (task, filePath) => {
    let taskID = 1;
    let tasks = [];

    const data = parseData(filePath);
    if (!data) {
        return;
    } else {
        tasks = data;
    }

    if (tasks.length > 0) {
        taskID = Math.max(...tasks.map((task) => task.id)) + 1;
    }

    let taskObj = {
        id: taskID,
        description: task,
        status: "todo",
        createdAt: new Date(),
        updatedAt: null,
    };

    tasks.push(taskObj);

    let dataWrite = JSON.stringify(tasks, null, 4);
    fs.writeFileSync(filePath, dataWrite);

    console.log(`Task added successfully (ID: ${taskObj.id})`);
};

export default addTask;
