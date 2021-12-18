import { v4 as uuidv4 } from 'uuid';

/**
 * Task class
 */
class Task {
  id;
  title;
  order;
  description;
  boardId;
  userId;
  columnId;

  /**
   * Task constructor
   * @param task - data to create new task
   */
  constructor(task: {
    title: string;
    order: number;
    description: string;
    boardId: string;
    userId: string | null;
    columnId: string;
  }) {
    this.id = uuidv4();
    this.title = task.title;
    this.order = task.order;
    this.description = task.description;
    this.userId = task.userId;
    this.boardId = task.boardId;
    this.columnId = task.columnId;
  }

  /**
   * Set null to userId field
   */
  setNullToUserId() {
    this.userId = null;
  }
}

export default Task;
