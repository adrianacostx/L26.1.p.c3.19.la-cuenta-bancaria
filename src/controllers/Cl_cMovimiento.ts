import { I_vMovimiento } from "../interfaces/I_vMovimiento.js";
import Cl_mMovimiento from "../models/Cl_mMovimiento.js";

export default class Cl_cMovimiento {
  private vista: I_vMovimiento;
  private callback!: (movimiento: Cl_mMovimiento | null) => void;

  constructor(vista: I_vMovimiento) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarMovimiento(callback: (movimiento: Cl_mMovimiento | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    const monto = this.vista.monto;
    if (isNaN(monto) || monto <= 0) {
      alert("El monto debe ser un número positivo.");
      return;
    }
    this.callback(
      new Cl_mMovimiento({
        descripcion: this.vista.descripcion,
        tipo: this.vista.tipo,
        monto: monto,
      })
    );
    this.vista.ocultar();
  }
}
