import { Component } from '@angular/core';
import {
    DomSanitizer,
    SafeResourceUrl,
} from '@angular/platform-browser';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'app-pdf-page',
    templateUrl: './pdf-page.component.html',
})
export class PdfPageComponent {
    pdfSrc: SafeResourceUrl;

    constructor(
        private pageDataService: PageDataService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.pageDataService.loadPageData();
        this.pageDataService.currentSectionData$.subscribe((section) => {
            this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
                `${section.dataBasePath}${section.data[0]}`
            );
        });
    }
}
