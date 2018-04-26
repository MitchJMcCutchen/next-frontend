import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './../shared/module/material/material.module';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { BookComponent } from './components/book/book.component';
import { CompletedRatingsComponent } from './components/completed-ratings/completed-ratings.component';
import { MyShelfLabelComponent } from './components/my-shelf-label/my-shelf-label.component';
import { MyShelfComponent } from './components/my-shelf/my-shelf.component';
import { RecommendationsLabelComponent } from './components/recommendations-label/recommendations-label.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { BookService } from './services/book.service';
import { GetMyShelfEffect } from './store/effects/get-shelf.effect';
import { myShelfReducer } from './store/reducers/my-shelf.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('myShelf', myShelfReducer),
    EffectsModule.forFeature([
      GetMyShelfEffect
    ]),
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    BookContainerComponent,
    MyShelfComponent,
    MyShelfLabelComponent,
    RecommendationsComponent,
    RecommendationsLabelComponent,
    BookComponent,
    CompletedRatingsComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
