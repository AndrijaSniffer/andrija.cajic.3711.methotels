import {Component, OnInit} from '@angular/core';
import {Soba} from "../../classes/soba";
import {RoomService} from "../services/room.service";

@Component({
  selector: 'app-soba-article',
  templateUrl: './soba-article.component.html',
  styleUrls: ['./soba-article.component.css']
})
export class SobaArticleComponent implements OnInit {
  sobe: Soba[] = []

  constructor(private _sobaService: RoomService) {
  }

  ngOnInit(): void {
    this._sobaService.getAll().subscribe(res =>{
      // @ts-ignore
      res.data.forEach(soba =>{
        this.sobe.push(new Soba(soba.naziv, soba.broj_kreveta_za_odrasle, soba.broj_kreveta_za_decu, soba.jedinice, soba.kvadratni_metri, soba.opis))
      })
    })
  }

  reservisiSobu(soba: Soba, brojNoci: string){
    let brojNociNum:number = Number(brojNoci)

    if(!isNaN(brojNociNum) && brojNociNum > 0 && brojNociNum <= 30) {
      alert(`Uspesno ste rezervisali sobu!\n\n
          Cena jednog nocenja: ${this._sobaService.PRICEPERNIGHT}\u20AC \n
          Ukupna cena: ${this._sobaService.getPrice(brojNociNum)}\u20AC \n\n
          Specifikacije sobe:\n
          Naziv: ${soba.naziv}\n
          Broj kreveta: ${soba.brojKrevetaZaDecu + soba.brojKrevetaZaOdrasle}\n
          Jedinice: ${soba.jedinice}\n
          Kvadratni metri: ${soba.kvadratniMetri}\n\n`)
    }
    return false;
  }
}
