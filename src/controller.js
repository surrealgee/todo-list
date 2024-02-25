export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.onChange(this.model.list);

        this.view.bindAddTask(this.handleAddTask);
        this.view.bindRemoveTask(this.handleRemoveTask);
        this.view.bindToggleTask(this.handleToggleTask);
        this.view.bindEditTask(this.handleEditTask);

        this.model.bindTodoListChange(this.onChange);
    };

    onChange = (taskList) => {
        this.view.render(taskList);
        console.table(this.model.list);
    };

    handleAddTask = (taskName) => {
        this.model.addTask(taskName);
    }

    handleEditTask = (id, newTitle) => {
        this.model.editTask(id, newTitle);
    }

    handleRemoveTask = (id) => {
        this.model.removeTask(id);
    }

    handleToggleTask = (id) => {
        this.model.toggleTask(id);
    }
};