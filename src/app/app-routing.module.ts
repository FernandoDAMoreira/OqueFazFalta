import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionSelectionPageComponent } from './pages/section-selection-page/section-selection-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { AudiosPageComponent } from './pages/audios-page/audios-page.component';

const routes: Routes = [
    {
        path: 'radio',
        component: SectionSelectionPageComponent,
    },
    {
        path: 'radio/audios',
        component: AudiosPageComponent,
    },
    {
        path: 'radio/fotografias',
        component: PhotosPageComponent,
    },
    {
        path: 'radio/objetos',
        component: PhotosPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
