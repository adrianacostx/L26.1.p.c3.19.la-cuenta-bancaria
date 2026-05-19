import Cl_mMovimiento from "./Cl_mMovimiento.js";

export default class Cl_mCuenta {
  private saldoInicial: number;
  public movimientos: Cl_mMovimiento[] = [];

  constructor(saldoInicial: number = 50) {
    this.saldoInicial = saldoInicial;
  }

  agregarMovimiento(movimiento: Cl_mMovimiento) {
    const saldoAnterior = this.movimientos.length === 0
      ? this.saldoInicial
      : this.movimientos[this.movimientos.length - 1].saldoAcumulado;
    const nuevoSaldo = movimiento.calcularNuevoSaldo(saldoAnterior);
    movimiento.saldoAcumulado = nuevoSaldo;
    this.movimientos.push(movimiento);
  }

  cantidadMovimientos(): number {
    return this.movimientos.length;
  }

  saldoUltimoMovimiento(): number {
    if (this.movimientos.length === 0) return this.saldoInicial;
    return this.movimientos[this.movimientos.length - 1].saldoAcumulado;
  }
  descripcionesConMontoMayorQueUltimo(): string[] {
    if (this.movimientos.length === 0) return [];
    const ultimoMonto = this.movimientos[this.movimientos.length - 1].monto;
    const descripciones: string[] = [];
    for (let i = 0; i < this.movimientos.length - 1; i++) {
      if (this.movimientos[i].monto > ultimoMonto) {
        descripciones.push(this.movimientos[i].descripcion);
      }
    }
    return descripciones;
  }
}
