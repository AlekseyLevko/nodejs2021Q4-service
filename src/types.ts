interface Board {
  id: string;
  title: string;
  columns: Column[];
}

interface Column {
  id: string;
  title: string;
  order: number;
}

interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  boardId: string | null;
  userId: string | null;
  columnId: string;
}

export { Board, Column, Task };
