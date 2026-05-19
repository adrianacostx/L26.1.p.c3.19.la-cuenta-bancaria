import Cl_mMovimiento from "../models/Cl_mMovimiento.js";

export interface I_vCuenta {
  onNuevoMovimiento(callback: () => void): void;
  mostrarMovimientos({
    movimientos,
    cntMovimientos,
    montoUltimoMovimiento,
    descripcionesMayorQueUltimo,
  }: {
    movimientos: Cl_mMovimiento[];
    cntMovimientos: number;
    montoUltimoMovimiento: number;
    descripcionesMayorQueUltimo: string[];
  }): void;
  mostrar(): void;
  ocultar(): void;
}
