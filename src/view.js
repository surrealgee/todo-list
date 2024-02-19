export default class View {
    constructor() {}

    render = (list) => {
        const rootEl = document.querySelector('body');
        rootEl.innerHTML = '';

        const listEl = document.createElement('ul');

        list.forEach(task => {
            const taskEl = document.createElement('li');

            const checkboxEl = document.createElement('input');
            checkboxEl.type = "checkbox";
            checkboxEl.checked = task.isDone;

            listEl.appendChild(checkboxEl);


            taskEl.textContent = task.title;
            taskEl.id = task.id

            listEl.appendChild(taskEl);
        })

        rootEl.appendChild(listEl);
    };
};