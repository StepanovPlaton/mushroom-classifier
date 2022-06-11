import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RecognizePageComponent } from './pages/recognize-page/recognize-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "recognize",
    component: RecognizePageComponent
  },
  {
    path: "catalog",
    component: CatalogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
