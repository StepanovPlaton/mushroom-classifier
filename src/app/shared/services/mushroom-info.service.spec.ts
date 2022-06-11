/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MushroomInfoService } from './mushroom-info.service';

describe('Service: MushroomInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MushroomInfoService]
    });
  });

  it('should ...', inject([MushroomInfoService], (service: MushroomInfoService) => {
    expect(service).toBeTruthy();
  }));
});
