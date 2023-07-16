import { Component } from '@angular/core';
import { SectionData } from 'src/app/model/section-data-item.model';
import { PageDataService } from 'src/app/services/page-data.service';
import Utils from 'src/app/utils/utils';

@Component({
    selector: 'app-photos-page',
    templateUrl: './photos-page.component.html',
    styleUrls: ['./photos-page.component.scss'],
})
export class PhotosPageComponent {
    photos: SectionData[] = [];

    constructor(private pageDataService: PageDataService) {}

    ngOnInit() {
        this.pageDataService.loadPageData();
        this.pageDataService.currentSectionData$.subscribe((section) => {
            this.photos = Utils.getFormatedSecionData(section);
        });
    }
}
