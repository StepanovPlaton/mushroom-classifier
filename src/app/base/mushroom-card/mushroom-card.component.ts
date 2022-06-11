import { Component, Input, OnInit } from '@angular/core';
import { CHECK, CROSS, MUSHROOM, NOTFOUND } from 'src/app/shared/consts/image.consts';
import { IMushroom } from 'src/app/shared/models/mushroom.model';

@Component({
  selector: 'app-mushroom-card',
  templateUrl: './mushroom-card.component.html',
  styleUrls: ['./mushroom-card.component.scss']
})
export class MushroomCardComponent implements OnInit {
  MUSHROOM = MUSHROOM;
  NOTFOUND = NOTFOUND;
  CROSS = CROSS;
  CHECK = CHECK;

  @Input() mushroom: IMushroom | null = null;
  @Input() size: "small" | "medium" | "large" = "medium";

  constructor(
  ) { }

  ngOnInit() {
  }

}
