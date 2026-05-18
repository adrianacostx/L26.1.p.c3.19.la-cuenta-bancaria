import { I_vMovimiento } from "../interfaces/I_vMovimiento.js";

export default class Cl_vMovimiento implements I_vMovimiento {
  inDescripcion: HTMLInputElement;
  inTipo: HTMLSelectElement;
  inMonto: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("movimiento") as HTMLElement;
    this.inDescripcion = document.getElementById("movimiento_inDescripcion") as HTMLInputElement;
    this.inTipo = document.getElementById("movimiento_inTipo") as HTMLSelectElement;
    this.inMonto = document.getElementById("movimiento_inMonto") as HTMLInputElement;
    this.btCancelar = document.getElementById("movimiento_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("movimiento_btAceptar") as HTMLButtonElement;
  }

  get descripcion(): string {
    return this.inDescripcion.value.trim();
  }
  get tipo(): "Cargo" | "Abono" {
    return this.inTipo.value as "Cargo" | "Abono";
  }
  get monto(): number {
    return parseFloat(this.inMonto.value.trim());
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
