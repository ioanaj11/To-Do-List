import redflag from './assets/images/redflag.png';
import orangeflag from './assets/images/orangeflag.png';
import yellowflag from './assets/images/yellowflag.png';
import binImg from './assets/images/bin.png';
import detailsImg from './assets/images/information.png'
import editImg from './assets/images/edit.png';
import { task, tasksList } from './tasks';
import { removeTask } from './removetask';
import { clearTaskList } from './clearTaskList';
import {editTaskForm} from './editTaskForm.js';
import {removeAddTaskForm} from './addTaskForm.js';

function displayTasks(givenTasksList){
    for(let i=0; i<givenTasksList.length; i++){
        const taskDisplay=document.querySelector('.task-display');
        const taskDiv=document.createElement('div');
        taskDiv.setAttribute('id', `${i}`);
        taskDiv.classList.add('taskDiv');

        const completeOrNot=document.createElement('button');
        completeOrNot.textContent=`${givenTasksList[i].status}`;
        completeOrNot.setAttribute('id', `${i}`)
        completeOrNot.classList.add(`${givenTasksList[i].status}`);

        completeOrNot.addEventListener('click', e=> {
            if (completeOrNot.textContent=='Due') {
                    completeOrNot.classList.add('Complete');
                    completeOrNot.classList.remove('Due');
                    completeOrNot.textContent='Complete';
                    givenTasksList[i].status='Complete';}
                else {
                    completeOrNot.classList.remove('Complete');
                    completeOrNot.classList.add('Due');
                    completeOrNot.textContent='Due';
                    givenTasksList[i].status='Due';}
            
        })

        taskDiv.appendChild(completeOrNot);

        const flag=document.createElement('img');
        flag.classList.add('flagImg');
        switch(givenTasksList[i]['priority']){
            case 'low':
                flag.setAttribute('src','a78d26d4f76f658f1246.png');
                flag.setAttribute('title', 'low');
                break;
            case 'medium':
                flag.setAttribute('src','62b55875c1540e2c642f.png');
                flag.setAttribute('title', 'medium');
                break;
            default:
                flag.setAttribute('src','720702197f513433d6a6.png');
                flag.setAttribute('title', 'high');
        }

        taskDiv.appendChild(flag);
        
        const taskName=document.createElement('h4');
        taskName.textContent=`${givenTasksList[i]['title']}`;
        taskDiv.appendChild(taskName);

        const projectName=document.createElement('h4');
        projectName.textContent=`${givenTasksList[i]['project']}`;
        taskDiv.appendChild(projectName);

        const due=document.createElement('h4');
        due.textContent=`${givenTasksList[i]['due']}`;
        taskDiv.appendChild(due);

        const detailsBtn=document.createElement('button');
        const detailsIcon=document.createElement('img');
        detailsBtn.setAttribute('id', `${i}`);
        detailsIcon.setAttribute('id', `${i}`);
        detailsIcon.setAttribute('src', '5557f95abde96def3fa7.png');
        detailsIcon.setAttribute('title', 'See details');

        detailsBtn.appendChild(detailsIcon);
        taskDiv.appendChild(detailsBtn);

        detailsBtn.addEventListener('click', e=>
            {const details=document.createElement('p');
            details.textContent=`${tasksList[e.target.id]['description']}`
              
            const taskDetails=document.getElementById('taskDetails');
            taskDetails.classList.add('active');

            taskDetails.appendChild(details);

            const backgroundDisplay=document.getElementById('content');
            backgroundDisplay.classList.add('blurred');
            })

        const editBtn=document.createElement('button');
        const editIcon=document.createElement('img');
        editBtn.setAttribute('id', `${i}`);
        editIcon.setAttribute('id', `${i}`);
        editIcon.setAttribute('src', '6f6481dd783e4c5d194e.png');
        editIcon.setAttribute('title', 'Edit');

        editBtn.appendChild(editIcon);
        taskDiv.appendChild(editBtn);

        editBtn.addEventListener('click', e=>{
            const backgroundDisplay=document.getElementById('content');
            const popup=document.getElementById('popup');

            backgroundDisplay.classList.add('blurred');
            popup.classList.add('active');
            
            editTaskForm(e.target.id);

            const removeAddTaskBtn=document.querySelector('.cancelAddTaskBtn');
            removeAddTaskBtn.addEventListener('click', e=>removeAddTaskForm());
        })

        const deleteBtn=document.createElement('button');
        const deleteIcon=document.createElement('img');
        deleteIcon.setAttribute('src', 'de2923577165415ec4c0.png');
        deleteIcon.setAttribute('title', 'Delete');
        deleteIcon.setAttribute('id',`${i}`);
        deleteIcon.classList.add('deleteTaskBtn');

        deleteIcon.addEventListener('click', e=>
            {removeTask(e.target.id, givenTasksList);
             clearTaskList();
             displayTasks(givenTasksList)});

        deleteBtn.appendChild(deleteIcon);
        taskDiv.appendChild(deleteBtn);

        taskDisplay.appendChild(taskDiv);

   }
   }
export {displayTasks};