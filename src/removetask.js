import {tasksList} from "./tasks";

function removeTask(taskId, tasksList){
    tasksList.splice(taskId,1);    
}

export {removeTask};