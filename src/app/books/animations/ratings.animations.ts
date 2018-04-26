import { animate, state, style, transition, trigger } from '@angular/animations';




export const plotAnim = trigger('plotAnim', [
  state('inactive', style({
    transform: 'translateY(50%)',
    opacity: '0'
  })),
  state('active', style({
    transform: 'translateY(0%)',
    opacity: '1'
  })),
  transition('inactive => active', animate('100ms 500ms ease-in-out')),
  transition('active => inactive', animate('100ms 200ms ease-in-out'))
]);
export const characterAnim = trigger('characterAnim', [
  state('inactive', style({
    transform: 'translateY(50%)',
    opacity: '0'
  })),
  state('active', style({
    transform: 'translateY(0%)',
    opacity: '1'
  })),
  transition('inactive => active', animate('100ms 550ms ease-in-out')),
  transition('active => inactive', animate('100ms 150ms ease-in-out'))
]);
export const styleAnim = trigger('styleAnim', [
  state('inactive', style({
    transform: 'translateY(50%)',
    opacity: '0'
  })),
  state('active', style({
    transform: 'translateY(0%)',
    opacity: '1'
  })),
  transition('inactive => active', animate('100ms 600ms ease-in-out')),
  transition('active => inactive', animate('100ms 100ms ease-in-out'))
]);
export const genreAnim = trigger('genreAnim', [
  state('inactive', style({
    transform: 'translateY(50%)',
    opacity: '0'
  })),
  state('active', style({
    transform: 'translateY(0%)',
    opacity: '1'
  })),
  transition('inactive => active', animate('100ms 650ms ease-in-out')),
  transition('active => inactive', animate('100ms 50ms ease-in-out'))
]);
export const overallAnim = trigger('overallAnim', [
  state('inactive', style({
    transform: 'translateY(50%)',
    opacity: '0'
  })),
  state('active', style({
    transform: 'translateY(0%)',
    opacity: '1'
  })),
  transition('inactive => active', animate('100ms 700ms ease-in-out')),
  transition('active => inactive', animate('100ms ease-in-out'))
]);
