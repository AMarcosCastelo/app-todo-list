import 'bootstrap';
import './sass/main.scss';
import './sass/today.scss';
import './sass/nextDays.scss';
import './sass/projects.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import { TodoController } from './controller/todoController';

// eslint-disable-next-line no-unused-vars
const todoController = new TodoController();
