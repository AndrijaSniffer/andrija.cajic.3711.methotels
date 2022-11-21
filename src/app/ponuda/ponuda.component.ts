import {Component, OnInit} from '@angular/core';
import {Soba} from "../../classes/soba";

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  listaSoba: Soba[] = [];
  isFormOpen: boolean = false;
  formButtonText: string = "Otvori formu";

  constructor() {
  }

  ngOnInit(): void {
  }

  addSoba(naziv: string, BKZO: string, BKZD: string, jedinice: string, metri: string, opis: string, dodatna: string) {
    let dodatnaOprema = dodatna.split(',')

    dodatnaOprema.forEach(oprema => {
      oprema = oprema.trim()
    })

    this.listaSoba.push(new Soba(naziv, parseInt(BKZO), parseInt(BKZD), parseInt(jedinice), parseFloat(metri), opis, dodatnaOprema));

    return false;
  }

  changeButtonText() {
    this.isFormOpen = !this.isFormOpen;

    this.formButtonText = this.isFormOpen ? "Zatvori formu" : "Otvori formu";
  }
}
