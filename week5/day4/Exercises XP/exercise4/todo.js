// todo.js

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = {
      id: this.tasks.length + 1,
      description,
      completed: false
    };
    this.tasks.push(task);
    console.log(`Task added: "${description}"`);
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task #${id} marked as complete.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  listTasks() {
    console.log(`Todo List:`);
    if (this.tasks.length === 0) {
      console.log("No tasks available.");
    }
    this.tasks.forEach(task => {
      const status = task.completed ? "Completed" : "Pending";
      console.log(`#${task.id}: ${task.description} - ${status}`);
    });
  }
}

export { TodoList };
