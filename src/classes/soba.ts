export class Soba {
  naziv: string
  brojKrevetaZaOdrasle: number
  brojKrevetaZaDecu: number
  jedinice: number
  kvadratniMetri: number
  opis: string | null
  // dodatneOpcije: {name: string, selected: boolean}[]

  constructor(naziv: string,
              brojKrevetaZaOdrasle: number,
              brojKrevetaZaDecu: number,
              jedinice: number,
              kvadratniMetri: number,
              opis: string | null) {
    this.naziv = naziv
    this.opis = opis
    this.brojKrevetaZaDecu = brojKrevetaZaDecu
    this.brojKrevetaZaOdrasle = brojKrevetaZaOdrasle
    this.jedinice = jedinice
    this.kvadratniMetri = kvadratniMetri
    // this.dodatneOpcije = dodatneOpcije
  }
}
