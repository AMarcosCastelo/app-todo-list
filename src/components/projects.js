
const projects = (element1) => {

    let element = element1;

    element.innerHTML = 
    `
        <div class="border-top">
            <div class="project-status my-3">
                <p>You have no projects</p>
            </div>
            <div class="form-projects mt-4">
            </div>
            <div class="btn-form">
                <button class="btnTaskPlusPro" id="project1" border-0 p-2">
                    <i class="fas fa-plus mr-2"></i>
                    <span>Add Project</span>
                </button>
            </div>
        </div>
    `;

}

export {projects}