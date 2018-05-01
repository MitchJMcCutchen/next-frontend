import { IBookResult } from './IBookSearch.interface';

export interface ISearchState {
  searchField: string;
  searchResults: IBookResult[];
  selectedBook: any;
  currentResult: {
    index: number;
    bookId: string;
    totalItems: number;
  };
  loading: boolean;
  loaded: boolean;
}
