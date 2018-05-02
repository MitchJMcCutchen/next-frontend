import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../interfaces/IAppState.interface';
import { getCurrentSearchBook } from '../../store/selectors/search.selectors';
import { RatingStepAction } from './../../store/actions/rating-step.action';
import { getSelectedBook } from './../../store/selectors/search.selectors';

@Component({
  selector: 'app-rating-selector',
  templateUrl: './rating-selector.component.html',
  styleUrls: ['./rating-selector.component.scss']
})
export class RatingSelectorComponent implements OnInit {

  ratingForm: FormGroup;

  @Output()
  add: EventEmitter<any> = new EventEmitter();

  @Output()
  back: EventEmitter<any> = new EventEmitter();

  currentStep;

  steps = [
    'plot',
    'characters',
    'style',
    'genre',
    'overall',
    'complete'
  ];

  get stepMessage() {
    switch (this.currentStep) {
      case this.steps[0]: {
        return 'What did you think about the plot?';
      }
      case this.steps[1]: {
        return 'How did you feel about the characters?';
      }
      case this.steps[2]: {
        return 'Did you enjoy the writer\'s style?';
      }
      case this.steps[3]: {
        return 'Was the book\'s genre intriguing?';
      }
      case this.steps[4]: {
        return 'Overall was it a good book?';
      }
      case this.steps[5]: {
        return 'Everything look good?';
      }
      default: {
        return '';
      }
    }
  }

  constructor(
    public fb: FormBuilder,
    public store: Store<IAppState>
  ) {
    this.store.select(getSelectedBook).subscribe(book => {
      this.currentStep = book.step;
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.ratingForm = this.fb.group({
      plot: undefined,
      characters: undefined,
      style: undefined,
      genre: undefined,
      overall: undefined
    });
  }

  onSelect(value) {
    const patchVal = {};
    patchVal[this.currentStep] = value;
    this.ratingForm.patchValue(patchVal, {onlySelf: true});
    this.onProgress();
  }

  onBack() {
    const index = this.steps.findIndex(step => step === this.currentStep);

    if (index > 0) {

      const patchVal = {};
      patchVal[this.steps[index - 1]] = undefined;
      this.ratingForm.patchValue(patchVal, {onlySelf: true});
      this.store.dispatch(new RatingStepAction(this.steps[index - 1], this.ratingForm.value));
    } else if (index === 0) {
      this.back.emit();
    }
  }

  onProgress() {
    const index = this.steps.findIndex(step => step === this.currentStep);

    if (index + 1 <= this.steps.length) {
      this.store.dispatch(new RatingStepAction(this.steps[index + 1], this.ratingForm.value));
    }
  }

  onAddBook() {
    this.add.emit(this.ratingForm.value);
  }

}
