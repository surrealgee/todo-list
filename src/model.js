import Task from "./task";

export default class Model {
  constructor() {
    this.list = JSON.parse(localStorage.getItem("todo_list")) || [];
  }

  #commit(list) {
    this.onTodoListChange(list);
    localStorage.setItem("todo_list", JSON.stringify(list));
  }

  addTask(taskName) {
    const newTask = new Task(taskName);

    this.list.push(newTask);

    this.#commit(this.list);
  }

  editTask(id, newTitle) {
    this.list = this.list.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );

    this.#commit(this.list);
  }

  removeTask(id) {
    this.list = this.list.filter((task) => task.id !== id);

    this.#commit(this.list);
  }

  toggleTask(id) {
    this.list = this.list.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );

    this.#commit(this.list);
  }

  bindTodoListChange(callback) {
    this.onTodoListChange = callback;
  }
}
