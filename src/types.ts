interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface IColumn {
  id: string;
  title: string;
  order: number;
}
interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
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

export { IUser, IBoard, IColumn, Task };
