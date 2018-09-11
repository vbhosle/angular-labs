import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: 'input[type="text"] [validate],input[type="password"] [validate]'
})
export class InputValidator{


    constructor(private elementRef: ElementRef, private renderer: Renderer2){}

    @HostListener('blur') @HostListener('keyup') onkeyup(){
        let txt = this.elementRef.nativeElement.value;
        if(!txt){
            this.renderer.setProperty(this.elementRef.nativeElement, 'placeholder', 'This field cannot be empty');
            this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid red');
        }
        else{
            this.renderer.setProperty(this.elementRef.nativeElement, 'placeholder', '');
            this.renderer.setStyle(this.elementRef.nativeElement, 'border', 'none');
        }
    }
    
}