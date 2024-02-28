export default class View {
  constructor() {
    this.root = View.getElement("#root");
    this.header = View.createElement("header");
    this.main = View.createElement("main");
    this.logo = View.createElement("h1", { textContent: "todo" });
    this.form = View.createElement("form");
    this.input = View.createElement("input", {
      type: "text",
      name: "title",
      placeholder: "Create a new todo...",
    });
    this.todoList = View.createElement("ul", { class: "todo_list" });

    this.form.appendChild(this.input);
    this.header.append(this.logo, this.form);
    this.main.append(this.todoList);
    this.root.append(this.header, this.main);

    this.temporaryTodoName = "";
    this.listenForTemporaryName();
  }

  listenForTemporaryName() {
    this.todoList.addEventListener("input", (e) => {
      if (e.target.contentEditable) {
        this.temporaryTodoName = e.target.textContent;
      }
    });
  }

  // Creates a new element using the chosen "tag" and takes a "props" object to assign attributes to the element.
  static createElement = (tag, props) => {
    const element = document.createElement(tag);

    if (props) {
      Object.keys(props).forEach((prop) => {
        if (prop === "class") {
          element.classList.add(props[prop]);
        } else {
          element[prop] = props[prop];
        }
      });
    }
    return element;
  };

  static getElement = (selector) => {
    const element = document.querySelector(selector);

    return element;
  };

  render = (list) => {
    this.todoList.innerHTML = "";

    if (list.length === 0) {
      const para = View.createElement("li", {
        textContent: "Nothing to do. Add a Task!",
      });
      this.todoList.appendChild(para);
    } else {
      list.forEach((task) => {
        const listItem = View.createElement("li", { id: task.id });

        const checkboxElement = View.createElement("input", {
          type: "checkbox",
          checked: task.isDone,
        });

        const textElement = View.createElement("span", {
          textContent: task.title,
          class: task.isDone ? "done" : "undone",
          contentEditable: true,
        });

        const deleteBtn = View.createElement("button", {
          textContent: "X",
          class: "delete",
        });

        listItem.append(checkboxElement, textElement, deleteBtn);

        this.todoList.appendChild(listItem);
      });
    }

    if (!this.main.firstChild) {
      this.main.appendChild(this.todoList);
    }
  };

  get todoText() {
    return this.input.value;
  }

  resetInput() {
    this.input.value = "";
  }

  bindAddTask(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      handler(this.input.value);

      this.resetInput();
    });
  }

  bindRemoveTask(handler) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.className === "delete") {
        handler(e.target.parentNode.id);
      }
    });
  }

  bindToggleTask(handler) {
    this.todoList.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        handler(e.target.parentNode.id);
      }
    });
  }

  bindEditTask(handler) {
    this.todoList.addEventListener("focusout", (e) => {
      if (this.temporaryTodoName) {
        handler(e.target.parentElement.id, this.temporaryTodoName);
        this.temporaryTodoName = "";
      }
    });
  }
}
