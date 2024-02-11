// This is Example of attribute directive
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
@Directive({
  selector: '[betterHighlighter]',
})
export class BetterHighlighterDirective implements OnInit {
  // @HostBinding('style.backGroundColor') backgroundColor: string = '';
  @Input() defaultColor: string = 'transparent';
  @Input() highlightedColor: string = 'blue';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightedColor
    );
    // this.backgroundColor = this.highlightedColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.defaultColor
    );
    // this.backgroundColor = this.defaultColor;
  }
}
