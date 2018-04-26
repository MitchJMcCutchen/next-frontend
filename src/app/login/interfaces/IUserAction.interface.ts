import { Action } from '@ngrx/store';



export interface IUserAction extends Action {
  value: any;
  email: string;
  firstName: string;
  lastName: string;
  pic: string;
}
