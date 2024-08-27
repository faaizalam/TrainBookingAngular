import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {


  
  constructor() { }
  http =inject(HttpClient)
  getAllStation(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/TrainApp/GetAllStations")
  }
  getTrainsBySearch(fromS:number,toS:number,dateFT:string){
    return this.http.get(`https://freeapi.miniprojectideas.com/api/TrainApp/GetTrainsBetweenStations?departureStationId=${fromS}&arrivalStationId=${toS}&departureDate=${dateFT}`)
  }
}
