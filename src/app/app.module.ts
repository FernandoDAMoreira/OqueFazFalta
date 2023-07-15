import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionSelectionPageComponent } from './pages/section-selection-page/section-selection-page.component';
import { AudiosPageComponent } from './pages/audios-page/audios-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SectionSelectionPageComponent,
        AudiosPageComponent,
        PhotosPageComponent,
        VideosPageComponent,
        IndexPageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
