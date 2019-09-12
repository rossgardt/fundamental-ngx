import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

import * as searchInputHTMLSrc from '!raw-loader!./examples/search-input-example.component.html';
import * as searchInputTSSrc from '!raw-loader!./examples/search-input-example.component.ts';
import * as searchInputDynHtml from '!raw-loader!./examples/search-input-dynamic-example.component.html';
import * as searchInputDynTs from '!raw-loader!./examples/search-input-dynamic-example.component.ts';
import * as searchInputAsyncHtml from '!raw-loader!./examples/search-input-async-example.component.html';
import * as searchInputAsyncTs from '!raw-loader!./examples/search-input-async-example.component.ts';
import * as searchInputDisplayHtml from '!raw-loader!./examples/search-input-displaywith-example.component.html';
import * as searchInputDisplayTs from '!raw-loader!./examples/search-input-displaywith-example.component.ts';
import { ExampleFile } from '../../core-helpers/code-example/example-file';
import { DocsSectionTitleComponent } from '../../core-helpers/docs-section-title/docs-section-title.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input-docs.component.html'
})
export class SearchInputDocsComponent implements OnInit, AfterViewInit {
    searchInputExample: ExampleFile[] = [
        {
            language: 'html',
            code: searchInputHTMLSrc
        },
        {
            language: 'typescript',
            code: searchInputTSSrc
        }
    ];

    searchInputDynamic: ExampleFile[] = [
        {
            language: 'html',
            code: searchInputDynHtml
        },
        {
            language: 'typescript',
            code: searchInputDynTs
        }
    ];

    searchInputAsync: ExampleFile[] = [
        {
            language: 'html',
            code: searchInputAsyncHtml
        },
        {
            language: 'typescript',
            code: searchInputAsyncTs
        }
    ];

    display: ExampleFile[] = [
        {
            language: 'html',
            code: searchInputDisplayHtml
        },
        {
            language: 'typescript',
            code: searchInputDisplayTs
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
