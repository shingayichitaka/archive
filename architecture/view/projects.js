// import { getProjectsObject } from "../../utils.js";

// const { projects } = getProjectsObject();
// console.log(projects);

const projectsContainer = document.querySelector(".projects");

const getProjects = async function () {
  const res = await fetch("/data/projects.json");
  const data = await res.json();
  return data;
};

const renderProjects = async function () {
  fetch("/data/projects.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.projects.forEach((value, index) => {
        const html = `
            <div class="project">
              <h3 class="projectName">${index + 1}: ${value.projectName}</h3>
              <p class="projectURL"><a href="${value.projectURL}">Link</a></p>
            </div>
            `;
        projectsContainer.insertAdjacentHTML("beforebegin", html);
      });
    });
};

renderProjects();
