import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[ccCardHover]'
})
export class CardHoverDirective{
    @Input('ccCardHover') private config = {
        querySelector: '.card-text'
    }

    @HostBinding('class.panel-primary') private isHovering: boolean;

    constructor(private elementRef: ElementRef,private renderer: Renderer2){

    }

    @HostListener('mouseover') onMouseOver(){
        let part = this.elementRef.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setStyle(part, 'display', 'block');
        this.isHovering = true;
    }

    @HostListener('mouseout') onMouseOut(){
        let part = this.elementRef.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setStyle(part, 'display', 'none');
        this.isHovering = false;
    }
}