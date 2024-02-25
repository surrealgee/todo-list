export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.onChange(this.model.list);

        this.view.bindAddTask(this.handleAddTask);
    };

    onChange(taskList) {
        this.view.render(taskList);
    };

    handleAddTask = (taskName) => {
        this.model.addTask(taskName);

        this.onChange(this.model.list);
    }

    handleEditTask = (id, newTitle) => {
        this.model.handleEditTask(id, newTitle);

        this.onChange(this.model.list);
    }

    handleRemoveTask = (id) => {
        this.model.removeTask(id);

        this.onChange(this.model.list);
    }

    handleToggleTask = (id) => {
        this.model.toggleTask(id);

        this.onChange(this.model.list);
    }
};