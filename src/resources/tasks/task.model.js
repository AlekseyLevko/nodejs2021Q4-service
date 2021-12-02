const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title = 'task title',
    order,
    description = 'task description',
    boardId,
    userId,
    columnId,
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
