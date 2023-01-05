import './style.css';
import {projectsList, tasksList} from './tasks';
import {displayTasks} from './displayTaskList.js';
import {addTaskForm} from './addTaskForm.js';
import {registerNewTask} from './addTaskForm.js';
import {removeAddTaskForm} from './addTaskForm.js';
import {clearTaskList} from './clearTaskList.js';
import {addProject} from './addProject.js';
import {displayProjectsList} from './displayProjectList.js'

displayTasks(tasksList);

const addTaskBtn=document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', e=> addTaskForm());

const popupAddTaskBtn=document.getElementById('popupAddTaskBtn');
popupAddTaskBtn.addEventListener('click', e=> 
    {registerNewTask();
    removeAddTaskForm();
    clearTaskList();
    displayTasks(tasksList)});

displayProjectsList(projectsList);

const addProjectBtn=document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', e=> addProject());