import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionSelectionPageComponent } from './pages/section-selection-page/section-selection-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { AudiosPageComponent } from './pages/audios-page/audios-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';

const routes: Routes = [
    // Index
    {
        path: 'index',
        component: IndexPageComponent,
    },
    // Rádio
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
    // Fotografia
    {
        path: 'fotografia',
        component: SectionSelectionPageComponent,
    },
    {
        path: 'fotografia/25-de-abril',
        component: PhotosPageComponent,
    },
    {
        path: 'fotografia/estado-novo',
        component: PhotosPageComponent,
    },
    {
        path: 'fotografia/portugal-rural',
        component: PhotosPageComponent,
    },
    // Imprensa
    {
        path: 'imprensa',
        component: SectionSelectionPageComponent,
    },
    {
        path: 'imprensa/jornais',
        component: PhotosPageComponent,
    },
    {
        path: 'imprensa/revistas',
        component: PhotosPageComponent,
    },
    // Mundo Artistico
    {
        path: 'mundoartistico',
        component: SectionSelectionPageComponent,
    },
    {
        path: 'mundoartistico/arte',
        component: PhotosPageComponent,
    },
    {
        path: 'mundoartistico/cartazes',
        component: PhotosPageComponent,
    },
    // Musica
    {
        path: 'musica',
        component: SectionSelectionPageComponent,
    },
    {
        path: 'musica/audio',
        component: AudiosPageComponent,
    },
    {
        path: 'musica/objetos',
        component: PhotosPageComponent,
    },
    {
        path: 'musica/video',
        component: VideosPageComponent,
    },
    // Televisao
    {
        path: 'televisao',
        component: SectionSelectionPageComponent,
    },
    {
        path: 'televisao/objetos',
        component: PhotosPageComponent,
    },
    {
        path: 'televisao/reportagens',
        component: VideosPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
