import { Directive, ElementRef, Input, NgModule, Renderer2 } from '@angular/core';
var NgTsSpinnerDirective = (function () {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    function NgTsSpinnerDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.overlayWhileSpin = false;
        this.mergedOptions = {};
        this.defaults = {
            lines: 13 // The number of lines to draw
            ,
            length: 28 // The length of each line
            ,
            width: 14 // The line thickness
            ,
            radius: 42 // The radius of the inner circle
            ,
            scale: 1 // Scales overall size of the spinner
            ,
            corners: 1 // Corner roundness (0..1)
            ,
            color: '#000' // #rgb or #rrggbb or array of colors
            ,
            opacity: 0.25 // Opacity of the lines
            ,
            rotate: 0 // The rotation offset
            ,
            direction: 1 // 1: clockwise, -1: counterclockwise
            ,
            speed: 1 // Rounds per second
            ,
            trail: 60 // Afterglow percentage
            ,
            fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            ,
            zIndex: 2e9 // The z-index (defaults to 2000000000)
            ,
            className: 'spinner' // The CSS class to assign to the spinner
            ,
            top: '50%' // Top position relative to parent
            ,
            left: '50%' // Left position relative to parent
            ,
            shadow: false // Whether to render a shadow
            ,
            hwaccel: false // Whether to use hardware acceleration
            ,
            position: 'absolute' // Element positioning
        };
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgTsSpinnerDirective.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ spinOnValue = changes['spinOn'] ? changes['spinOn'].currentValue : undefined;
        var /** @type {?} */ optionsValue = changes['options'] ? changes['options'].currentValue : undefined;
        if (optionsValue) {
            Object.assign(this.mergedOptions, this.defaults, this.options);
        }
        if (spinOnValue !== undefined) {
            if (spinOnValue === true) {
                this.spinner = new Spinner(this.mergedOptions).spin(this.elementRef.nativeElement);
                if (this.overlayWhileSpin) {
                    var /** @type {?} */ overlay = this.renderer.createElement('span');
                    this.renderer.addClass(overlay, 'spinner-overlay');
                    this.renderer.setStyle(overlay, 'position', 'absolute');
                    this.renderer.setStyle(overlay, 'top', '0');
                    this.renderer.setStyle(overlay, 'left', '0');
                    this.renderer.setStyle(overlay, 'width', '100%');
                    this.renderer.setStyle(overlay, 'height', '100%');
                    this.renderer.setStyle(overlay, 'background-color', 'gray');
                    this.renderer.setStyle(overlay, 'opacity', '0.4');
                    this.renderer.setStyle(overlay, 'z-index', '1111111111');
                    this.renderer.appendChild(this.elementRef.nativeElement, overlay);
                }
            }
            else if (this.spinner) {
                this.spinner.stop();
                if (this.overlayWhileSpin) {
                    this.renderer.removeChild(this.elementRef.nativeElement, this.elementRef.nativeElement.querySelector('.spinner-overlay'));
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgTsSpinnerDirective.prototype.ngDoCheck = function () {
        if (this.options) {
            Object.assign(this.mergedOptions, this.defaults, this.options);
        }
    };
    return NgTsSpinnerDirective;
}());
NgTsSpinnerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ng-ts-spinner]'
            },] },
];
/**
 * @nocollapse
 */
NgTsSpinnerDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
NgTsSpinnerDirective.propDecorators = {
    'spinOn': [{ type: Input },],
    'overlayWhileSpin': [{ type: Input },],
    'options': [{ type: Input },],
};
var NgTsSpinnerModule = (function () {
    function NgTsSpinnerModule() {
    }
    return NgTsSpinnerModule;
}());
NgTsSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgTsSpinnerDirective],
                exports: [NgTsSpinnerDirective]
            },] },
];
/**
 * @nocollapse
 */
NgTsSpinnerModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { NgTsSpinnerModule, NgTsSpinnerDirective as ɵa };
//# sourceMappingURL=ng-ts-spinner.es5.js.map
