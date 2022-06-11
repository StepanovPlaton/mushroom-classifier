import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from 'src/app/base/catalog/catalog.module';
import { CatalogPageComponent } from './catalog-page.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogModule
  ],
  declarations: [CatalogPageComponent]
})
export class CatalogPageModule { }
