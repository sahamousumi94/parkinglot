import { Component } from '@angular/core';
import {RestService} from './rest.service';
import {Parking} from './parking';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public vehicleAmount:number;
  public vehicleDuration:number;
  public vehicleLot:number;
  public vehicleNumber:number;
  public parkingLot: Parking;
  title = 'my-first-app';
  lstParkinglot:Parking[];

  errorAlert :boolean = false;

  error_message :String ="dbvhfgfu";

  constructor(private _restservice:RestService)
  {

  }
  ngOnInit()
  {
    this._restservice.getParkingLot()
    .subscribe
    (
      data=>
      {
        this.lstParkinglot = data;
      }
    );
  }
  onSubmit(f)
  {
    this.parkingLot = new Parking();
    this.parkingLot.parkingAmount = this.vehicleAmount;
    this.parkingLot.vehicleLot = this.vehicleLot;
    this.parkingLot.vehicleNumber = this.vehicleNumber;
    this.parkingLot.parkingDuration = this.vehicleDuration;
    if(this._restservice.postParkingData(this.parkingLot)){
    this.errorAlert = true;
    this.error_message = "fgdfhfuu";
  }

  }
  calculateAmount(event:any)
  {
    if(this.vehicleDuration>60)
    this.vehicleAmount = this.vehicleDuration*0.33;
    else
    this.vehicleAmount = 20;
  }
}
