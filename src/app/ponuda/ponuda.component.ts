import {Component, OnInit} from '@angular/core';
import {Soba} from "../../classes/soba";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface ISoba {
  naziv: string;
  brojKrevetaZaOdrasle: number;
  brojKrevetaZaDecu: number;
  jedinice: number;
  kvadratniMetri: number;
  opis: string | null;
  dodatneOpcije: { name: string, selected: boolean }[];
}

interface checkbox {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  listaSoba: Soba[] = [];
  isFormOpen: boolean = false;
  formButtonText: string = "Otvori formu";
  checkboxOptions: checkbox[];
  forma!: FormGroup;
  soba: Soba;

  constructor(private _fb: FormBuilder) {
    this.soba = {} as ISoba;
    this.checkboxOptions = [
      {name: "WiFi", selected: false},
      {name: "Klima", selected: false},
      {name: "Mini bar", selected: false},
      {name: "Sauna", selected: false}
    ];
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.forma = new FormGroup({
      naziv: new FormControl(this.soba.naziv, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      BKZO: new FormControl(this.soba.brojKrevetaZaOdrasle, [Validators.required, Validators.min(1), Validators.max(3)]),
      BKZD: new FormControl(this.soba.brojKrevetaZaDecu, [Validators.required, Validators.min(0), Validators.max(3)]),
      jedinice: new FormControl(this.soba.jedinice, [Validators.required, Validators.min(1), Validators.max(6)]),
      metri: new FormControl(this.soba.kvadratniMetri, [Validators.required, Validators.min(6), Validators.max(4131)]),
      opis: new FormControl(this.soba.opis, [Validators.minLength(6), Validators.maxLength(255)]),
      dodatneOpcije: new FormArray([])
    });
  }

  get naziv() {
    return this.forma.get('naziv')!;
  }

  get BKZO() {
    return this.forma.get('BKZO')!;
  }

  get BKZD() {
    return this.forma.get('BKZD')!;
  }

  get jedinice() {
    return this.forma.get('jedinice')!;
  }

  get metri() {
    return this.forma.get('metri')!;
  }

  get opis() {
    return this.forma.get('opis')!;
  }

  get dodatneOpcije() {
    return this.forma.get('dodatneOpcije')! as FormArray;
  }

  addSoba() {
    if (this.forma.invalid) {
      for (const control of Object.keys(this.forma.controls)) {
        this.forma.controls[control].markAsTouched();
      }
      return;
    } else {
      let soba: Soba = {
        opis: this.forma.get("opis")!.value,
        kvadratniMetri: this.forma.get("metri")!.value,
        jedinice: this.forma.get("jedinice")!.value,
        brojKrevetaZaDecu: this.forma.get("BKZD")!.value,
        brojKrevetaZaOdrasle: this.forma.get("BKZO")!.value,
        naziv: this.forma.get("naziv")!.value,
        dodatneOpcije: this.forma.get("dodatneOpcije")!.value
      }
      console.warn("Soba", soba);
      this.listaSoba.push(soba);

      this.forma.reset();
      this.checkboxOptions.forEach(val => {
        val.selected = false;
      });
      this.forma.setControl("dodatneOpcije", new FormArray([]))

      return false;
    }
  }

  changeButtonText() {
    this.isFormOpen = !this.isFormOpen;

    this.formButtonText = this.isFormOpen ? "Zatvori formu" : "Otvori formu";
  }

  onCheckChange(event: any) {
    const formArray: FormArray = this.dodatneOpcije;

    if (event.target.checked) {
      this.checkboxOptions.forEach(val => {
        if (val.name == event.target.id)
          val.selected = true;
      });

      formArray.push(new FormControl({name: event.target.id, selected: event.target.value}));
    }
    else {
      let i: number = 0;

      this.checkboxOptions.forEach(val => {
        if (val.name == event.target.id)
          val.selected = false;
      });

      formArray.controls.forEach(ctrl => {
        if (ctrl.value.selected == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
