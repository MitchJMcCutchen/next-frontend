import { animate, state, style, transition, trigger } from '@angular/animations';




export const logoSquare = trigger('logoSquare', [
  state('books', style({
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #FEC967 47%, #E97565 100%)'
  })),
  state('login', style({
    width: '8rem',
    height: '8rem',
    background: 'linear-gradient(135deg, #FEC967 100%, #E97565 100%)'
  })),
  transition('login => books', animate('500ms ease-in-out'))
]);

export const booksTitle = trigger('booksTitle', [
  state('books', style({
    transform: 'translateX(0)'
  })),
  state('login', style({
    transform: 'translateX(-7%)'
  })),
  transition('* <=> *', animate('200ms ease-out'))
]);
