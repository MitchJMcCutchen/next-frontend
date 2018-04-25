import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './../shared/module/material/material.module';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { MyShelfLabelComponent } from './components/my-shelf-label/my-shelf-label.component';
import { MyShelfComponent } from './components/my-shelf/my-shelf.component';
import { BookService } from './services/book.service';
import { GetMyShelfEffect } from './store/effects/get-shelf.effect';
import { myShelfReducer } from './store/reducers/my-shelf.reducer';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { RecommendationsLabelComponent } from './components/recommendations-label/recommendations-label.component';

@NgModule({
  imports: [
    StoreModule.forFeature('myShelf', myShelfReducer),
    EffectsModule.forFeature([
      GetMyShelfEffect
    ]),
    CommonModule,
    MaterialModule
  ],
  declarations: [BookContainerComponent, MyShelfComponent, MyShelfLabelComponent, RecommendationsComponent, RecommendationsLabelComponent],
  providers: [
    BookService
  ]
})
export class BooksModule { }
