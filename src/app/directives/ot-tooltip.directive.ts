import { Directive, OnInit, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[crpOtTooltipAlign], [crpOtTooltipMessage]',
})

export class OtTooltipDirective implements OnInit {
    @Input('crpOtTooltipAlign') align: string;
    @Input('crpOtTooltipMessage') message: string;
    el: ElementRef;
    cssName: string;
    cssText = 'ot-tooltip__text';

    constructor(private elementRef?: ElementRef, private render?: Renderer2) {
        this.el = elementRef;
    }

    ngOnInit(): void {
        console.log('message:' + this.message + '>>align:' + this.align);
        console.log('Text:' + this.el.nativeElement.innerHTML);
        this.showTooltip();
    }

    showTooltip() {
        if (this.align === 'Left') {
            this.cssName = 'ot-tooltip ot-tooltip--is-left';
        } else if (this.align === 'Right') {
            this.cssName = 'ot-tooltip ot-tooltip--is-right';
        } else if (this.align === 'Bottom') {
            this.cssName = 'ot-tooltip ot-tooltip--is-bottom';
        }
        if (this.el.nativeElement.childNodes.length === 1) {
            const span = document.createElement('span');
            span.innerHTML = this.message;
            span.className = this.cssText;
            this.el.nativeElement.className = this.cssName;
            this.render.appendChild(this.el.nativeElement, span);
        }
    }
}
