# Task Scheduler

The Task Scheduler is a lightweight JavaScript package for scheduling tasks to run at specific times.

## Installation

You can install the Task Scheduler package via npm:

```bash
npm install task-scheduler
```

## Usage

```javascript
const TaskScheduler = require('task-scheduler');

// Create a new instance of TaskScheduler
const scheduler = new TaskScheduler();

// Define a task
const myTask = () => {
  console.log('Task executed!');
};

// Schedule the task to run after 5 seconds
scheduler.scheduleTask(myTask, Date.now() + 5000);
```

## API

### `scheduleTask(task: Function, time: number)`

Schedules a task to run at the specified time.

- `task`: The function to be executed as the task.
- `time`: The time at which the task should be executed, in milliseconds since the Unix epoch.

### `stopScheduler()`

Stops the scheduler from running tasks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
