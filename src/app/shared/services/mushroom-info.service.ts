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
        return of({
            name: Math.round(Math.random()) ? "Первый гриб" : "Второй гриб",
            mainPicture: `./assets/images/mushroom${Math.floor(Math.random() * 5) + 1}.jpg`,
            additionalPicture: `./assets/images/mushroom${Math.floor(Math.random() * 5) + 1}.jpg`,
            eatable: !!Math.round(Math.random()),
            description: "Поплаво́к жёлто-кори́чневый (лат. Amanita fulva) — гриб из рода Мухомор семейства Аманитовые (Amanitaceae). Шляпка гладкая, слабо слизистая, золотисто-коричневого или оранжево-коричневого цвета, часто с тёмным пятном в центре, колокольчатая или выпуклая у молодых грибов и плоская с выраженным бугорком у созревших, с отчётливо бороздчатыми краями. Достигает в диаметре 4—8 (10) см. Мякоть по краю шляпки тонкая, в центре более мясистая, мягкая, водянистая, беловатая, становится шоколадно-коричневой под действием растворов фенола. Не имеет определённого запаха, со слабым сладковатым вкусом. Ножка хрупкая, полая, достигает 8—14 см в высоту и до 1,2 см в диаметре, в нижней части утолщена, в основании (под вольвой) и кверху сужена, вначале выполненная, затем становится полой. Поверхность однотонного беловатого или беловато-коричневого цвета, гладкая, реже с мелкими войлочными чешуйками."
        })
        //return this.http.get<IMushroom>(`${mushroomId}`)
    }

    getAllMushroomsInfo(): Observable<IMushroom[]> {
        let arr: IMushroom[] = []
        for(let i=0; i<Math.floor(Math.random() * (25 - 15 + 1)) + 15; i++) {
            this.getMushroomInfo(1).subscribe(v=> {
                arr.push(v)
            })
        }
        return of(arr)
    }

    getMushroomsOfTheDay(): Observable<IMushroom[]> {
        let arr: IMushroom[] = []
        this.getMushroomInfo(1).subscribe(v=> { arr.push(v) })
        this.getMushroomInfo(1).subscribe(v=> { arr.push(v) })
        return of(arr)
    }

}