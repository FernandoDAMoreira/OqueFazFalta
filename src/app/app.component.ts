import { Component } from '@angular/core';
import { PageDataService } from './services/page-data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    pageTitle: Observable<string>;
    pageSubTitle: Observable<string>;

    constructor(private pageDataService: PageDataService) {
        this.pageTitle = this.pageDataService.pageTitle$;
        this.pageSubTitle = this.pageDataService.pageSubTitle$;
    }
}
