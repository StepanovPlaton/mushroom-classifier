import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { CHECK, CROSS, MUSHROOM, NOTFOUND } from 'src/app/shared/consts/image.consts';
import { IMushroom } from 'src/app/shared/models/mushroom.model';
import { MushroomModalComponent } from '../mushroom-modal/mushroom-modal.component';

@Component({
  selector: 'app-mushroom-card',
  templateUrl: './mushroom-card.component.html',
  styleUrls: ['./mushroom-card.component.scss']
})
export class MushroomCardComponent implements OnInit {
  MUSHROOM = MUSHROOM;
  NOTFOUND = NOTFOUND;
  CROSS = CROSS;
  CHECK = CHECK;

  @Input() mushroom: IMushroom | null | undefined;
  @Input() size: "small" | "medium" | "large" = "medium";

  constructor(
    private readonly modalController: ModalController
  ) { }

  ngOnInit() {
  }

  openModal() {
    if(!this.mushroom) return
    
    from(this.modalController.create({
      component: MushroomModalComponent,
      componentProps: {
        mushroom: this.mushroom
      },
      cssClass: ["mushroom-details-modal"]
    })).subscribe(modal => {
      modal.present()
    })
  }
}
