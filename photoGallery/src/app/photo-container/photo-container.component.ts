import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotosService } from '../services/photo-service.service';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss']
})
export class PhotoContainerComponent implements OnInit {
  @Input() photo: Photo;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  onPhotoClick(id: string): void {
    this.photosService.activePhotoID$.next(id)
  }

}
