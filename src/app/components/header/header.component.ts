import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input() pageTitle: string;
    @Input() pageSubTitle: string;

    constructor(private router: Router) {}

    returnToHome(): void {
        const path = this.pageTitle.replace(/\s+/g, '-').toLowerCase();
        this.router.navigate([path]);
    }
}
