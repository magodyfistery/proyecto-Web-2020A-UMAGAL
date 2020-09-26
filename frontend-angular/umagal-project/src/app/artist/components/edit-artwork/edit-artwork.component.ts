import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { PhotoService } from '../../../services/photo.service'
import {Photo} from '../../../interfaces/Photo'

@Component({
  selector: 'app-edit-artwork',
  templateUrl: './edit-artwork.component.html',
  styleUrls: ['./edit-artwork.component.scss']
})
export class EditArtworkComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.photo = res;
          },
          err => console.log(err)
        )
    });
  }

  updatePhoto(title: HTMLInputElement, description: HTMLInputElement, price:HTMLInputElement, availability:HTMLInputElement): boolean {
    this.photoService.updatePhoto(this.photo._id, title.value, description.value, price.value, availability.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/productos']);
      });
    return false;
  }
}
