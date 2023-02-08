import { displayProjectsList } from "./displayProjectList";
import { projectsList } from "./tasks";


function addProject(){
    const projectsDiv=document.querySelector('.projectsDiv');
    const listItem=document.createElement('button');
    listItem.textContent=`\u2022`;
    
    const inputNewProject=document.createElement('input');

    listItem.appendChild(inputNewProject);
    projectsDiv.appendChild(listItem);

    inputNewProject.addEventListener('keypress', e => {
        if (e.key === "Enter") {
            const newProject=inputNewProject.value;
            projectsList.push(newProject);
            localStorage.removeItem('projectsList');
            localStorage.setItem('projectsList', JSON.stringify(projectsList));
            clearProjectsList();
            displayProjectsList(projectsList);
    }})
}

function clearProjectsList(){
    const projectsDiv=document.querySelector('.projectsDiv');

    const sideMenu=document.querySelector('.side-menu');
    sideMenu.removeChild(projectsDiv);
}

export {addProject};
export {clearProjectsList};