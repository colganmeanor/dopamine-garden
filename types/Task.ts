/**
 * This is the interface for the task object.
 * It is used to define the structure of the task object.
 */

export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * This is the class for the task object.
 * It is used to create a new task object.
 */

export class Task implements ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;

  constructor(data: ITask) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.completed = data.completed;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
