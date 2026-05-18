import Cl_mMovimiento from "../models/Cl_mMovimiento.js";
export default class Cl_cMovimiento {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarMovimiento(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        const monto = this.vista.monto;
        if (isNaN(monto) || monto <= 0) {
            alert("El monto debe ser un número positivo.");
            return;
        }
        this.callback(new Cl_mMovimiento({
            descripcion: this.vista.descripcion,
            tipo: this.vista.tipo,
            monto: monto,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cMovimiento.js.map