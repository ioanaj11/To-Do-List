import {projectsList, tasksList} from './tasks';
import {task} from './tasks';
import {clearPopupForm} from './clearTaskList.js';

const backgroundDisplay=document.getElementById('content');
const popup=document.getElementById('popup');

function addTaskForm(){
    const projectsDropbox=document.getElementById('project');
    for(let i=1; i<projectsList.length; i++){
        const projectOption=document.createElement('option');
        projectOption.setAttribute('value', `${projectsList[i]}`);
        projectOption.classList.add('projectOptions');
        projectOption.textContent=`${projectsList[i]}`;

        projectsDropbox.appendChild(projectOption);
    }

    backgroundDisplay.classList.add('blurred');
    popup.classList.add('active');

    const removeAddTaskBtn=document.querySelector('.cancelAddTaskBtn');
    removeAddTaskBtn.addEventListener('click', e=>removeAddTaskForm());
    }

function removeAddTaskForm(){
    popup.classList.remove('active');
    backgroundDisplay.classList.remove('blurred');
    clearPopupForm();
    reinitiateProjectList();
}

function registerNewTask(){
    const taskName=document.getElementById('task-name').value;
    const taskDetails=document.getElementById('task-details').value;
    const taskDue=document.getElementById('due-date').value;
    const taskProject=document.getElementById('project').value;
    const taskPriority=document.getElementById('priority').value;

    const newTask=new task(taskName, taskProject, taskDetails, taskDue, taskPriority);
    tasksList.push(newTask);
}

function reinitiateProjectList(){
    const projectsDropbox=document.getElementById('project');
    const projectOptions=document.querySelectorAll('.projectOptions');

    projectOptions.forEach(projectOption => projectsDropbox.removeChild(projectOption));
}

export {addTaskForm};
export {registerNewTask};
export {removeAddTaskForm};