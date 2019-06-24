/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Task } from '../model/todoTask';
import { todayContent } from '../components/todayContent';
import { nextDaysContent } from '../components/nextDaysContent';
import { projects } from '../components/projects';
import { addFormTask, addFormProject, editTask } from '../components/addForms';
import { Utils } from '../components/Utils/Utils';

class TodoController {
  constructor() {
    // Controler;
    this.menuProjects = document.querySelector('.projects-content');
    this.colRight = document.querySelector('.content-right');
    this.initEventsButtons('.navBtn', 'click'); // Add eventos aos botões do menu do lado esquerdo;
    this.updateCount(); // Inicia a contagem em localStorage e cria as notificações
    Task.removeItemLocalStorage(Utils.dateFormat(new Date(), -1));
    // Remove qualquer task do localStorage que esteja atrasado
  }

  execBtn(textBtn) {
    // Executa os botões baseados no textBtn
    switch (textBtn) {
      case 'today': {
        todayContent(this.colRight, Utils.dateFormat(new Date()));
        const btn = document.querySelector('.btnTaskPlus');
        const { date } = btn.dataset;
        this.selectAll(date); // Carrega os dados em localStorage
        btn.addEventListener('click', () => {
          addFormTask(`.form[data-date="${date}"]`, '1');
          this.initEventsButtons('.btn', 'click', '1', date);
        });
        break;
      }

      case 'nextDays': {
        nextDaysContent(this.colRight, Utils.dateFormat(new Date()));
        const btns = document.querySelectorAll('.btnTaskPlus');
        this.selectAll();
        btns.forEach((btn) => {
          this.addEventListenerAll(btn, 'click', () => {
            const id = btn.id.replace('day', '');
            const { date } = btn.dataset;
            addFormTask(`.form[data-date="${date}"]`, id);
            this.initEventsButtons('.btn', 'click', id, date);
          });
        });
        break;
      }

      case 'projects': {
        projects(this.menuProjects);
        document.querySelector('.btnTaskPlusPro').addEventListener('click', () => {
          addFormProject('.form-projects', 'New');
          this.initEventsButtons('.btn', 'click', 'New');
        });

        break;
      }
      default:
      // do nothing
    }
  } // Fim do execBtn

  getValuesForm(formEl, _id, date) {
    const data = {};
    let isValid = true;

    [...formEl.elements].forEach((field) => {
      // Spread para pegar os elements do formulário e colocar no array
      if (['name', 'priority'].indexOf(field.name) > -1 && !field.value) {
        // Validação do form
        formEl.remove();
        isValid = false;
      }

      if (field.name === 'priority') {
        if (field.checked) {
          data[field.name] = field.value;
        }
      } else {
        data[field.name] = field.value;
      }
    });
    if (!isValid) {
      return false;
    }
    return new Task(data.name, data.priority, data.id);
  }

  initEventsButtons(class1, event = 'click', id = null, date) {
    // Add eventos aos botões

    const buttons = document.querySelectorAll(class1);

    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, event, () => {
        const textBtn = btn.id.replace('btn-', '');

        switch (textBtn) {
          case 'today':
          case 'nextDays':
          case 'projects':
            this.execBtn(textBtn);
            break;
          case 'addNew':
            this.addProjectLi('.news-projects');
            break;
          case `add${id}`:
            this.onSubmit('.form-task', id, date);
            break;
          case `cancel${id}`:
            this.removeElement(`#form-${id}`);
            break;
          case `edit${id}`:
            this.onEdit('.form-task-update', `.task-body[data-date="${date}"]`, id, date);
            break;
          default:
        }
      });
    });
  }

  removeElement(classEl) {
    const element = document.querySelector(classEl);

    element.remove();
  }

  addEventListenerAll(element, events, fn) {
    events.split(' ').forEach((event) => {
      element.addEventListener(event, fn);
    });
  }

  updateCount() {
    const date = Utils.dateFormat(new Date());
    const tasksDate = Task.getTaskStorage(date);
    const tasksNoDate = Task.getTaskStorage();
    let countToday = 0;
    let count = 0;
    if (date) {
      countToday += tasksDate.length;
    }
    tasksNoDate.forEach((task) => {
      count += task.length;
    });
    document.querySelector('.quantityTaskToday').innerHTML = countToday;
    document.querySelector('.quantityTaskDays').innerHTML = count;
  }

  selectAll(date = null) {
    if (date) {
      const tasksToday = Task.getTaskStorage(date);
      tasksToday.forEach((dataTask) => {
        const task = new Task();
        task.loadFromJSON(dataTask);
        // carrega os dados a partir de um JSON
        this.addTaskTr(`.task-body[data-date="${date}"]`, task, 1, date);
      });
    } else {
      const tasksNewsDays = Task.getTaskStorage();
      tasksNewsDays.forEach((arrayTask) => {
        arrayTask.forEach((tasks) => {
          const task = new Task();
          task.loadFromJSON(tasks);
          const date1 = task.register;
          this.addTaskTr(`.task-body[data-date="${date1}"]`, task, 1, date1);
        });
      });
    }
  }

  addTaskTr(element, dataTask, id, date) {
    const el = document.querySelector(element);
    const tr = this.getTr(dataTask, id);
    tr.dataset.task = JSON.stringify(dataTask);

    el.appendChild(tr);
    this.updateCount();
  }

  getTr(dataTask, id, el, tr = null) {
    if (tr === null) tr = document.createElement('tr');
    tr.dataset.task = JSON.stringify(dataTask);
    let classIcon = '';
    switch (dataTask.priority) {
      case 'priority1':
        classIcon = 'text-success';
        break;
      case 'priority2':
        classIcon = 'text-warning';
        break;
      case 'priority3':
        classIcon = 'text-danger';
        break;
      default:
    }
    tr.innerHTML = `
            <td class="check compact" title="Check"><i class="far fa-circle"></i></td>
            <td class="task-content">${dataTask.name}</td>
            <td class="compact"><i class="fab fa-font-awesome-flag flag-tr ${classIcon}"></i></td>
            <td class="compact delete" title="Delete"><i class="fas fa-trash-alt"></i></td>
            <td class="compact edit" title="Edit"><i class="fas fa-edit"></i></td>
        `;

    this.addEventsTaskTr(tr, id, el);
    return tr;
  }

  addProjectLi(element) {
    const el = document.querySelector(element);
    const li = document.createElement('li');

    li.innerHTML = `
            <i class="fas fa-circle mr-2"></i>
            <span>Name of project<span>
        `;

    el.appendChild(li);
  }

  addEventsTaskTr(tr, id) {
    tr.querySelector('.check').addEventListener('click', () => {
      const task = new Task();
      task.loadFromJSON(JSON.parse(tr.dataset.task));
      task.remove(task.register);
      tr.remove();
      this.updateCount();
    });

    tr.querySelector('.delete').addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      if (confirm('Deseja realmente excluir?')) {
        const task = new Task();
        task.loadFromJSON(JSON.parse(tr.dataset.task));
        task.remove(task.register);
        tr.remove();
        this.updateCount();
      }
    });

    tr.querySelector('.edit').addEventListener('click', () => {
      const json = JSON.parse(tr.dataset.task);
      const date = json._register;
      editTask(`.form[data-date="${date}"]`, id);
      const form = document.querySelector('.form-task-update');
      form.dataset.trIndex = tr.sectionRowIndex;

      // eslint-disable-next-line no-restricted-syntax
      for (const name in json) {
        // Busca os names no objeto e coloca em cada field do formulário
        let field = form.querySelector(`[name="${name.replace('_', '')}"]`);
        if (field) {
          switch (field.type) {
            case 'radio':
              field = form.querySelector(
                `[name="${name.replace('_', '')}"][value="${json[name]}"]`,
              );
              field.checked = true;
              break;
            case 'checkbox':
              field.checked = json[name];
              break;
            default:
              field.value = json[name];
          }
        }
      }
      // Adiciona eventos nos botões do formulário de edição
      // eslint-disable-next-line no-underscore-dangle
      this.initEventsButtons('.btn', 'click', id, json._register);
    });
  }

  onSubmit(formBtn, id, date) {
    const elementForm = document.querySelector(formBtn);
    elementForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const btn = elementForm.querySelector('[type="submit"]');
      btn.disabled = true;
      const values = this.getValuesForm(elementForm);
      values.register = date;
      if (values) {
        values.save(date);
      } else {
        return;
      }
      this.addTaskTr(`.task-body[data-date="${date}"]`, values, id, date);
      elementForm.reset();
      btn.disabled = false;
      elementForm.remove();
    });
  }

  onEdit(formBtn, tableEl, id, date) {
    const elementForm = document.querySelector(formBtn);
    const elementTable = document.querySelector(tableEl);
    elementForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const btn = elementForm.querySelector('[type="submit"]');

      btn.disabled = true;

      const values = this.getValuesForm(elementForm);
      values.register = date;
      const index = elementForm.dataset.trIndex;
      const tr = elementTable.rows[index];
      const taskOld = JSON.parse(tr.dataset.task);
      const result = Object.assign({}, taskOld, values);
      const task = new Task();
      task.loadFromJSON(result);
      task.save(date);
      this.getTr(task, id, tableEl, tr);
      btn.disabled = false;
      elementForm.remove();
    });
  }
}

export { TodoController };
