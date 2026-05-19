import Cl_mMovimiento from "./Cl_mMovimiento.js";

export default class Cl_mCuentaBancaria {
  private saldoInicial: number;
  public movimientos: Cl_mMovimiento[] = [];

  constructor(saldoInicial: number) {
    this.saldoInicial = saldoInicial;
  }

  agregarMovimiento(mov: Cl_mMovimiento) {
    this.movimientos.push(mov);
  }

  obtenerMovimientosConSaldo(): { movimiento: Cl_mMovimiento; saldo: number }[] {
    let saldoActual = this.saldoInicial;
    const resultado = [];

    for (let i = 0; i < this.movimientos.length; i++) {
      const mov = this.movimientos[i];
      if (mov.tipo === "Cargo") {
        saldoActual -= mov.monto;
      } else {
        saldoActual += mov.monto;
      }
      resultado.push({ movimiento: mov, saldo: saldoActual });
    }
    return resultado;
  }

  saldoFinal(): number {
    const movsConSaldo = this.obtenerMovimientosConSaldo();
    if (movsConSaldo.length === 0) {
      return this.saldoInicial;
    }
    return movsConSaldo[movsConSaldo.length - 1].saldo;
  }

  cantidadMovimientos(): number {
    return this.movimientos.length;
  }

  ultimoMovimiento(): Cl_mMovimiento | null {
    if (this.movimientos.length === 0) {
      return null;
    }
    return this.movimientos[this.movimientos.length - 1];
  }

  movimientosMontoSuperiorAlUltimo(): Cl_mMovimiento[] {
    const ultimoMovimiento = this.ultimoMovimiento();
    if (!ultimoMovimiento) {
      return [];
    }
    const montoUltimo = ultimoMovimiento.monto;
    const resultado: Cl_mMovimiento[] = [];
    this.movimientos.forEach((mov) => {
      if (mov.monto > montoUltimo) {
        resultado.push(mov);
      }
    });
    return resultado;
  }
}
