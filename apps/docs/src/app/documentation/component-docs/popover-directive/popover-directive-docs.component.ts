import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

import * as simpleH from '!raw-loader!./examples/popover-directive-example/popover-directive-example.component.html';
import * as triggerH from '!raw-loader!./examples/popover-triggers/popover-triggers.component.html';
import * as programH from '!raw-loader!./examples/popover-programmatic/popover-programmatic.component.html';
import * as fillH from '!raw-loader!./examples/popover-fill/popover-fill.component.html';
import { ExampleFile } from '../../core-helpers/code-example/example-file';
import { DocsSectionTitleComponent } from '../../core-helpers/docs-section-title/docs-section-title.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-popover-directive',
    templateUrl: './popover-directive-docs.component.html',
    styleUrls: ['./popover-directive-docs.component.scss']
})
export class PopoverDirectiveDocsComponent implements OnInit, AfterViewInit {
    simplePopover: ExampleFile[] = [
        {
            language: 'html',
            code: simpleH
        }
    ];

    triggerPopover: ExampleFile[] = [
        {
            language: 'html',
            code: triggerH
        }
    ];

    programmaticPopover: ExampleFile[] = [
        {
            language: 'html',
            code: programH
        }
    ];

    fillControlPopover: ExampleFile[] = [
        {
            language: 'html',
            code: fillH
        }
    ];

    private fragment: any;
    @ViewChildren(DocsSectionTitleComponent, { read: ElementRef }) myList: QueryList<ElementRef>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.fragment.subscribe(fragment => {
            this.fragment = fragment;
        });
    }

    ngAfterViewInit(): void {
        const myArr = this.myList.toArray();
        for (let i = 0; i < myArr.length; i++) {
            if (myArr[i].nativeElement.firstChild.id === this.fragment) {
                myArr[i].nativeElement.scrollIntoView();
            }
        }
    }
}
