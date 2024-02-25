export default class View {
    constructor() {
        this.root = this.getElement('#root');
        this.header = this.createElement('header');
        this.main = this.createElement('main');
        this.logo = this.createElement('h1', { textContent: 'todo' });
        this.form = this.createElement('form');
        this.input = this.createElement('input', { type: 'text', name: 'title', placeholder: 'Create a new todo...' });

        this.form.appendChild(this.input);
        this.header.append(this.logo, this.form);
        this.root.append(this.header, this.main);

    };

    // Creates a new element using the chosen "tag" and takes a "props" object to assign attributes to the element.
    createElement(tag, props) {
        const element = document.createElement(tag);

        for (let prop in props) {
            if (prop === 'class') {
                element.classList.add(props[prop])
            } else {
                element[prop] = props[prop];
            }
        }
        return element;
    };

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    };

    render = (list) => {
        const todoList = this.createElement('ul');

        this.main.innerHTML = '';

        this.main.appendChild(todoList);

        if (list.length === 0) {
            const para = this.createElement('li', { textContent: 'Nothing to do. Add a Task!' })
            todoList.appendChild(para);
        } else {
            list.forEach(task => {
                const listItem = this.createElement('li', { id: task.id });

                const checkboxElement = this.createElement('input',
                    {
                        type: 'checkbox',
                        checked: task.isDone,
                    });

                const textElement = this.createElement('span',
                    {
                        textContent: task.title,
                        class: task.isDone ? "done" : "undone",
                    });

                const deleteBtn = this.createElement('button', { textContent: 'X' });

                listItem.append(checkboxElement, textElement, deleteBtn);

                todoList.appendChild(listItem);
            })
        }
    };

    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    bindAddTask(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            handler(this.input.value);

            this._resetInput();

        })
    }
};