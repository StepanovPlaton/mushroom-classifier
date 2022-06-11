import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MainPageComponent } from './main-page.component';
import { MushroomCardModule } from 'src/app/base/mushroom-card/mushroom-card.module';
import { CatalogModule } from 'src/app/base/catalog/catalog.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MushroomCardModule,
    TranslateModule,
    CatalogModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule { }
