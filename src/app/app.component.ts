import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { 
  BACKGROUND, 
  ENGLISH, 
  LOGO, 
  RUSSIAN
} from './shared/consts/image.consts';
import { TranslateService } from '@ngx-translate/core';
import { MushroomInfoService } from './shared/services/mushroom-info.service';
import { StorageService } from './shared/services/storage.service';
import { DEFAULT_LANGUAGE } from './shared/consts/settings.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("chooseLang") chooseLangModal: HTMLIonModalElement | undefined;

  LOGO = LOGO;
  BACKGROUND = BACKGROUND;
  RUSSIAN = RUSSIAN;
  ENGLISH = ENGLISH;

  currentLang: string = "";
  currentLangIcon: string | undefined;

  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly storageService: StorageService,
  ) {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.currentLang = this.storageService.getLanguage() ?? DEFAULT_LANGUAGE;
    this.translateService.use(this.currentLang);
    this.updateLangIcon()
  }

  navigate(path: string[]) {
    this.router.navigate(path)
  }

  setLang(lang: string) {
    this.currentLang = lang
    this.translateService.use(this.currentLang);
    this.storageService.setLanguage(lang)
    this.updateLangIcon()
    this.chooseLangModal?.dismiss()
  }

  updateLangIcon() {
    switch(this.currentLang) {
      case "ru":
        this.currentLangIcon = RUSSIAN;
        break;
      case "en":
        this.currentLangIcon = ENGLISH;
        break;
      default:
        this.currentLangIcon = ENGLISH;
        break;
    }
  }

  ngAfterViewInit() {
    if(this.chooseLangModal){
      this.chooseLangModal.cssClass = ['choose-lang-modal']
    }
  }
}
