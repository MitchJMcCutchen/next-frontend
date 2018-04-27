import { IBookResult } from './IBookSearch.interface';

export interface ISearchState {
  searchField: string;
  searchResults: IBookResult[];
  currentResult: {
    index: number;
    bookId: string;
  };
}
