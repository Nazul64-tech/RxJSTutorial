import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from "rxjs/operators"
import { PhotosService } from '../services/photo-service.service';
import { uuid } from "uuidv4";
import { FileContent, readFileContent } from "../read-file-content"

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  handleFileInput(images: File[]) {
    const imagesCollection = Array.from(images);
    const imagesContnet: Array<Promise<FileContent>> = imagesCollection.map(file => readFileContent(file));

    const uploadedImages$ = forkJoin(imagesContnet).pipe(
      map(imagesSources => {
        const imagesWithSource = imagesCollection.map(
          (image, idx) => ({
            name: image.name,
            id: uuid(),
            url:imagesSources[idx]
          })
        )

        return imagesWithSource;
    }),
    )

    uploadedImages$.subscribe(
      photos => this.photosService.newPhotos$.next(photos)
    )
  }

}
