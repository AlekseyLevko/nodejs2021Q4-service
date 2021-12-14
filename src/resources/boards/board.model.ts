import { v4 as uuidv4 } from 'uuid';
import { Column } from '../../types';

class Board {
  id;
  title;
  columns;

  constructor({
    title = 'board title',
    columns = [],
  }: {
    title: string;
    columns: Column[];
  }) {
    this.id = uuidv4();
    this.title = title;
    this.columns = columns.map((column) => ({ ...column, id: uuidv4() }));
  }
}

export default Board;
