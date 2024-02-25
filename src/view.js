export default class View {
    constructor() {
        this.root = this.getElement('#root');
        this.header = this.createElement('header');
        this.main = this.createElement('main');
        this.logo = this.createElement('h1', { textContent: 'todo' });
        this.form = this.createElement('form');
        this.input = this.createElement('input', { type: 'text', name: 'title', placeholder: 'Create a new todo...' });
        this.todoList = this.createElement('ul', { class: 'todo_list' });

        this.form.appendChild(this.input);
        this.header.append(this.logo, this.form);
        this.main.append(this.todoList);
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
        this.todoList.innerHTML = '';

        if (list.length === 0) {
            const para = this.createElement('li', { textContent: 'Nothing to do. Add a Task!' })
            this.todoList.appendChild(para);
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

                const deleteBtn = this.createElement('button', { textContent: 'X', class: 'delete' });

                listItem.append(checkboxElement, textElement, deleteBtn);

                this.todoList.appendChild(listItem);
            })
        }

        if (!this.main.firstChild) {
            this.main.appendChild(todoList);
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

    bindRemoveTask(handler) {
        this.todoList.addEventListener('click', (e) => {
            if (e.target.className === 'delete') {
                handler(e.target.parentNode.id);
            }
        })
    }

    bindToggleTask(handler) {
        this.todoList.addEventListener('change', (e) => {
            console.log(e.target.type);
            if (e.target.type === 'checkbox') {
                handler(e.target.parentNode.id);
            }
        })
    }
};