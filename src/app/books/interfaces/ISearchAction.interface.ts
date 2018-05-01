import { Action } from '@ngrx/store';

export interface ISearchAction extends Action {
  value: any;
  searchField?: number;
  moveIndex?: number;
  nextIndex?: number;
  book?: any;
  ratings?: any;
  step?: any;
  body?: any;
}
