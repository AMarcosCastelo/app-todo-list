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
    this.updateCount();
  }

  execBtn(textBtn) {
    // Executa os botões baseados no textBtn
    switch (textBtn) {
      case 'today': {
        todayContent(this.colRight, Utils.dateFormat(new Date()));
        this.selectAll(); // Carrega os dados em localStorage
        document.querySelector('.btnTaskPlus').addEventListener('click', () => {
          addFormTask('.taskTodayBody', '1');
          this.initEventsButtons('.btn', 'click', '1');
        });
        break;
      }

      case 'nextDays': {
        nextDaysContent(this.colRight, Utils.dateFormat(new Date()));
        const btns = document.querySelectorAll('.btnTaskPlus');
        btns.forEach((btn) => {
          this.addEventListenerAll(btn, 'click', () => {
            const id = btn.id.replace('day', '');
            addFormTask(`.form-${id}`, id);
            this.initEventsButtons('.btn', 'click', id);
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

  getValuesForm(formEl, _id) {
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

  initEventsButtons(class1, event = 'click', id = null, form) {
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
            this.onSubmit('.form-task', id);
            break;
          case `cancel${id}`:
            this.removeElement(`#form-${id}`);
            break;
          case `edit${id}`:
            this.onEdit('.form-task-update', `.task-body${id}`, id);
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

  selectAll() {
    const tasksToday = Task.getTaskStorage();
    tasksToday.forEach((dataTask) => {
      const task = new Task();
      task.loadFromJSON(dataTask);
      // carrega os dados a partir de um JSON
      this.addTaskTr('.task-body1', task, 1);
    });
  }

  addTaskTr(element, dataTask, id) {
    const el = document.querySelector(element);
    const tr = this.getTr(dataTask, id, el);
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

  updateCount() {
    const tasks = Task.getTaskStorage();
    document.querySelector('.quantityTask').innerHTML = tasks.length;
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

  addEventsTaskTr(tr, id, el) {
    tr.querySelector('.check').addEventListener('click', () => {
      const task = new Task();
      task.loadFromJSON(JSON.parse(tr.dataset.task));
      task.remove();
      tr.remove();
      this.updateCount();
    });

    tr.querySelector('.delete').addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      if (confirm('Deseja realmente excluir?')) {
        const task = new Task();
        task.loadFromJSON(JSON.parse(tr.dataset.task));
        task.remove();
        tr.remove();
        this.updateCount();
      }
    });

    tr.querySelector('.edit').addEventListener('click', () => {
      const json = JSON.parse(tr.dataset.task);
      editTask('.taskTodayBody', 1);
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
      this.initEventsButtons('.btn', 'click', '1');
    });
  }

  onSubmit(formBtn, _id) {
    const elementForm = document.querySelector(formBtn);
    elementForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const btn = elementForm.querySelector('[type="submit"]');
      btn.disabled = true;
      const values = this.getValuesForm(elementForm);
      if (values) {
        values.save();
      } else {
        return;
      }
      this.addTaskTr(`.task-body${_id}`, values, _id);
      elementForm.reset();
      btn.disabled = false;
      elementForm.remove();
    });
  }

  onEdit(formBtn, tableEl, _id) {
    const elementForm = document.querySelector(formBtn);
    const elementTable = document.querySelector(tableEl);

    elementForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const btn = elementForm.querySelector('[type="submit"]');

      btn.disabled = true;

      const values = this.getValuesForm(elementForm);
      const index = elementForm.dataset.trIndex;
      const tr = elementTable.rows[index];
      const taskOld = JSON.parse(tr.dataset.task);
      const result = Object.assign({}, taskOld, values);
      const task = new Task();
      task.loadFromJSON(result);
      task.save();
      this.getTr(task, _id, tableEl, tr);
      btn.disabled = false;
      elementForm.remove();
    });
  }
}
export { TodoController };
