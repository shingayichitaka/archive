class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectURL = `/frontend/projects/${projectName
      .split(" ")
      .join("_")
      .toLowerCase()}/${projectName.split(" ").join("_").toLowerCase()}.html`;
  }

  get getProjectName() {
    return this.projectName;
  }

  get getProjectURL() {
    return this.projectURL;
  }
}

export { Project };
