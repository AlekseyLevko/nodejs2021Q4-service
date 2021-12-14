import { v4 as uuidv4 } from 'uuid';

class Task {
  id;
  title;
  order;
  description;
  boardId;
  userId;
  columnId;

  constructor({
    title = 'task title',
    order = 0,
    description = 'task description',
    boardId = '',
    userId = null,
    columnId = '',
  }: {
    title: string;
    order: number;
    description: string;
    boardId: string;
    userId: string | null;
    columnId: string;
  }) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  setNullToUserId() {
    this.userId = null;
  }
}

export default Task;
