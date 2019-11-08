import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../utils/abstract-fd-ngx-class';
import { InputGroupPlacement } from './input-group.component';
import { FormStates } from '../form/form-control/form-states';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-input-group-input]',
})
export class InputGroupInputDirective extends AbstractFdNgxClass {

    @Input()
    compact: boolean = false;

    /**
     *  The state of the form control - applies css classes.
     *  Can be `valid`, `error`, `warning` or blank for default.
     */
    @Input()
    state: FormStates;

    /** @hidden */
    _setProperties() {
        this._addClassToElement('fd-input');
        if (this.compact) {
            this._addClassToElement('fd-input--compact');
        }
        if (this.state) {
            switch (this.state) {
                case 'warning': {
                    this._addClassToElement('is-warning');
                    break;
                }
                case 'valid': {
                    this._addClassToElement('is-valid');
                    break;
                }
                case 'error': {
                    console.log('this.state', 'isinvalid');
                    this._addClassToElement('is-invalid');
                    break;
                }
            }
        }
    }


    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }

}


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-textarea-group-input]',
})
export class InputGroupTextareaDirective  {}


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-input-group-addon]'
})
export class InputGroupAddOnDirective extends AbstractFdNgxClass {

    /** @hidden */
    @HostBinding('class.fd-input-group__addon')
    fdInputGroupAddonClass: boolean = true;

    /**
     * The placement of the add-on. Options include *before* and *after*
     */
    @Input()
    placement: InputGroupPlacement = 'after';

    /**
     * The placement of the add-on. Options include *before* and *after*
     */
    @Input()
    type: string;

    /**
     *  The state of the form control - applies css classes.
     *  Can be `valid`, `error`, `warning` or blank for default.
     */
    @Input()
    state: FormStates;

    /**
     * Whether the icon add-on or the text add-on is a button.
     */
    @Input()
    button: boolean = false;

    /** @hidden */
    _setProperties() {
        this._addClassToElement('fd-input-group__addon');
        this._addClassToElement('fd-input-group__addon--' + this.placement);
        if (this.button) {
            this._addClassToElement('fd-input-group__addon--button');
        }
        if (this.type) {
            this._addClassToElement('fd-input-group__addon--' + this.type);
        }
        if (this.state) {
            switch (this.state) {
                case 'warning': {
                    this._addClassToElement('is-warning');
                    break;
                }
                case 'valid': {
                    this._addClassToElement('is-valid');
                    break;
                }
                case 'error': {
                    this._addClassToElement('is-invalid');
                    break;
                }
            }
        }
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }

}
