import { I_vCuenta } from "../interfaces/I_vCuenta.js";
import Cl_mMovimiento from "../models/Cl_mMovimiento.js";

export default class Cl_vCuenta implements I_vCuenta {
  lblSaldoFinal: HTMLLabelElement;
  lblCantidadMovimientos: HTMLLabelElement;
  lblUltimoMovimiento: HTMLLabelElement;
  btNuevoMovimiento: HTMLButtonElement;
  divMovimientos: HTMLDivElement;
  divMovimientosSuperior: HTMLDivElement;
  vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoMovimiento = document.getElementById("body_btNuevoMovimiento") as HTMLButtonElement;
    this.lblSaldoFinal = document.getElementById("body_lblSaldoFinal") as HTMLLabelElement;
    this.lblCantidadMovimientos = document.getElementById("body_lblCantidadMovimientos") as HTMLLabelElement;
    this.lblUltimoMovimiento = document.getElementById("body_lblUltimoMovimiento") as HTMLLabelElement;
    this.divMovimientos = document.getElementById("body_movimientosLista") as HTMLDivElement;
    this.divMovimientosSuperior = document.getElementById("body_movimientosSuperiorLista") as HTMLDivElement;
  }

  onNuevoMovimiento(callback: () => void): void {
    this.btNuevoMovimiento.onclick = callback;
  }

  mostrarMovimientos(data: {
    movimientosConSaldo: { movimiento: Cl_mMovimiento; saldo: number }[];
    saldoFinal: number;
    cantidadMovimientos: number;
    ultimoMovimiento: Cl_mMovimiento | null;
    movimientosMontoSuperiorAlUltimo: { movimiento: Cl_mMovimiento; saldo: number }[];
  }): void {

    this.divMovimientos.innerHTML = "";
    this.divMovimientosSuperior.innerHTML = "";

    data.movimientosConSaldo.forEach(item => {
      const mov = item.movimiento;
      const linea = document.createElement("div");
      linea.textContent = `${mov.tipo} por ${mov.descripcion}, saldo $${item.saldo}`;
      this.divMovimientos.appendChild(linea);
    });

    this.lblSaldoFinal.innerHTML = data.saldoFinal.toString();
    this.lblCantidadMovimientos.innerHTML = data.cantidadMovimientos.toString();
    this.lblUltimoMovimiento.innerHTML = data.ultimoMovimiento
      ? `${data.ultimoMovimiento.tipo} por ${data.ultimoMovimiento.descripcion} $${data.ultimoMovimiento.monto}`
      : "ninguno";

    if (data.movimientosMontoSuperiorAlUltimo.length === 0) {
      const mensaje = document.createElement("div");
      mensaje.textContent = "No hay movimientos con monto superior al último.";
      this.divMovimientosSuperior.appendChild(mensaje);
    } else {
      data.movimientosMontoSuperiorAlUltimo.forEach(item => {
        const linea = document.createElement("div");
        linea.textContent = `${item.movimiento.tipo} por ${item.movimiento.descripcion}, monto $${item.movimiento.monto}`;
        this.divMovimientosSuperior.appendChild(linea);
      });
    }
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}