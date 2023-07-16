import { Component } from '@angular/core';
import { PageIndex } from 'src/app/model/page-index.model';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent {
    pagesIndex: PageIndex[];

    constructor(private pageDataService: PageDataService) {}

    ngOnInit() {
        this.pagesIndex = this.pageDataService.pagesIndex();
    }
}
