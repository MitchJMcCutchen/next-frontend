import { animate, state, style, transition, trigger } from '@angular/animations';



export const confirmPasswordAnim = trigger('confirmPassword', [
  state('inactive', style({
    opacity: '0',
    transform: 'translateX(-50%)'
  })),
  state('active', style({
    opacity: '1',
    transform: 'translateX(0%)'
  })),
  transition('inactive => active', animate('200ms 100ms ease-in-out'))
]);

export const signUpButtons = trigger('signUp', [
  state('inactive', style({
    transform: 'translateY(-53px)'
  })),
  state('active', style({
    transform: 'translateY(0%)'
  })),
  transition('inactive => active', animate('200ms ease-in-out'))
]);
