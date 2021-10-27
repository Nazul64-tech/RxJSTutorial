import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoContainerComponent } from './photo-container/photo-container.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivePhotoComponent } from './active-photo/active-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoContainerComponent,
    GalleryComponent,
    ActivePhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
