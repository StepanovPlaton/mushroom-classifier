import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { DISABLE_WARNING_TIMEOUT, MAX_FILE_SIZE, SUPPORTED_FILE_TYPES } from 'src/app/shared/consts/settings.consts';
import { TranslateService } from '@ngx-translate/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-recognize-page',
  templateUrl: './recognize-page.component.html',
  styleUrls: ['./recognize-page.component.scss']
})
export class RecognizePageComponent implements OnInit {
  SUPPORTED_FILE_TYPES = SUPPORTED_FILE_TYPES;

  warnings = {
    fileLarge: false,
    notOneFile: false,
    uploadFail: false,
  }

  readonly welcomeMessage: string = "Upload a photo of a mushroom to recognize it"
  message: string = this.welcomeMessage;

  uploadedImageBase64: string = "";

  constructor(
    private readonly translateService: TranslateService,
    private readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }
  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }
  @HostListener('drop', ['$event']) public drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if(event?.dataTransfer?.files && 
       (event.dataTransfer.files as File[]).length > 0) {
      this.onFileSelected({
        target: {
          files: event.dataTransfer.files
        }
      })
    }
  }

  startDisableWarningTimeout() {
    setTimeout(() => {
      this.warnings.fileLarge = false
      this.warnings.notOneFile = false
    }, DISABLE_WARNING_TIMEOUT*1000)
  }

  onFileSelected(event: any) {
    if(event?.target?.files && 
       (event.target.files as File[]).length > 0) {
      if((event.target.files as File[]).length !== 1) {
        this.warnings.notOneFile = true
        this.startDisableWarningTimeout()
        return
      }
      const file = event.target.files[0] as File;
      if(file.size > MAX_FILE_SIZE*1024*1024) {
        this.warnings.fileLarge = true
        this.startDisableWarningTimeout()
        return
      }

      const reader = new FileReader();
      this.message = this.translateService.instant('Loading');
      reader.onloadend = () => {
        this.uploadedImageBase64 = reader.result?.toString() as string
        console.log(this.uploadedImageBase64)
        this.message = file.name
        this.cdr.markForCheck();
      };
      reader.onerror = () => {
        this.warnings.uploadFail = true;
        this.startDisableWarningTimeout()
      };
      reader.readAsDataURL(file);
   }
  }
}
