import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMushroom } from '../models/mushroom.model';

@Injectable({
  providedIn: 'root'
})
export class MushroomInfoService {

    constructor(
        private http: HttpClient,
    ) { 
    }

    getMushroomInfo(mushroomId: number): Observable<IMushroom>  {
        return this.http.get<IMushroom>(`/api/mushrooms/${mushroomId}`)
    }

    getAllMushroomsInfo(): Observable<IMushroom[]> {
        return this.http.get<IMushroom[]>("/api/mushrooms");
    }

    getMushroomsOfTheDay(): Observable<IMushroom[]> {
        return this.http.get<IMushroom[]>("/api/mushrooms/day")
    }

}