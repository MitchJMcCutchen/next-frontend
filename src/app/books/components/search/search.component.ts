import { AfterViewChecked, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../../interfaces/IAppState.interface';
import { SearchAction } from './../../store/actions/search.action';
import { SetSearchFieldAction } from './../../store/actions/set-search-field.action';
import { getSearchField } from './../../store/selectors/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('search') search;
  @Output() searching: EventEmitter<any> = new EventEmitter();

  searchTimeout;

  searchField$: Observable<string>;

  searchForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public store: Store<IAppState>
  ) {
    this.searchField$ = this.store.select(getSearchField);
  }

  ngOnInit() {
    this.searchField$.subscribe(field => this.buildForm(field));
    setTimeout(() => {
      this.search.nativeElement.focus();
    }, 500);
  }

  buildForm(searchField) {
    this.searchForm = this.fb.group({
      search: searchField
    });
  }

  onKeyup(key) {
    clearTimeout(this.searchTimeout);
    if (key.key === 'Enter') {
      const searchQuery = this.searchForm.value.search.replace(/\s/g, '+');
      this.store.dispatch(new SearchAction(searchQuery));
      this.searching.emit('search');
      return this.store.dispatch(new SetSearchFieldAction(this.searchForm.value.search));
    }
    this.searchTimeout = setTimeout(() => {
      this.store.dispatch(new SetSearchFieldAction(this.searchForm.value.search));
    }, 500);
  }

}
