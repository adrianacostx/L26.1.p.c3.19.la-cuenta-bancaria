export default class Cl_vMovimiento {
    inDescripcion;
    inTipo;
    inMonto;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("movimiento");
        this.inDescripcion = document.getElementById("movimiento_inDescripcion");
        this.inTipo = document.getElementById("movimiento_inTipo");
        this.inMonto = document.getElementById("movimiento_inMonto");
        this.btCancelar = document.getElementById("movimiento_btCancelar");
        this.btAceptar = document.getElementById("movimiento_btAceptar");
    }
    get descripcion() {
        return this.inDescripcion.value.trim();
    }
    get tipo() {
        return this.inTipo.value;
    }
    get monto() {
        return parseFloat(this.inMonto.value.trim());
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vMovimiento.js.map