import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMushroom } from '../models/mushroom.model';

@Injectable({
  providedIn: 'root'
})
export class MushroomInfoService {

    constructor(
        private http: HttpClient,
    ) { 
    }

    getMushroomInfo(mushroomId: number) {
        return this.http.get<IMushroom>(`${mushroomId}`)
    }

}
