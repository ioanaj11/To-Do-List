function task(title, project, description, due, priority){
    this.title=title,
    this.project=project,
    this.description=description,
    this.due=due,
    this.priority=priority}

let tasksList=[];

const task1= new task('Vacuum the rooms', '-', 'I have to vacuum the rooms', '10/11/2022', 'low') 
tasksList.push(task1);
const task2= new task('Sweep the floor', '-', 'I have to vacuum the rooms', '10/11/2022', 'medium') 
tasksList.push(task2);
const task3= new task('Learn coding', '-', 'I have to vacuum the rooms', '10/11/2022', 'high') 
tasksList.push(task3);

let projectsList=['-','Home', 'Work', 'Self-development'];

export {tasksList};
export {projectsList};
export {task};