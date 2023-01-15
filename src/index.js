import './style.css';
import {projectsList, tasksList} from './tasks';
import {displayTasks} from './displayTaskList.js';
import {addTaskForm} from './addTaskForm.js';
import {registerNewTask, saveNewTask} from './addTaskForm.js';
import {removeAddTaskForm} from './addTaskForm.js';
import {clearTaskList} from './clearTaskList.js';
import {addProject, clearProjectsList} from './addProject.js';
import {displayProjectsList} from './displayProjectList.js';

displayTasks(tasksList);

const allTasksBtn=document.getElementById('allTasksBtn');
allTasksBtn.addEventListener('click', e=> {
    clearTaskList();
    displayTasks(tasksList);
})

const addTaskBtn=document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', e=> addTaskForm());

const popupAddTaskBtn=document.getElementById('popupAddTaskBtn');
popupAddTaskBtn.addEventListener('click', e=> 
    {   if (e.target.textContent == 'Add task') registerNewTask();
            else saveNewTask(e.target.dataset.index);
        removeAddTaskForm();
        clearTaskList();
        displayTasks(tasksList)});

displayProjectsList(projectsList);

const addProjectBtn=document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', e=> addProject());

const todayTasksBtn=document.getElementById('todayTasks');
todayTasksBtn.addEventListener('click', e => {
    clearTaskList();
    displayTasks(tasksList.filter(task=> (task.due === new Date().toISOString().slice(0, 10))&&(task.status == 'Due')));
})

const overdueTasksBtn=document.getElementById('overdueTasks');
overdueTasksBtn.addEventListener('click', e => {
    clearTaskList();
    displayTasks(tasksList.filter(task=> (task.due < new Date().toISOString().slice(0, 10))&&(task.status == 'Due')));
})

const upcomingTasksBtn=document.getElementById('upcomingTasks');
upcomingTasksBtn.addEventListener('click', e => {
    clearTaskList();
    let today=new Date();
    let theDayAfterTomorrow =  new Date();
    theDayAfterTomorrow.setDate(today.getDate() + 2);
    displayTasks(tasksList.filter(task=> (task.due >= today.toISOString().slice(0, 10))&&(task.due <= theDayAfterTomorrow.toISOString().slice(0, 10))&&(task.status == 'Due')));
})

const completedRecentlyTasksBtn=document.getElementById('completedRecentlyTasks');
completedRecentlyTasksBtn.addEventListener('click', e => {
    clearTaskList();
    displayTasks(tasksList.filter(task=> task.status == 'Complete'));
})

const closeDetailsBtn=document.getElementById('closeDetailsBtn');
closeDetailsBtn.addEventListener('click', e=> {
    const taskDetails=document.getElementById('taskDetails');
    taskDetails.classList.remove('active');

    const backgroundDisplay=document.getElementById('content');
    backgroundDisplay.classList.remove('blurred');

    const details=document.querySelector('p');
    taskDetails.removeChild(details);
})