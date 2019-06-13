const addFormTask = (el, id) => {

    let element = document.querySelector(el);

    element.innerHTML = 
    `
        <div id="form-${id}">
            <form class="form" style="width: 100%">
                <div class="form-group">
                    <input type="text" class="form-control" name="task" id="addTask" placeholder="Add Task" required>
                </div>
                <button type="submit" class="btn btn-success mr-2" id="btn-add${id}">Add Task</button>
                <button class="btn btn-secondary border-0" id="btn-cancel${id}">Cancel</button>
            </form>
        </div>
    `;

    // this.initEventsButtons('.btn', 'click', id); //Add eventos aos botões do formulário

}

const addFormProject = (el, id) => {

    let element = document.querySelector(el);

    element.innerHTML = 
    `
        <div id="form-${id}">
            <form class="form" style="width: 100%">
                <div class="form-group">
                    <input type="text" class="form-control" name="project" id="addProject" placeholder="Add Project" required>
                </div>
                <button type="submit" class="btn btn-success mr-2" id="btn-add${id}">Add Project</button>
                <button class="btn btn-secondary border-0" id="btn-cancel${id}">Cancel</button>
            </form>
        </div>
    `;

    // this.initEventsButtons('.btn', 'click', id); //Add eventos aos botões do formulário

}

export {addFormTask, addFormProject};