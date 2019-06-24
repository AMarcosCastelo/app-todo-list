import { Utils } from './Utils/Utils';

const todayContent = (element1, date) => {
  const todayEl = element1;

  todayEl.innerHTML = `
        <div class="task-content text-white">
            <div class="today-header mb-3 d-flex justify-content-between align-items-center">
                <h2 class="d-flex">
                    <a href="#" class="text-white">Today</a>
                    <span class="d-flex align-items-center">${date}</span>
                </h2>
                <button class="btnTaskPlus border-0 p-2"
                data-date="${Utils.dateFormat(new Date())}">
                    <i class="fas fa-plus mr-2"></i>
                    <span>Add Task</span>
                </button>
            </div>
            <div class="tableContent table-responsive">
                <table class="table">
                    <tbody class="task-body text-white"
                    data-date="${Utils.dateFormat(new Date())}">

                    </tbody>
                <table>
            </div>
            <div class="taskTodayBody d-flex justify-content-center">
            </div>
        </div>
   `;
};

export { todayContent };
