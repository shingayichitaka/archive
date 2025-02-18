import readline from "readline";
import { addProject } from "./utils.js";

const greet = function (name) {
  return `Hello ${name}!`;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What project have you completed? ", (projectName) => {
  console.log(`Project ${projectName} --- Completed ✅`);
  addProject(projectName);
  rl.close();
});

export { greet };
