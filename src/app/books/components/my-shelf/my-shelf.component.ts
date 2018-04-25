import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './../../../interfaces/IAppState.interface';
import { GetMyShelfAction } from './../../store/actions/get-my-shelf.action';

@Component({
  selector: 'app-my-shelf',
  templateUrl: './my-shelf.component.html',
  styleUrls: ['./my-shelf.component.scss']
})
export class MyShelfComponent implements OnInit {

  constructor(
    private store: Store<IAppState>
  ) {
    this.store.dispatch(new GetMyShelfAction());
  }

  ngOnInit() {
  }

}
