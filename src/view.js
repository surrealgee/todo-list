export default class View {
    constructor() {

    };

    render = (list) => {
        const todosEl = document.querySelector('.todos');

        list.forEach(task => {
            const listItem = document.createElement('li');
            listItem.id = task.id;

            const checkboxElement = document.createElement('input');
            checkboxElement.type = 'checkbox';
            checkboxElement.checked = task.isDone;
            checkboxElement.id = task.id;

            const textElement = document.createElement('span');
            textElement.textContent = task.title;
            textElement.id = task.id;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X'

            listItem.appendChild(checkboxElement);
            listItem.appendChild(textElement);
            listItem.appendChild(deleteBtn);

            todosEl.appendChild(listItem);
        })
    };
};