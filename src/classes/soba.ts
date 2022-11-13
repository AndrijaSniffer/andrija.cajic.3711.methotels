export class Soba {
  naziv: string
  brojKrevetaZaOdrasle: number
  brojKrevetaZaDecu: number
  jedinice: number
  kvadratniMetri: number
  opis: string | null
  dodatneOpcije: string[] | null

  constructor(naziv: string,
              brojKrevetaZaOdrasle: number,
              brojKrevetaZaDecu: number,
              jedinice: number,
              kvadratniMetri: number,
              opis: string | null,
              dodatneOpcije: string[] | null) {
    this.naziv = naziv
    this.opis = opis
    this.brojKrevetaZaDecu = brojKrevetaZaDecu
    this.brojKrevetaZaOdrasle = brojKrevetaZaOdrasle
    this.jedinice = jedinice
    this.kvadratniMetri = kvadratniMetri
    this.dodatneOpcije = dodatneOpcije
  }
}
