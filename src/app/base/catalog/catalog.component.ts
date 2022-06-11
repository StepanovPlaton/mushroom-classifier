import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  colomnCount: number = 3;

  table: number[][] | null = null;

  constructor(
    private readonly platform: Platform,
    private readonly cdr: ChangeDetectorRef,
  ) { 
    from(this.platform.ready()).subscribe(_ => {
      this.table = [[]];
      for(var j = 0; j < 15; j++) {
        this.table[0].push(0)
      }
      console.log(this.table)
      this.cdr.markForCheck()
    })
  }

  ngOnInit() {
  }

}
