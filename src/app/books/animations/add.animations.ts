import { animate, state, style, transition, trigger } from '@angular/animations';

export const addBoxAnim = trigger('addBoxAnim', [
  state('inactive', style({
    left: '0%',
    transform: 'translateX(0%)',
    width: '4rem',
    height: '2.25rem'
  })),
  state('search', style({
    left: '50%',
    transform: 'translateX(-50%)',
    width: '20rem',
    height: '2.25rem',
    boxShadow: '0 0 15px rgba(0, 0, 0, .3)'
  })),
  state('show', style({
    left: '50%',
    transform: 'translateX(-50%)',
    width: '20rem',
    height: '30rem',
    boxShadow: '0 0 15px rgba(0, 0, 0, .3)'
  })),
  state('add', style({
    left: '50%',
    transform: 'translateX(-50%) rotateY(180deg)',
    width: '20rem',
    height: '30rem',
    boxShadow: '0 0 15px rgba(0, 0, 0, .3)'
  })),
  state('complete', style({
    left: '50%',
    top: '-6.062rem',
    transform: 'translateX(-50%) rotateY(0deg) scale(.4)',
    width: '20rem',
    height: '30rem',
    opacity: '0'
  })),
  transition('inactive <=> search', animate('200ms ease-in-out')),
  transition('search <=> show', animate('200ms ease-in-out')),
  transition('show <=> add', animate('300ms ease-in')),
  transition('add <=> complete', [
    animate('300ms ease-in-out', style({
      left: '50%',
      top: '-6.062rem',
      transform: 'translateX(-50%) rotateY(0deg) scale(.4)',
      width: '20rem',
      height: '30rem',
      offset: 0
    })),
    animate('300ms ease-in-out', style({
      opacity: '0', offset: .5
    })),
  ])
]);

export const backgroundOpacity = trigger('backgroundOpacity', [
  state('plot', style({
    backgroundColor: 'rgba(255,255,255,0)'
  })),
  state('characters', style({
    backgroundColor: 'rgba(255,255,255,0.2)'
  })),
  state('style', style({
    backgroundColor: 'rgba(255,255,255,0.4)'
  })),
  state('genre', style({
    backgroundColor: 'rgba(255,255,255,0.6)'
  })),
  state('overall', style({
    backgroundColor: 'rgba(255,255,255,0.8)'
  })),
  state('complete', style({
    backgroundColor: 'rgba(255,255,255,1)'
  })),
  transition('* <=> *', animate('500ms ease-in-out'))
]);

export const flipContent = trigger('flipContent', [
  state('in', style({
    opacity: '1'
  })),
  transition('void => *', [
    style({
    opacity: '0'
    })
  ])
]);
