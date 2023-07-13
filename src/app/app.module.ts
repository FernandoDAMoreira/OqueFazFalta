import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionsComponent } from './pages/sections/sections.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AudiosComponent } from './pages/audios/audios.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, SectionsComponent, HeaderComponent, PhotosComponent, AudiosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
