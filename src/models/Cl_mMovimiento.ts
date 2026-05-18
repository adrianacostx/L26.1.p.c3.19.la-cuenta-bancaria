export default class Cl_mMovimiento {
  private _descripcion: string = "";
  private _tipo: "Cargo" | "Abono" = "Cargo";
  private _monto: number = 0;
  constructor({
    descripcion,
    tipo,
    monto,
  }: {
    descripcion: string;
    tipo: "Cargo" | "Abono";
    monto: number;
  }) {
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.monto = monto;
  }
  set descripcion(value: string) {
    this._descripcion = value;
  }
  get descripcion(): string {
    return this._descripcion;
  }
  set tipo(value: "Cargo" | "Abono") {
    this._tipo = value;
  }
  get tipo(): "Cargo" | "Abono" {
    return this._tipo;
  }
  set monto(value: number) {
    this._monto = value;
  }
  get monto(): number {
    return this._monto;
  }
}
