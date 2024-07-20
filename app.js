#!/usr/bin/env node
import inquirer from "inquirer";
let tasks = []; // array of tasks
console.log(` \n \t ////////////////  Welocome to todolist of Muneeb Ahmed  \\\\\\\\\\\\\\\\ \t \n`); //Welcome Message
let condition = true;
const todolist = async () => {
    while (condition) {
        let user_Input = await inquirer.prompt([
            {
                name: "userOperation",
                type: "list",
                message: `\n  \t Please select the operation \t \n  \n `,
                choices: ["Add Tasks", "Delete Tasks", "Upgrade tasks", "view Tasks", "exit"],
            }
        ]);
        if (user_Input.userOperation == "Add Tasks") {
            await AddTask();
        }
        else if (user_Input.userOperation == "view Tasks") {
            await ViewTask();
        }
        else if (user_Input.userOperation === "Delete Tasks") {
            await Deletetask();
        }
        else if (user_Input.userOperation === "Upgrade tasks") {
            await UpgradeTask();
        }
        else if (user_Input.userOperation == "exit") {
            console.log(` /////////////////// Thank you for using my program /////////////////////`);
            condition = false;
        }
        ;
    }
};
async function AddTask() {
    let newTask = await inquirer.prompt([
        {
            name: "new",
            message: "\n \t Please enter your new task \t \n",
            type: "input",
            validate: (input) => {
                if (input) {
                    return true;
                }
                else {
                    return `Please Enter the required value`;
                }
            }
        }
    ]);
    tasks.push(newTask.new);
    console.log("\n \t ///////////////// Your new task have been addded  :)  ////////////////////////\t");
}
async function ViewTask() {
    console.log(" \n \t ///////////////// The list of your Tasks /////////////////// \t \n");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}
async function UpgradeTask() {
    await ViewTask();
    let task_index = await inquirer.prompt([
        {
            name: "indexnumber",
            type: "input",
            message: "\n \t Please enter the task index number you want to upgrade \n",
            validate: (input) => {
                if (input) {
                    return true;
                }
                else {
                    return `Please Enter the required value`;
                }
            }
        },
        {
            name: "UpgradedTask",
            type: "input",
            message: " \t Please enter the task you want to upgrade \n \t",
        }
    ]);
    tasks[task_index.indexnumber - 1] = task_index.UpgradedTask;
    console.log(`\n \t ////////////// Your task have been Upgraded :) /////////////////////`);
}
async function Deletetask() {
    await ViewTask();
    let task_index = await inquirer.prompt([
        {
            name: "index",
            type: "input",
            message: "\n \t Please enter the task index number you want to delete\t \n",
            validate: (input) => {
                if (input) {
                    return true;
                }
                else {
                    return `Please Enter the required value`;
                }
            }
        }
    ]);
    tasks.splice(task_index.index - 1, 1);
    console.log(`\n \t //////Your task have been deleted :), to confirm please check the list by "View TASK  //////\t \n" `);
}
await todolist();
