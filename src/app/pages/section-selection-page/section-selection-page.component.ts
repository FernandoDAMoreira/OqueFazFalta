import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PageData, Section } from 'src/app/model/page.model';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'app-section-selection-page',
    templateUrl: './section-selection-page.component.html',
    styleUrls: ['./section-selection-page.component.scss'],
})
export class SectionSelectionPageComponent implements OnInit {
    pageData$: Observable<PageData>;
    pageBasePath: string;

    constructor(
        private router: Router,
        private pageDataService: PageDataService
    ) {}

    ngOnInit() {
        this.pageDataService.loadPageData();
        this.pageData$ = this.pageDataService.pageData$;
        this.pageData$.subscribe((data) => (this.pageBasePath = data.path));
    }

    handleSectionClick(section: Section) {
        this.router.navigate([`${this.pageBasePath}/${section.path}`]);
    }
}
