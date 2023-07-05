import { trigger, transition, style, query, animateChild, group, animate, keyframes } from '@angular/animations';



export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                opacity: 0,
            })
        ], { optional: true }), // Add optional flag

        query(':enter', [
            style({ opacity: 0 }), // Optional styling for :enter element
            animate('600ms ease',
                style({ opacity: 1 })
            )
        ], { optional: true }) // Add optional flag
    ])
]);
