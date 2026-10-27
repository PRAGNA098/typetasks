
type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// Add a new task
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// Mark a task as done using its ID
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, status: "done" }
      : task
  );
}

// Filter tasks by status
function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}
