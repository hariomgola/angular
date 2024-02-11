// This is Example of attribute directive
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighting]',
})
export class highlightingDirective implements OnInit {
  constructor(readonly elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
