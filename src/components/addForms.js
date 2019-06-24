const addFormTask = (el, id) => {
  const element = document.querySelector(el);

  element.innerHTML = `
        <div id="form-${id}">
            <form class="form-task" style="width: 100%">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" id="addTask" placeholder="Add Task">
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex mb-3">
                      <div class="form-check mr-3">
                          <input class="form-check-input" name="priority" type="radio" value="priority1" id="priority1">
                          <label class="form-check-label" for="priority1">
                            <i class="fab fa-font-awesome-flag text-success"></i>
                          </label>
                      </div>
                      <div class="form-check mr-3">
                          <input class="form-check-input" name="priority" type="radio" value="priority2" id="priority2">
                          <label class="form-check-label" for="priority2">
                            <i class="fab fa-font-awesome-flag text-warning"></i>
                          </label>
                      </div>
                      <div class="form-check">
                          <input class="form-check-input" name="priority" type="radio" value="priority3" id="priority3">
                          <label class="form-check-label" for="priority3">
                            <i class="fab fa-font-awesome-flag text-danger"></i>
                          </label>
                      </div>
                  </div>
                  <div>
                      <button type="submit" class="btn btn-success mr-2" id="btn-add${id}">Add Task</button>
                      <button class="btn btn-secondary border-0" id="btn-cancel${id}">Cancel</button>
                  </div>
                </div>
            </form>
        </div>
    `;
};

const editTask = (el, date) => {
  const element = document.querySelector(el);

  element.innerHTML = `
        <div id="form-${date}">
            <form class="form-task-update" style="width: 100%">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" id="updateTask" required>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                      <div class="form-check mr-3">
                          <input class="form-check-input" name="priority" type="radio" value="priority1" id="priority1">
                          <label class="form-check-label" for="priority1">
                            <i class="fab fa-font-awesome-flag text-success"></i>
                          </label>
                      </div>
                      <div class="form-check mr-3">
                          <input class="form-check-input" name="priority" type="radio" value="priority2" id="priority2">
                          <label class="form-check-label" for="priority2">
                            <i class="fab fa-font-awesome-flag text-warning"></i>
                          </label>
                      </div>
                      <div class="form-check">
                          <input class="form-check-input" name="priority" type="radio" value="priority3" id="priority3">
                          <label class="form-check-label" for="priority3">
                            <i class="fab fa-font-awesome-flag text-danger"></i>
                          </label>
                      </div>
                  </div>

                  <div>
                      <button type="submit" class="btn btn-primary mr-2" id="btn-edit${date}">Salvar</button>
                      <button type="button" class="btn btn-secondary border-0" id="btn-cancel${date}">Cancel</button>
                  </div>
                </div>
            </form>
        </div>
    `;
};

const addFormProject = (el, id) => {
  const element = document.querySelector(el);

  element.innerHTML = `
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
};

export { addFormTask, addFormProject, editTask };
