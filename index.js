import readline from "readline";
import { addProject } from "./utils.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What project have you completed? ", (projectName) => {
  console.log(`Project ${projectName} --- Completed ✅`);
  addProject(projectName);
  rl.close();
});
