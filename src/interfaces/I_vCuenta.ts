import Cl_mMovimiento from "../models/Cl_mMovimiento.js";

export interface I_vCuenta {
  onNuevoMovimiento(callback: () => void): void;
  mostrarMovimientos({
    movimientos,
    cntMovimientos,
    saldoUltimoMovimiento,
    descripcionesMayorQueUltimo,
  }: {
    movimientos: Cl_mMovimiento[];
    cntMovimientos: number;
    saldoUltimoMovimiento: number;
    descripcionesMayorQueUltimo: string[];
  }): void;
  mostrar(): void;
  ocultar(): void;
}
