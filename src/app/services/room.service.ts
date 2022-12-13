import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Soba} from "../../classes/soba";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  readonly PRICEPERNIGHT: number = 500;

  constructor(private client:HttpClient) {
  }

  getPrice(numberOfNights: number) {
    return numberOfNights * this.PRICEPERNIGHT;
  }

  getAll(){
    return this.client.get("http://localhost:8080/sobe")
  }

  create(soba: Soba){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    const params = new URLSearchParams();
    for(let key in soba)
      { // @ts-ignore
        params.append(key, soba[key]);
      }

    this.client.post("http://localhost:8080/sobe", params, options).subscribe(msg =>{
      if (msg.toString().includes("success")){
        return;
      }
    })
  }
}
