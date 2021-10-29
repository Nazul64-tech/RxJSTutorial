import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { PhotosService } from '../services/photo-service.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photosList$: Observable<Photo[]> = this.photosService.photos$;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

}
