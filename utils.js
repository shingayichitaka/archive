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

const cleanProjectURL = function (projectName) {
  const newProjectName = projectName.split(" ").join("_").toLowerCase();
  return `/frontend/projects/${newProjectName}/${newProjectName}.html`;
};

const cleanProjectName = function (projectName) {
  return projectName
    .split(" ")
    .map((value) => {
      const [firstLetter, ...others] = [...value];
      return `${firstLetter.toUpperCase()}${others.join("").toLowerCase()}`;
    })
    .join(" ");
};

export {
  getProjectsObject,
  writeProjectsObjectToJson,
  addProject,
  cleanProjectURL,
  cleanProjectName,
};
