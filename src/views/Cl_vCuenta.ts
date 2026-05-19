import { I_vCuenta } from "../interfaces/I_vCuenta.js";
import Cl_mMovimiento from "../models/Cl_mMovimiento.js";

const html = String.raw;

export default class Cl_vCuenta implements I_vCuenta {
  lblCntMovimientos: HTMLLabelElement;
  lblMontoUltimoMovimiento: HTMLLabelElement;
  lblDescMayorQueUltimo: HTMLLabelElement;
  btNuevoMovimiento: HTMLButtonElement;
  tbMovimientos: HTMLTableElement;
  vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoMovimiento = document.getElementById("body_btNuevoMovimiento") as HTMLButtonElement;
    this.lblCntMovimientos = document.getElementById("body_lblCntMovimientos") as HTMLLabelElement;
    this.lblMontoUltimoMovimiento = document.getElementById("body_lblMontoUltimoMovimiento") as HTMLLabelElement;
    this.lblDescMayorQueUltimo = document.getElementById("body_lblDescMayorQueUltimo") as HTMLLabelElement;
    this.tbMovimientos = document.getElementById("body_Movimientos") as HTMLTableElement;
  }

  onNuevoMovimiento(callback: () => void): void {
    this.btNuevoMovimiento.onclick = callback;
  }

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
  }): void {
    this.tbMovimientos.innerHTML = "";
    movimientos.forEach(mov => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${mov.descripcion}</td>
        <td>${mov.tipo === "cargo" ? "Cargo" : "Abono"}</td>
        <td>${mov.monto.toFixed(2)}</td>
        <td>${mov.saldoAcumulado.toFixed(2)}</td>
      `;
      this.tbMovimientos.appendChild(tr);
    });
    this.lblCntMovimientos.innerHTML = cntMovimientos.toString();
    this.lblMontoUltimoMovimiento.innerHTML = montoUltimoMovimiento.toFixed(2);
    this.lblDescMayorQueUltimo.innerHTML =
      descripcionesMayorQueUltimo.length > 0 ? descripcionesMayorQueUltimo.join(", ") : "ninguna";
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}