import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCheckIfGreaterThan]',
})
export class CheckIfGreaterThanDirective {
  @Input() appCheckIfGreaterThan: number = 0;
  umbral = 15;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateColor();
  }

  ngOnChanges() {
    this.updateColor();
  }

  private updateColor() {
    if (this.appCheckIfGreaterThan > this.umbral) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}
