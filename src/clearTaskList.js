function clearTaskList(){
    const taskDisplay=document.querySelector('.task-display');
    const taskDiv=document.querySelector('.taskDiv');

    if (taskDiv!=undefined) 
        { taskDisplay.removeChild(taskDiv);
            clearTaskList()}
}

function clearPopupForm(){
    document.getElementById("addTaskForm").reset();
}

export {clearTaskList};
export {clearPopupForm};