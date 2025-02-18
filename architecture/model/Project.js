class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectURL = `projects/${projectName
      .split(" ")
      .join("_")
      .toLowerCase()}/index.html`;
  }

  get getProjectName() {
    return this.projectName;
  }

  get getProjectURL() {
    return this.projectURL;
  }
}

export { Project };
