import { AfterViewInit, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NestedListDirective } from '../nested-list/nested-list.directive';
import { NestedListModel } from '../nested-list-model';

/**
 * Component for internal usage, allows to generate the nested list from defined object.
 */
@Component({
  selector: 'fd-prepared-nested-list',
  templateUrl: './prepared-nested-list.component.html',
  styleUrls: ['./prepared-nested-list.component.scss']
})
export class PreparedNestedListComponent {

    /**
     * @hidden
     * For internal usage.
     * Defines if the component is first
     */
    @Input()
    first: boolean = true;

    /**
     * Defines if list should be displayed in condensed mode
     */
    @Input()
    condensed: boolean = false;

    /**
     * List configuration
     */
    @Input()
    list: NestedListModel;

    /**
     * @hidden
     */
    @ViewChild(forwardRef(() => NestedListDirective), { static: false })
    nestedListDirective: NestedListDirective;
}
