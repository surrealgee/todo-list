export default class Controller {
    constructor(model, view) {
        this.model = model,
        this.view = view

        this.onChange(this.model.list);
    };

    onChange(taskList) {
        this.view.render(taskList);
    };
};