import { saveNewTask } from "./addTaskForm";
import { projectsList, tasksList } from "./tasks";
const popup=document.getElementById('popup');

function editTaskForm(id){
    const popupTitle=document.querySelector('#popup>h2');
    popupTitle.textContent='Edit the task';

    const taskName=document.getElementById('task-name');
    taskName.value=`${tasksList[id]['title']}`

    const taskDetails=document.getElementById('task-details');
    taskDetails.value=`${tasksList[id]['description']}`;

    const taskDue=document.getElementById('due-date');
    taskDue.value=`${tasksList[id]['due']}`;

    const projectsDropbox=document.getElementById('project');
    for(let i=1; i<projectsList.length; i++){
        const projectOption=document.createElement('option');
        projectOption.setAttribute('value', `${projectsList[i]}`);
        if (projectsList[i]==tasksList[id]['project']) projectOption.setAttribute('selected', 'selected');
        projectOption.classList.add('projectOptions');
        projectOption.textContent=`${projectsList[i]}`;
        projectsDropbox.appendChild(projectOption);
    }

    const taskPriority=document.getElementById('priority');
    taskPriority.value=`${tasksList[id]['priority']}`;

    const saveTaskBtn=document.getElementById('popupAddTaskBtn');
    saveTaskBtn.textContent='Save task';
    saveTaskBtn.setAttribute('data-index', `${id}`);
}

export {editTaskForm};