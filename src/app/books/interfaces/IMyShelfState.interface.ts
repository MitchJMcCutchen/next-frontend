import { IMyBook } from './IMyBook.interface';

export interface IMyShelfState {
  current: any;
  books: IMyBook[];
  loading: boolean;
  loaded: boolean;
}
