import {Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLineNumber]'
})
export class LineNumberDirective implements OnInit {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input() appLineNumber;

  ngOnInit(): void {
    if (this.appLineNumber) {
      this.renderer.setAttribute(this.elRef.nativeElement, 'data-line', this.appLineNumber);
    }
  }

}
