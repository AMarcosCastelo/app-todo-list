import {Todo} from '../model/todoTask';
import {todayContent} from '../components/todayContent';
import {nextDaysContent} from '../components/nextDaysContent';
import {projects} from '../components/projects';
import {addFormTask, addFormProject} from '../components/addForms';
import {Utils} from '../components/Utils/Utils';

// CONTROLLER

class TodoController {

    constructor() {

        this.menuProjects = document.querySelector('.projects-content');
        this.colRight = document.querySelector('.content-right');
        this.initEventsButtons('.navBtn', 'click'); //Add eventos aos botões do menu do lado esquerdo

    }

    execBtn(textBtn) {
        switch(textBtn) {
            case 'today': {
                todayContent(this.colRight, Utils.dateFormat(new Date()));
                document.querySelector('.btnTaskPlus').addEventListener('click', e =>{
                    addFormTask('.taskTodayBody', '1');
                    this.initEventsButtons('.btn', 'click', '1');
                });
                break;
            }

            case 'nextDays': {

                nextDaysContent(this.colRight, Utils.dateFormat(new Date()));
                let btns = document.querySelectorAll('.btnTaskPlus');
                btns.forEach((btn, i) => {
                    
                    this.addEventListenerAll(btn, 'click', e =>{
                        
                        let id = btn.id.replace('day', '');
                        addFormTask(`.form-${id}`, id);
                        this.initEventsButtons('.btn', 'click', id);

                    });

                });
                break;

            }

            case 'projects' : {

                projects(this.menuProjects);
                document.querySelector('.btnTaskPlusPro').addEventListener('click', e => {
                    addFormProject('.form-projects' , 'New');
                    this.initEventsButtons('.btn', 'click', 'New');
                });
                break;       

            }

        }
    }
    
    initEventsButtons(class1, event='click', _id=null) { //Add eventos aos botões 

        let buttons = document.querySelectorAll(class1);
        
        buttons.forEach( (btn, index) => {

            this.addEventListenerAll(btn, event, e => {

                let textBtn = btn.id.replace('btn-', '');

                e.preventDefault();

                if(textBtn == 'today' || textBtn == 'nextDays' || textBtn == 'projects') {

                    this.execBtn(textBtn);

                } else if(textBtn == 'addNew'){   
                    
                    this.addProjectLi('.news-projects');

                } else if(textBtn == `add${_id}`) {

                    this.addTaskTr(`.task-body${_id}`);

                } else if( textBtn == `cancel${_id}`) {

                    this.removeElement(`#form-${_id}`);

                }

            });

        });

    }

    removeElement(classEl) {

        let element = document.querySelector(classEl);

        element.remove();

    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach( event => {

            element.addEventListener(event, fn);

        });

    }

    addTaskTr(element) {

        let el = document.querySelector(element);
        let tr = document.createElement('tr');

        tr.innerHTML = 
        `
            <td class="check compact" title="Check"><i class="far fa-circle"></i></td>
            <td class="task-content">Texto aqui</td>
            <td class="compact delete" title="Delete"><i class="fas fa-trash-alt"></i></td>
            <td class="compact edit" title="Edit"><i class="fas fa-edit"></i></td>
        `;

        el.appendChild(tr);
        this.addEventsTaskTr(tr);

    }

    addProjectLi(element) {

        let el = document.querySelector(element);
        let li = document.createElement('li');

        li.innerHTML =
        `
            <i class="fas fa-circle mr-2"></i>
            <span>Name of project<span>
        `;

        el.appendChild(li);

    }

    addEventsTaskTr(tr) {

        tr.querySelector('.check').addEventListener('click', e => {

            tr.remove();

        });

        tr.querySelector('.delete').addEventListener('click', e => {

            if(confirm('Deseja realmente excluir?')){
                
                tr.remove();
                
            }

        });

        tr.querySelector('.edit').addEventListener('click', e => {

            //Fazer algo

        });

    }

}

export {TodoController};