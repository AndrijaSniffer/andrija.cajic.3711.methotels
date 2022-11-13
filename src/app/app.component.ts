import {Component, OnInit} from '@angular/core';
import {Soba} from "../classes/soba";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listaSoba: Soba[] = []

  constructor() {
  }

  ngOnInit() {
  }

  addSoba(naziv: string, BKZO: string, BKZD: string, jedinice: string, metri: string, opis: string, dodatna: string) {
    let dodatnaOprema = dodatna.split(',')

    dodatnaOprema.forEach(oprema => {
      oprema = oprema.trim()
    })

    this.listaSoba.push(new Soba(naziv, parseInt(BKZO), parseInt(BKZD), parseInt(jedinice), parseFloat(metri), opis, dodatnaOprema));

    return false;
  }
}
