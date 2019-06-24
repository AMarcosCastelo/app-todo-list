import { Utils } from '../components/Utils/Utils';
/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
// MODELS

class Task {
  constructor(name, priority, date) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    this._priority = priority;
    this._id;
    this._register = date;
  }

  loadFromJSON(json) {
    for (const name in json) {
      this[name] = json[name];
    }
  }

  static removeItemLocalStorage(keyDate) {
    if (localStorage.getItem(keyDate)) {
      localStorage.removeItem(keyDate);
    }
  }

  static getTaskStorage(date = null) {
    // Pega os dados do localStorage
    let tasksToday = [];
    if (date !== null) {
      if (localStorage.getItem(date)) {
        tasksToday = JSON.parse(localStorage.getItem(date));
      }
    } else {
      for (let i = 1; i <= 6; i += 1) {
        const date1 = Utils.dateFormat(new Date(), i);
        if (localStorage.getItem(date1)) {
          tasksToday.push(JSON.parse(localStorage.getItem(date1)));
        }
      }
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

  save(date) {
    const tasksToday = Task.getTaskStorage(date);
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

    localStorage.setItem(date, JSON.stringify(tasksToday));
  }

  remove(date) {
    // Remove do Banco de dados
    const tasks = Task.getTaskStorage(date);
    tasks.forEach((taskData, index) => {
      // Verifica se os IDs são iguais
      if (this._id === taskData._id) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem(date, JSON.stringify(tasks));
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

  get register() {
    return this._register;
  }

  set register(value) {
    this._register = value;
  }
}

export { Task };
