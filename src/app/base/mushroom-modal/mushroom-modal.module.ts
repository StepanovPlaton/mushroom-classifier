import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';
import { MushroomModalComponent } from './mushroom-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  declarations: [MushroomModalComponent],
  exports: [MushroomModalComponent]
})
export class MushroomModalModule { }
