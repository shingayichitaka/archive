import { cleanProjectName, cleanProjectURL } from "../../utils.js";

class Project {
  constructor(projectName) {
    this.projectName = `${cleanProjectName(projectName)}`;
    this.projectURL = `${cleanProjectURL(projectName)}`;
  }

  get getProjectName() {
    return this.projectName;
  }

  get getProjectURL() {
    return this.projectURL;
  }
}

export { Project };
