import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask("Learn Node.js");
myTodoList.addTask("Practice JavaScript");
myTodoList.addTask("Build a full-stack app");

myTodoList.completeTask(2);

myTodoList.listTasks();
