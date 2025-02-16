#!/usr/bin/env node

import { program } from "commander";
import addTask from "./modules/addTask.js";
import updateTask from "./modules/updateTask.js";
import deleteTask from "./modules/deleteTask.js";
import marking from "./modules/marking.js";
import listing from "./modules/listing.js";

const filePath = "./data/tasks.json";

program.version("1.0.0").description("My Node Task Tracker CLI");

program
    .command("add <task...>")
    .description("Add your task")
    .action((task) => {
        task = task.join(" ");
        addTask(task, filePath);
    });

program
    .command("update <id> <newTask...>")
    .description("Update your task by ID")
    .action((id, newTask) => {
        newTask = newTask.join(" ");
        updateTask(id, newTask, filePath);
    });

program
    .command("delete <id>")
    .description("Delete your task by ID")
    .action((id) => {
        deleteTask(id, filePath);
    });

program
    .command("mark-in-progress <id>")
    .description('Marking status "in-progress" for your task by ID')
    .action((id) => {
        marking(id, "in-progress", filePath);
    });

program
    .command("mark-done <id>")
    .description('Marking status "done" for your task by ID')
    .action((id) => {
        marking(id, "done", filePath);
    });

program
    .command("list [filter]")
    .description("Listing tasks")
    .action((filter) => {
        listing(filePath, filter);
    });

program.parse(process.argv);
