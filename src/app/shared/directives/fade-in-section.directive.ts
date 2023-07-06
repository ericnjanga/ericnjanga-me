import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';

@Directive({
  selector: '[appFadeInSection]'
})
export class FadeInSectionDirective implements OnInit {
  private animationPlayer!: AnimationPlayer;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    const options = {
      threshold: 0.85 // Adjust this value as needed
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this.fadeIn();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    intersectionObserver.observe(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0'); // Hide the element initially
  }

  fadeIn() { console.log('---fadeIn');
    const factory = this.animationBuilder.build([
      style({ opacity: 0 }),
      animate('1500ms ease-in', style({ opacity: 1 }))
    ]);

    this.animationPlayer = factory.create(this.elementRef.nativeElement);
    this.animationPlayer.play();
  }
}
