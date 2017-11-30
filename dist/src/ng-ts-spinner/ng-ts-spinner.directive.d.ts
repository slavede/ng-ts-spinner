import { DoCheck, ElementRef, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
export declare class NgTsSpinnerDirective implements OnChanges, DoCheck {
    private elementRef;
    private renderer;
    spinOn: boolean;
    overlayWhileSpin: boolean;
    options: {};
    private spinner;
    private mergedOptions;
    private defaults;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
