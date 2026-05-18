import Cl_mCliente from "../models/Cl_mCliente.js";
export default class Cl_cCliente {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // El controlador se suscribe a los eventos de la interfaz
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método para que la Curso llame a este controlador
    solicitarCliente(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mCliente({
            nombre: this.vista.nombre,
            edad: this.vista.edad,
            sexo: this.vista.sexo,
            servicio: this.vista.servicio,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cCliente.js.map