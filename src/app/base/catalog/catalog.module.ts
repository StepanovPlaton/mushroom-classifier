import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { IonicModule } from '@ionic/angular';
import { MushroomCardModule } from '../mushroom-card/mushroom-card.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MushroomCardModule
  ],
  declarations: [CatalogComponent],
  exports: [CatalogComponent]
})
export class CatalogModule { }
