import { v4 as uuid } from "uuid";

export default class Task {
  constructor(title) {
    this.title = title;
    this.id = uuid();
    this.isDone = false;
  }
}
