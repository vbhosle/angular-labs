import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[ccCardHover]'
})
export class CardHoverDirective{
    @HostBinding('class.panel-primary') private isHovering: boolean;

    constructor(private elementRef: ElementRef,private renderer: Renderer2){

    }

    @HostListener('mouseover') onMouseOver(){
        let part = this.elementRef.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(part, 'display', 'block');
        this.isHovering = true;
    }

    @HostListener('mouseout') onMouseOut(){
        let part = this.elementRef.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(part, 'display', 'none');
        this.isHovering = false;
    }
}