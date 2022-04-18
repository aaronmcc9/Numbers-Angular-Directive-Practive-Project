import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor: string = 'transparent'; //setting defaults to avoid errors
  @Input() highlightColor: string = 'blue';


  @HostBinding('style.backgroundColor') backgroundColor:string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
   // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'transparent');
   this.backgroundColor = this.defaultColor;

  }
}
