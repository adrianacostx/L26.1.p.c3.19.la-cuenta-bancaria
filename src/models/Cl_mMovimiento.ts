export default class Cl_mMovimiento {
  private _descripcion: string = "";
  private _tipo: "cargo" | "abono" = "cargo";
  private _monto: number = 0;
  private _saldoAcumulado: number = 0;

  constructor({ descripcion, tipo, monto }: { descripcion: string; tipo: "cargo" | "abono"; monto: number }) {
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.monto = monto;
  }

  set descripcion(value: string) { this._descripcion = value; }
  get descripcion(): string { return this._descripcion; }

  set tipo(value: "cargo" | "abono") { this._tipo = value; }
  get tipo(): "cargo" | "abono" { return this._tipo; }

  set monto(value: number) { this._monto = +value; }
  get monto(): number { return this._monto; }

  set saldoAcumulado(value: number) { this._saldoAcumulado = value; }
  get saldoAcumulado(): number { return this._saldoAcumulado; }

  calcularNuevoSaldo(saldoAnterior: number): number {
    if (this.tipo === "cargo") {
      return saldoAnterior - this.monto;
    } else {
      return saldoAnterior + this.monto;
    }
  }
}
