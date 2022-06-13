import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    constructor(){
    }

    getLanguage(): string | null {
        return localStorage.getItem("lang")
    }

    setLanguage(lang: string) {
        localStorage.setItem("lang", lang)
    }
}
