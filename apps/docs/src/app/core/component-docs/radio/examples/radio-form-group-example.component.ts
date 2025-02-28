import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fd-radio-form-group-example',
    templateUrl: './radio-form-group-example.component.html',
    styleUrls: ['radio-form-group-example.component.scss']

})
export class RadioFormGroupExampleComponent {
    customForm = new FormGroup({
        radioInput: new FormControl({ value: 'option1', disabled: false }),
        disabledRadio: new FormControl({ value: 'option13', disabled: true })
    });
}
