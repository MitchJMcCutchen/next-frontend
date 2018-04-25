import { IMyBook } from './IMyBook.interface';

export interface IMyShelfState {
  books: IMyBook[];
  loading: boolean;
  loaded: boolean;
}
