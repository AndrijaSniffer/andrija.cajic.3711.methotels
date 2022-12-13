import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DodatnaOpcija} from "../../classes/dodatna-opcija";

export interface IGetResponse {
  data: [DodatnaOpcija];
  meta: { page: number };
}

@Injectable({
  providedIn: 'root'
})
export class DodatneOpcijeService {

  constructor(private client: HttpClient) {
  }

  getAll() {
    return this.client.get("http://localhost:8080/opcije");
  }
}
