import { v4 as uuid } from 'uuid';

export default class Model {
    constructor() {
        this.list = JSON.parse(localStorage.getItem('todo_list')) || [];
    };

    _commit(list) {
        this.onTodoListChange(list);
        localStorage.setItem('todo_list', JSON.stringify(list));
    }

    addTask(taskName) {
        const newTask = new Task(taskName);

        this.list.push(newTask);

        this._commit(this.list);
    };

    editTask(id, newTitle) {
        this.list = this.list.map(task => {
            return (task.id === id) ? { ...task, title: newTitle } : task;
        })

        this._commit(this.list);
    };

    removeTask(id) {
        this.list = this.list.filter(task => task.id !== id);

        this._commit(this.list);
    };

    toggleTask(id) {
        this.list = this.list.map(task => {
            return (task.id === id) ? { ...task, isDone: !task.isDone } : task;
        })

        this._commit(this.list);
    };

    bindTodoListChange(callback) {
        this.onTodoListChange = callback;
    }
};

class Task {
    constructor(title) {
        this.title = title,
            this.id = uuid(),
            this.isDone = false
    };
};