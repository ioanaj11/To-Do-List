import { addProject } from "./addProject";
import { projectsList } from "./tasks";
import {clearProjectsList} from "./addProject.js";
import {clearTaskList} from './clearTaskList.js';
import {displayTasks} from './displayTaskList.js';
import {tasksList} from './tasks';

function displayProjectsList(list){
    const sideMenu=document.querySelector('.side-menu');
    const projectsDiv=document.createElement('ul');
    projectsDiv.classList.add('projectsDiv');

    for(let i=1; i<list.length; i++){
        const projectName=document.createElement('li');
        projectName.setAttribute('id', `${i}`);
                
        const projectNameBtn=document.createElement('button');
        projectNameBtn.textContent=`\u2022 ${list[i]}`;
        projectNameBtn.classList.add('projectName');

        projectName.appendChild(projectNameBtn);

        projectNameBtn.addEventListener('click', e => {
            clearTaskList();
            displayTasks(tasksList.filter(task=> task.project === `${list[i]}`));
            })

        const deleteProjectBtn=document.createElement('button');
        deleteProjectBtn.classList.add('deleteProjectBtn');
        deleteProjectBtn.setAttribute('id', `${i}`);
        const deleteProjectIcon=document.createElement('img');
        deleteProjectIcon.setAttribute('src', 'de2923577165415ec4c0.png');
        deleteProjectIcon.setAttribute('id', `${i}`);
        
        deleteProjectBtn.appendChild(deleteProjectIcon);
        projectName.appendChild(deleteProjectBtn);

        projectsDiv.appendChild(projectName);

        deleteProjectBtn.addEventListener('click', e=> 
            { deleteProject(e.target.id);
              clearProjectsList();
              displayProjectsList(projectsList);
            });
    }
    sideMenu.appendChild(projectsDiv);
  }

function deleteProject(projectId){
     for(let i=0; i<tasksList.length; i++){
        if (tasksList[i].project === projectsList[projectId]) tasksList.splice(i,1);
     }
     clearTaskList();
     displayTasks(tasksList);
     projectsList.splice(projectId,1);
  }

export {displayProjectsList};
export {deleteProject};