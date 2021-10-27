import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { PhotosService } from '../services/photo-service.service';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnInit {
  activePhoto$: Observable<Photo | undefined> = this.photosService.activePhoto$;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  hidePhoto() {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
  }

}
