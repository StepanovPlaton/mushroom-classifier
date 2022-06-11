import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MushroomCardComponent } from './mushroom-card.component';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  declarations: [MushroomCardComponent],
  exports: [MushroomCardComponent]
})
export class MushroomCardModule { }
