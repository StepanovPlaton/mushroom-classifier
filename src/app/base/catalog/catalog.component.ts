import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { from } from 'rxjs';
import { IMushroom } from 'src/app/shared/models/mushroom.model';
import { MushroomInfoService } from 'src/app/shared/services/mushroom-info.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  colomnCount: number = 3;

  mushroomGrid: IMushroom[][] = []

  constructor(
    private readonly platform: Platform,
    private readonly cdr: ChangeDetectorRef,
    private readonly mushroomInfoService: MushroomInfoService,
  ) { 
    this.mushroomInfoService.getAllMushroomsInfo().subscribe(mushrooms => {
      this.mushroomGrid.push(mushrooms)
    })
  }

  ngOnInit() {
  }

}
