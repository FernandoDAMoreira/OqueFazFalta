import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Section } from 'src/app/model/page.model';
import { Photo } from 'src/app/model/photo.model';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'app-photos-page',
    templateUrl: './photos-page.component.html',
    styleUrls: ['./photos-page.component.scss'],
})
export class PhotosPageComponent {
    photos: Photo[] = [];

    constructor(private pageDataService: PageDataService) {}

    ngOnInit() {
        this.pageDataService.loadPageData();
        this.pageDataService.currentSectionData$.subscribe((section) => {
            this.photos = [];
            section.data.forEach((photoName) => {
                this.photos.push({
                    src: `${section.dataBasePath}/${photoName}.${section.dataFormat}`,
                    description: this.formatDescription(photoName),
                });
            });
        });
    }

    private formatDescription(photoName: string): string {
        return photoName.substring(2).replace(/_/g, ' ');
    }
}
