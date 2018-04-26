import { Component, Input, OnInit } from '@angular/core';

import { characterAnim, genreAnim, overallAnim, plotAnim, styleAnim } from '../../animations/ratings.animations';

@Component({
  selector: 'app-completed-ratings',
  templateUrl: './completed-ratings.component.html',
  styleUrls: ['./completed-ratings.component.scss'],
  animations: [
    plotAnim,
    characterAnim,
    genreAnim,
    styleAnim,
    overallAnim
  ]
})
export class CompletedRatingsComponent implements OnInit {

  @Input() ratings;

  @Input() state;

  constructor() { }

  ngOnInit() {
  }

}
