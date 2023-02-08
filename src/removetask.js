
function removeTask(taskId, tasksList){
    tasksList.splice(taskId,1); 
    localStorage.removeItem('tasksList');
    localStorage.setItem('tasksList', JSON.stringify(tasksList));   
}

export {removeTask};