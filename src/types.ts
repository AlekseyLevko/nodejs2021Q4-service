interface User {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface Column {
  id: string;
  title: string;
  order: number;
}
interface Board {
  id: string;
  title: string;
  columns: Column[];
}

interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  boardId: string | null;
  userId: string | null;
  columnId: string;
  setNullToUserId: () => void;
}

export { User, Board, Column, Task };
