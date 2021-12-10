import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  boardId: string | null;
  userId: string | null;
  columnId: string | null;

  constructor({
    id = uuidv4(),
    title = 'task title',
    order = 0,
    description = 'task description',
    boardId = '',
    userId = '',
    columnId = null,
  } = {}) {
    this.id = id;
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

module.exports = Task;
