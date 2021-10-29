import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoContainerComponent } from './photo-container/photo-container.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivePhotoComponent } from './active-photo/active-photo.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoContainerComponent,
    GalleryComponent,
    ActivePhotoComponent,
    PhotoUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
