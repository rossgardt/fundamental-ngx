import {
    AfterContentInit, ChangeDetectionStrategy,
    Component,
    ContentChild,
    Input,
    OnChanges,
    OnInit,
    TemplateRef,
    ViewEncapsulation
} from '@angular/core';
import {
    LocalizationEditorInputDirective,
    LocalizationEditorLabel,
    LocalizationEditorTextareaDirective
} from '../localization-editor.directives';
import { FormStates } from '../../..';

/**
 *  Component that represents field with add-on.
 *  ```html
 *  <fd-localization-editor-item [label]="'EN'">
 *      <input fd-localization-editor-input type="text" placeholder="EN">
 *  </fd-localization-editor-item>
 *  ```
 */
@Component({
    selector: 'fd-localization-editor-item',
    templateUrl: './localization-editor-item.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalizationEditorItemComponent implements OnInit, AfterContentInit, OnChanges {

    /** @hidden */
    type: string;

    /** The text for the add-on on the right side. */
    @Input()
    label: string;

    /** Whether to apply compact mode to to field. */
    @Input()
    compact: boolean;

    /**
     *  The state of the form control - applies css classes.
     *  Can be `valid`, `error`, `warning` or blank for default.
     */
    @Input()
    state: FormStates;

    /** @hidden */
    @ContentChild(LocalizationEditorInputDirective, { static: false })
    input: LocalizationEditorInputDirective;

    /** @hidden */
    @ContentChild(LocalizationEditorTextareaDirective, { static: false })
    textarea: LocalizationEditorTextareaDirective;

    /** @hidden */
    @ContentChild(LocalizationEditorLabel, { read: TemplateRef, static: false })
    labelTemplate: TemplateRef<any>;

    /** @hidden */
    ngOnInit(): void {
        this.refreshChildInput();
    }

    ngOnChanges(): void {
        this.refreshChildInput();
    }

    ngAfterContentInit(): void {
        if (this.textarea) {
            this.type = 'textarea';
        }
    }

    private refreshChildInput(): void {
        if (this.input) {
            this.input.compact = this.compact;
        }
        if (this.textarea) {
            this.textarea.compact = this.compact;
        }
    }
}
