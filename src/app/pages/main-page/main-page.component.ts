import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MUSHROOM } from 'src/app/shared/consts/image.consts';
import { IMushroom } from 'src/app/shared/models/mushroom.model';
import { MushroomInfoService } from 'src/app/shared/services/mushroom-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild("mainPageWrapper") mainPageWrapper: ElementRef | undefined;

  pageOnTop: boolean = true;

  mushroomsOfTheDay: IMushroom[] | undefined;

  constructor(
    private readonly router: Router,
    private readonly mushroomInfoService: MushroomInfoService,
  ) { 
    this.mushroomInfoService.getMushroomsOfTheDay().subscribe(mushrooms => {
      if(mushrooms.length === 2) {
        this.mushroomsOfTheDay = mushrooms
      }
    })
  }

  ngOnInit() {
    
  }

  navigate(path: string[]) {
    this.router.navigate(path)
  }

  onPageScroll(event: any) {
    console.log(event)
  }
}
