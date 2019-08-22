import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Parking} from './parking'
@Injectable({
  providedIn: 'root'
})
export class RestService {
  hasError :boolean = false;
  constructor(private http: HttpClient) { }
  getParkingLot():Observable<any>{
    console.log("hello");
    return  this.http.get("http://localhost:8080/api/parkings");

}
postParkingData(parkingLot: Parking):boolean
{
  alert(parkingLot.vehicleLot);
  this.http.post("http://localhost:8080/api/parkings",parkingLot).subscribe(error =>
  {
    this.hasError = true;
  });
  return this.hasError;
}
}
