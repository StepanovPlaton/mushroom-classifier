import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MUSHROOM } from 'src/app/shared/consts/image.consts';
import { IMushroom } from 'src/app/shared/models/mushroom.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  mushroom: IMushroom;

  constructor(
    private readonly router: Router,
  ) { 
    this.mushroom = {
      name: "Гриб",
      mainPicture: MUSHROOM,
      additionalPictures: [],
      eatable: false,
      description: "Очень подробное описание гриба"
    }
  }

  ngOnInit() {
    
  }

  navigate(path: string[]) {
    this.router.navigate(path)
  }
}
