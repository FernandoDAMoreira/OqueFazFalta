import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { PageData, Section } from '../model/page.model';
import { allPagesData } from '../data/all-pages-data';
import { AllPagesData } from '../model/all-pages-data.model';
import { Router } from '@angular/router';
import { PageIndex } from '../model/page-index.model';

@Injectable({
    providedIn: 'root',
})
export class PageDataService {
    private dataForAllPages: AllPagesData = allPagesData;

    private pageData = new ReplaySubject<PageData>();
    private currentSection = new ReplaySubject<Section>();
    private pageTitle = new BehaviorSubject<string>('');
    private pageSubTitle = new BehaviorSubject<string>('');

    constructor(private router: Router) {}

    loadPageData(): void {
        const pathArray = this.router.url.substring(1).split('/');
        const pagePath = pathArray[0];
        const sectionPath = pathArray[1];

        if (pagePath) {
            const pageData =
                this.dataForAllPages[pagePath as keyof AllPagesData]!;
            this.pageTitle.next(pageData.title);
            this.pageData.next(pageData);
            if (sectionPath) {
                const currentSection = pageData.sections.find(
                    (section) => section.path == sectionPath
                )!;
                this.pageSubTitle.next(currentSection.title);
                this.currentSection.next(currentSection);
            } else {
                this.pageSubTitle.next('');
            }
        }
    }

    get pageData$(): Observable<PageData> {
        return this.pageData.asObservable();
    }

    get pageTitle$(): Observable<string> {
        return this.pageTitle.asObservable();
    }

    get pageSubTitle$(): Observable<string> {
        return this.pageSubTitle.asObservable();
    }

    get currentSectionData$(): Observable<Section> {
        return this.currentSection.asObservable();
    }

    pagesIndex(): PageIndex[] {
        // This method is only accessed by the index page
        // Beacause of this we can set the correct titles here
        this.pageTitle.next('Index');
        this.pageSubTitle.next('');

        const pagesIndex: PageIndex[] = [];
        Object.keys(allPagesData).forEach((pageKey) => {
            const pageData = allPagesData[pageKey as keyof AllPagesData]!;
            pagesIndex.push({
                pagePath: `/${pageData.path}`,
                sectionsPaths: pageData.sections.map(
                    (section) => `/${section.path}`
                ),
            });
        });

        return pagesIndex;
    }
}
