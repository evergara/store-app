import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.weight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style.weight = '';
  }
}
