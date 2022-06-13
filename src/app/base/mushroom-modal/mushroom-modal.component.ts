import { Component, Input, OnInit } from '@angular/core';
import { CHECK, CROSS } from 'src/app/shared/consts/image.consts';
import { IMushroom } from 'src/app/shared/models/mushroom.model';

@Component({
  selector: 'app-mushroom-modal',
  templateUrl: './mushroom-modal.component.html',
  styleUrls: ['./mushroom-modal.component.scss']
})
export class MushroomModalComponent implements OnInit {
  @Input() mushroom: IMushroom | undefined | null;

  CHECK = CHECK;
  CROSS = CROSS;

  constructor() { }

  ngOnInit() {
  }

}
