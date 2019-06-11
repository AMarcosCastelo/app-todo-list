import {Utils} from './Utils/Utils';
const nextDaysContent = (element1, date) => {

    let element = element1;

    element.innerHTML = 
    `
        <div class="task-content text-white">
            <div class="today-header mb-3 d-flex justify-content-center align-items-center">
                <h2>
                    Next 7 Days
                </h2>
            </div>
            <div class="day d-flex flex-column">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                        Today
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date())}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body1 text-white">

                        </tbody>
                    <table>
                    <div class="form-1">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day1" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
            <div class="day d-flex flex-column border-top mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                        Tomorrow
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date(), 1)}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body2 text-white">

                        </tbody>
                    <table>
                    <div class="form-2">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day2" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
            <div class="day d-flex flex-column border-top mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                    ${Utils.dayFormat(new Date(), 2)}
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date(), 2)}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body3 text-white">

                        </tbody>
                    <table>
                    <div class="form-3">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day3" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
            <div class="day d-flex flex-column border-top mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                    ${Utils.dayFormat(new Date(), 3)}
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date(), 3)}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body4 text-white">

                        </tbody>
                    <table>
                    <div class="form-4">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day4" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
            <div class="day d-flex flex-column border-top mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                    ${Utils.dayFormat(new Date(), 4)}
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date(), 4)}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body5 text-white">

                        </tbody>
                    <table>
                    <div class="form-5">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day5" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
            <div class="day d-flex flex-column border-top mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                        ${Utils.dayFormat(new Date(), 5)}
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date(), 5)}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body6 text-white">

                        </tbody>
                    <table>
                    <div class="form-6">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day6" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
            <div class="day d-flex flex-column border-top mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                    ${Utils.dayFormat(new Date(), 6)}
                    </h2>
                    <span class="d-flex align-items-center">${Utils.dateFormat(new Date(), 6)}</span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body7 text-white">

                        </tbody>
                    <table>
                    <div class="form-7">
                    
                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" id="day7" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
        </div>
    `;

}

export {nextDaysContent};