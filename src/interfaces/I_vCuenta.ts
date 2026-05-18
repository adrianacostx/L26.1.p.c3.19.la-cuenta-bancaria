import Cl_mMovimiento from "../models/Cl_mMovimiento.js";

export interface I_vCuenta {
  onNuevoMovimiento(callback: () => void): void;
  mostrarMovimientos(data: {
    movimientosConSaldo: { movimiento: Cl_mMovimiento; saldo: number }[];
    saldoFinal: number;
    cantidadMovimientos: number;
    ultimoMovimiento: Cl_mMovimiento | null;
    movimientosMontoSuperiorAlUltimo: { movimiento: Cl_mMovimiento; saldo: number }[];
  }): void;
  mostrar(): void;
  ocultar(): void;
}
