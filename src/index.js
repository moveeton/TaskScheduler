// task-scheduler.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.timer = null;
    }
  
    scheduleTask(task, time) {
      this.tasks.push({ task, time });
      this.sortTasksByTime();
      this.startScheduler();
    }
  
    sortTasksByTime() {
      this.tasks.sort((a, b) => a.time - b.time);
    }
  
    startScheduler() {
      if (!this.timer) {
        this.timer = setInterval(() => this.runTasks(), 1000); // Check every second
      }
    }
  
    runTasks() {
      const now = Date.now();
      while (this.tasks.length > 0 && this.tasks[0].time <= now) {
        const { task } = this.tasks.shift();
        task();
      }
      if (this.tasks.length === 0) {
        this.stopScheduler();
      }
    }
  
    stopScheduler() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  
  module.exports = TaskScheduler;
  