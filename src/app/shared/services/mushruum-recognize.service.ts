import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMushroom } from '../models/mushroom.model';

@Injectable({
  providedIn: 'root'
})
export class MushroomRecognizeService {

    constructor(
      private http: HttpClient,
      ) { 
    }

    recognizeImage(base64Image: string) {
      return this.http.post<IMushroom[]>("/api/mushrooms/recognize", {image: base64Image})
    }
}