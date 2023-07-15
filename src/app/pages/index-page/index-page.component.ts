import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
})
export class IndexPageComponent {
    allPagesUrls: string[] = [];

    constructor(private pageDataService: PageDataService) {}

    ngOnInit() {
        this.allPagesUrls = this.pageDataService.allPagesUrls();
    }
}
