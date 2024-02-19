import { v4 as uuid } from 'uuid';

export default class Model {
    constructor() {
        this.list = [
            new Task("Coding"),
            new Task("Reading"),
            new Task("Exercising"),
        ];
    };

    addTask(taskName) {
        const newTask = new Task(taskName);

        this.list.push(newTask);
    };

    editTask(id, newTitle) {
       this.list = this.list.map(task => {
            return (task.id === id) ? {...task, title: newTitle} : task;
        })
    };

    removeTask(id) {
        this.list = this.list.filter(task => task.id !== id);
    };

    toggleTask(id) {
        this.list = this.list.map(task => {
            // console.log(task);
            return (task.id === id) ? {...task, isDone: !task.isDone} : task;
        })
    };    
};

class Task {
    constructor(title) {
        this.title = title,
        this.id = uuid(),
        this.isDone = false
    };
};