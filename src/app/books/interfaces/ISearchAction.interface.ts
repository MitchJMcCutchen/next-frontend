import { Action } from '@ngrx/store';

export interface ISearchAction extends Action {
  value: any;
  searchField?: number;
  moveIndex?: number;
}
