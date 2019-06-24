import { Utils } from './Utils/Utils';

const nextDaysContent = (element1) => {
  const element = element1;

  element.innerHTML = `
        <div class="task-content text-white">
            <div class="today-header mb-3 d-flex justify-content-center align-items-center">
                <h2>
                    Next 7 Days
                </h2>
            </div>
            <div class="day d-flex flex-column mt-5">
                <div class="day d-flex align-items-center justify-content-between">
                    <h2 class="m-2">
                        Tomorrow
                    </h2>
                    <span class="date d-flex align-items-center">
                      ${Utils.dateFormat(new Date(), 1)}
                    </span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body text-white"
                        data-date="${Utils.dateFormat(new Date(), 1)}">

                        </tbody>
                    <table>
                    <div class="form" data-date="${Utils.dateFormat(new Date(), 1)}">

                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" data-date="${Utils.dateFormat(new Date(), 1)}"
                    id="day2" border-0 p-2">
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
                    <span class="date d-flex align-items-center">
                      ${Utils.dateFormat(new Date(), 2)}
                    </span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body text-white"
                        data-date="${Utils.dateFormat(new Date(), 2)}">

                        </tbody>
                    <table>
                    <div class="form" data-date="${Utils.dateFormat(new Date(), 2)}">

                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" data-date="${Utils.dateFormat(new Date(), 2)}"
                     id="day3" border-0 p-2">
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
                    <span class="date d-flex align-items-center">
                      ${Utils.dateFormat(new Date(), 3)}
                    </span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body text-white"
                        data-date="${Utils.dateFormat(new Date(), 3)}">

                        </tbody>
                    <table>
                    <div class="form" data-date="${Utils.dateFormat(new Date(), 3)}">

                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" data-date="${Utils.dateFormat(new Date(), 3)}"
                    id="day4" border-0 p-2">
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
                    <span class="date d-flex align-items-center">
                      ${Utils.dateFormat(new Date(), 4)}
                    </span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body text-white"
                        data-date="${Utils.dateFormat(new Date(), 4)}">

                        </tbody>
                    <table>
                    <div class="form" data-date="${Utils.dateFormat(new Date(), 4)}">

                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" data-date="${Utils.dateFormat(new Date(), 4)}"
                    id="day5" border-0 p-2">
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
                    <span class="date d-flex align-items-center">
                      ${Utils.dateFormat(new Date(), 5)}
                    </span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body text-white"
                        data-date="${Utils.dateFormat(new Date(), 5)}">

                        </tbody>
                    <table>
                    <div class="form" data-date="${Utils.dateFormat(new Date(), 5)}">

                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" data-date="${Utils.dateFormat(new Date(), 5)}"
                     id="day6" border-0 p-2">
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
                    <span class="date d-flex align-items-center">
                      ${Utils.dateFormat(new Date(), 6)}
                    </span>
                </div>
                <div class="tableContent table-responsive">
                    <table class="table">
                        <tbody class="task-body text-white"
                        data-date="${Utils.dateFormat(new Date(), 6)}">

                        </tbody>
                    <table>
                    <div class="form" data-date="${Utils.dateFormat(new Date(), 6)}">

                    </div>
                </div>
                <div class="btn-form">
                    <button class="btnTaskPlus" data-date="${Utils.dateFormat(new Date(), 6)}"
                     id="day7" border-0 p-2">
                        <i class="fas fa-plus mr-2"></i>
                        <span>Add Task</span>
                    </button>
                </div>
            </div>
        </div>
    `;
};

export { nextDaysContent };
