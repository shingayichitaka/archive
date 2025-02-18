import fs from "fs";
import { Project } from "./architecture/model/Project.js";

const projectsJSONFile = "data/projects.json";

const getProjectsObject = function () {
  return JSON.parse(fs.readFileSync(projectsJSONFile, "utf-8"));
};

const writeProjectsObjectToJson = function (projectsObj) {
  fs.writeFileSync(projectsJSONFile, JSON.stringify(projectsObj));
};

const addProject = function (projectName) {
  const projectsObj = getProjectsObject();
  const project = new Project(projectName);
  projectsObj.projects.push(project);
  writeProjectsObjectToJson(projectsObj);
};

export { getProjectsObject, writeProjectsObjectToJson, addProject };
