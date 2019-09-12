import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { Schema } from '../../../schema/models/schema.model';
import { SchemaFactoryService } from '../../../schema/services/schema-factory/schema-factory.service';

import * as inlineHelpSrc from '!raw-loader!./examples/inline-help-example.component.html';
import * as inlineHelpTriggerHtml from '!raw-loader!./examples/inline-help-trigger-example.component.html';
import Popper from 'popper.js';
import { ExampleFile } from '../../core-helpers/code-example/example-file';
import { DocsSectionTitleComponent } from '../../core-helpers/docs-section-title/docs-section-title.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-inline-help',
    templateUrl: './inline-help-docs.component.html'
})
export class InlineHelpDocsComponent implements OnInit, AfterViewInit {
    static schema: any = {
        properties: {
            properties: {
                type: 'object',
                properties: {
                    label: {
                        type: 'string'
                    },
                    helpText: {
                        type: 'string'
                    },
                    position: {
                        type: 'string',
                        enum: Array.from(Popper.placements)
                    }
                }
            }
        },
        type: 'object'
    };

    schema: Schema;

    data: any = {
        properties: {
            label: 'Inline Help',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            position: 'bottom-start'
        }
    };

    inlineHelpBasic: ExampleFile[] = [
        {
            language: 'html',
            code: inlineHelpSrc
        }
    ];

    inlineHelpTrigger: ExampleFile[] = [
        {
            language: 'html',
            code: inlineHelpTriggerHtml
        }
    ];

    private fragment: any;
    @ViewChildren(DocsSectionTitleComponent, { read: ElementRef }) myList: QueryList<ElementRef>;

    constructor(private schemaFactory: SchemaFactoryService, private route: ActivatedRoute) {
        this.schema = this.schemaFactory.getComponent('inlineHelp');
    }

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

    onSchemaValues(data) {
        this.data = data;
    }
}
