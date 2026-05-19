import { I_vMovimiento } from "../interfaces/I_vMovimiento.js";

export default class Cl_vMovimiento implements I_vMovimiento {
  vista: HTMLElement | null;
  inDescripcion: HTMLInputElement;
  inTipo: HTMLSelectElement;
  inMonto: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("movimiento") as HTMLElement;
    this.inDescripcion = document.getElementById("movimiento_inDescripcion") as HTMLInputElement;
    this.inTipo = document.getElementById("movimiento_inTipo") as HTMLSelectElement;
    this.inMonto = document.getElementById("movimiento_inMonto") as HTMLInputElement;
    this.btCancelar = document.getElementById("movimiento_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("movimiento_btAceptar") as HTMLButtonElement;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  get descripcion(): string {
    return this.inDescripcion.value.trim();
  }

  get tipo(): "cargo" | "abono" {
    return this.inTipo.value as "cargo" | "abono";
  }

  get monto(): number {
    return parseFloat(this.inMonto.value) || 0;
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
    // Limpiar campos opcionalmente
    this.inDescripcion.value = "";
    this.inTipo.value = "cargo";
    this.inMonto.value = "";
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
