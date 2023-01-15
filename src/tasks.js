function task(title, project, description, due, priority, status){
    this.title=title,
    this.project=project,
    this.description=description,
    this.due=due,
    this.priority=priority,
    this.status=status}

let tasksList=[];

const task1= new task('Vacuum the rooms', 'Home', 'I have to vacuum the rooms', '2023-01-05', 'low', 'Due') 
tasksList.push(task1);
const task2= new task('Sweep the floor', 'Work', 'I have to sweep the floor in all the rooms of the house', '2023-01-08', 'medium', 'Due') 
tasksList.push(task2);
const task3= new task('Learn coding', '-', 'I have to continue with the Odin Project lessons on javascript', '2023-01-06', 'high', 'Due') 
tasksList.push(task3);

let projectsList=['-','Home', 'Work', 'Self-development'];

export {tasksList};
export {projectsList};
export {task};