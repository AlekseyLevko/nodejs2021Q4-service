import { v4 as uuidv4 } from 'uuid';
import { IColumn } from '../../types';

/**
 * Board model
 */
class Board {
  id;
  title;
  columns;

  /**
   * Board constructor
   * @param board - data to create new board
   */
  constructor(board: { title: string; columns: IColumn[] }) {
    this.id = uuidv4();
    this.title = board.title;
    this.columns = board.columns.map((column) => ({ ...column, id: uuidv4() }));
  }
}

export default Board;
