import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const menuAnimation: AnimationTriggerMetadata = trigger('menuToggle', [
  state('void', style({left: '-700px'})),
  transition(':enter', [
      animate('.4s', style({transform: 'translateX(700px)'}))
    ]
  ),
  transition(':leave', [
    animate('.4s', style({transform: 'translateX(-700px)'}))
  ])
]);
