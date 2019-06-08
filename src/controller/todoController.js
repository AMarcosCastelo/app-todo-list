import {Todo} from '../model/todoTask';
import {todayContent} from '../components/todayContent';
import {Utils} from '../components/Utils/Utils';

// CONTROLLER

class TodoController {

    constructor() {

        this.colRight = document.querySelector('.content-right');
        this.initEventsButtons('.navBtn');

    }

    execBtn(textBtn) {
        switch(textBtn) {
            case 'today': {
                todayContent(this.colRight, Utils.dateFormat(new Date()));
                document.querySelector('.btnTodayPlus').addEventListener('click', e =>{
                    this.addFormTask('.today-body');
                });
                break;
            }

            case 'nextDays': {

                console.log('nextDays');
                break;

            }

            case 'projects' : {

                console.log('projects');
                break;       

            }
        }
    }

    addFormTask(el) {

        let element = document.querySelector(el);

        element.innerHTML = 
        `
            <form class="form" style="width: 100%">
                <div class="form-group">
                    <input type="text" class="form-control" name="task" id="addTask" placeholder="Add Task" required>
                </div>
                <button type="submit" class="btn btn-success mr-2" id="btn-add">Add Task</button>
                <button class="btn btn-secondary border-0" id="btn-cancel">Cancel</button>
            </form>
        `;

        this.initEventsButtons('.btn');

    }

    initEventsButtons(class1, event='click') {

        let buttons = document.querySelectorAll(class1);
        
        buttons.forEach( (btn, index) => {

            this.addEventListenerAll(btn, event, e => {

                let textBtn = btn.id.replace('btn-', '');

                if(textBtn == 'today' || textBtn == 'nextDays' || textBtn == 'projects') {

                    this.execBtn(textBtn);

                } else if(textBtn == 'add') {

                    e.preventDefault();
                    this.addTaskTr('.tableToday');

                } else if( textBtn == 'cancel') {

                    this.removeElement('.form')

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