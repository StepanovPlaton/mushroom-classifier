import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  BACKGROUND, 
  LOGO 
} from './shared/consts/image.consts';
import { TranslateService } from '@ngx-translate/core';
import { MushroomInfoService } from './shared/services/mushroom-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  LOGO = LOGO;
  BACKGROUND = BACKGROUND;

  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService,
  ) {
    this.translateService.setDefaultLang('ru');
    this.translateService.use('ru');
  }

  navigate(path: string[]) {
    this.router.navigate(path)
  }
}
