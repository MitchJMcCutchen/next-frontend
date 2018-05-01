import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { combineReducers, StoreModule } from '@ngrx/store';

import { MaterialModule } from './../shared/module/material/material.module';
import { AddContainerComponent } from './components/add-container/add-container.component';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { BookResultComponent } from './components/book-result/book-result.component';
import { BookComponent } from './components/book/book.component';
import { CompletedRatingsComponent } from './components/completed-ratings/completed-ratings.component';
import { MyShelfLabelComponent } from './components/my-shelf-label/my-shelf-label.component';
import { MyShelfComponent } from './components/my-shelf/my-shelf.component';
import { RateComponent } from './components/rate/rate.component';
import { RatingSelectorComponent } from './components/rating-selector/rating-selector.component';
import { RecommendationsLabelComponent } from './components/recommendations-label/recommendations-label.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { SearchComponent } from './components/search/search.component';
import { BookService } from './services/book.service';
import { AddBookEffect } from './store/effects/add-book.effect';
import { GetMyShelfEffect } from './store/effects/get-shelf.effect';
import { SearchNextEffect } from './store/effects/search-next.effect';
import { SearchEffect } from './store/effects/search.effect';
import { reducers } from './store/reducers';
import { myShelfReducer } from './store/reducers/my-shelf.reducer';
import { searchReducer } from './store/reducers/search.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('myShelf', reducers),
    EffectsModule.forFeature([
      AddBookEffect,
      GetMyShelfEffect,
      SearchEffect,
      SearchNextEffect
    ]),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookContainerComponent,
    MyShelfComponent,
    MyShelfLabelComponent,
    RecommendationsComponent,
    RecommendationsLabelComponent,
    BookComponent,
    CompletedRatingsComponent,
    AddContainerComponent,
    SearchComponent,
    BookResultComponent,
    RateComponent,
    RatingSelectorComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
