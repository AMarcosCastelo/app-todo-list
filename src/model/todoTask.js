/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
// MODELS

class Task {
  constructor(name, priority) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    this._priority = priority;
    this._id;
    this._register = new Date();
  }

  loadFromJSON(json) {
    for (const name in json) {
      this[name] = json[name];
    }
  }

  static getTaskStorage() {
    // Pega os dados do localStorage
    let tasksToday = [];
    if (localStorage.getItem('tasksToday')) {
      tasksToday = JSON.parse(localStorage.getItem('tasksToday'));
    }
    return tasksToday;
  }

  static getNewId() {
    let taskID = parseInt(localStorage.getItem('taskID'), 10);
    if (!taskID > 0) taskID = 0;
    taskID += 1;
    localStorage.setItem('taskID', taskID);
    return taskID;
  }

  save() {
    const tasksToday = Task.getTaskStorage();
    if (this.id > 0) {
      tasksToday.map((t) => {
        if (t._id === this._id) {
          Object.assign(t, this);
        }

        return t;
      });
    } else {
      this._id = Task.getNewId();

      tasksToday.push(this);
    }

    localStorage.setItem('tasksToday', JSON.stringify(tasksToday));
  }

  remove() {
    // Remove do Banco de dados
    const tasks = Task.getTaskStorage();
    tasks.forEach((taskData, index) => {
      // Verifica se os IDs são iguais
      if (this._id === taskData._id) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasksToday', JSON.stringify(tasks));
  }

  get name() {
    return this._name;
  }

  get priority() {
    return this._priority;
  }

  get id() {
    return this._id;
  }
}

export { Task };
