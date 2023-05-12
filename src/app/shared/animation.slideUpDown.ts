import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideUpDown = trigger('slideUpDown', [
    state('hidden', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
    })),
    state('visible', style({
        height: '*',
        opacity: 1,
        overflow: 'visible'
    })),
    transition('hidden => visible', [animate('300ms')]),
    transition('visible => hidden', [animate('300ms')])
]);


export const openCLose = trigger('openClose', [

    state('closed', style({
        height: '0',
        opacity: 0,
        // backgroundColor: 'blue'
    })),
    state('open', style({
        height: '*',
        opacity: 1,
        //   backgroundColor: 'yellow'
    })),
    transition('open => closed', [
        animate('300ms')
    ]),
    transition('closed => open', [
        animate('300ms')
    ]),
]);