import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecognizePageComponent } from './recognize-page.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MushroomCardModule } from 'src/app/base/mushroom-card/mushroom-card.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    MushroomCardModule,
  ],
  declarations: [RecognizePageComponent],
})
export class RecognizePageModule { }
