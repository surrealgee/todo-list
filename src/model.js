import { v4 as uuid } from 'uuid';

class Task {
    constructor(title) {
        this.title = title,
            this.id = uuid(),
            this.isDone = false
    };

    setStatus = (value) => this.isDone = value;
}

class List {
    constructor(name) {
        this.name = name,
            this.tasks = []
        this.id = uuid();
    };

    addTask(task) {
        this.tasks.push(task);
    };

    removeTask(task) {
        this.tasks = this.tasks.filter(currentTask => currentTask.id !== task.id);
    };
}

class App {
    constructor() {
        this.lists = [];
    };

    addList(targetList) {
        this.lists.push(targetList);
    };

    removeList(targetList) {
        this.lists = this.lists.filter(currentList => currentList.id !== targetList.id);
    };

    moveTask(targetTask, targetList) {
        outer: for (let oldList of this.lists) {
            for (let task of oldList.tasks) {
                if (task.id === targetTask.id) {
                    targetList.addTask(targetTask);
                    oldList.removeTask(targetTask);
                    break outer;
                }
            }
        };
        
    };
}

export { App, Task, List };