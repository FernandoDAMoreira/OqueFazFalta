import { Component } from '@angular/core';
import { SectionData } from 'src/app/model/photo.model';
import { PageDataService } from 'src/app/services/page-data.service';
import Utils from 'src/app/utils/utils';

@Component({
    selector: 'app-videos-page',
    templateUrl: './videos-page.component.html',
    styleUrls: ['./videos-page.component.scss'],
})
export class VideosPageComponent {
    videos: SectionData[] = [];

    constructor(private pageDataService: PageDataService) {}

    ngOnInit() {
        this.pageDataService.loadPageData();
        this.pageDataService.currentSectionData$.subscribe((section) => {
            this.videos = Utils.getFormatedSecionData(section);
        });
    }
}
