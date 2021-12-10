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
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}

export { Board, Column, Task };
