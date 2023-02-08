function task(title, project, description, due, priority, status){
    this.title=title,
    this.project=project,
    this.description=description,
    this.due=due,
    this.priority=priority,
    this.status=status}

let tasksList=JSON.parse(localStorage.getItem('tasksList'));
if (tasksList === null) tasksList=[];

let projectsList=JSON.parse(localStorage.getItem('projectsList'));
if (projectsList === null) projectsList=[];

export {tasksList};
export {projectsList};
export {task};