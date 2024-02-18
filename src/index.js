import { App, Task, List } from './model.js';


const newApp = new App();


const defaultList = new List('default');
const projects = new List('projects');

newApp.addList(defaultList);
newApp.addList(projects);


const newTask1 = new Task('code');
const newTask2 = new Task('TOP lesson');
const newTask3 = new Task('reading');
const newTask4 = new Task('guitar practice');

defaultList.addTask(newTask1);
defaultList.addTask(newTask2);
projects.addTask(newTask3);
projects.addTask(newTask4);

newApp.moveTask(newTask1, projects);
newApp.moveTask(newTask4, defaultList);
newApp.moveTask(newTask3, defaultList);

newApp.removeList(projects);

console.table(newApp);
console.table(defaultList);
console.table(projects);
