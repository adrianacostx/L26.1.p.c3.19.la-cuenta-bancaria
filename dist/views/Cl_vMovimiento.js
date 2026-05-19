export default class Cl_vMovimiento {
    vista;
    inDescripcion;
    inTipo;
    inMonto;
    btCancelar;
    btAceptar;
    constructor() {
        this.vista = document.getElementById("movimiento");
        this.inDescripcion = document.getElementById("movimiento_inDescripcion");
        this.inTipo = document.getElementById("movimiento_inTipo");
        this.inMonto = document.getElementById("movimiento_inMonto");
        this.btCancelar = document.getElementById("movimiento_btCancelar");
        this.btAceptar = document.getElementById("movimiento_btAceptar");
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    get descripcion() {
        return this.inDescripcion.value.trim();
    }
    get tipo() {
        return this.inTipo.value;
    }
    get monto() {
        return parseFloat(this.inMonto.value) || 0;
    }
    mostrar() {
        if (this.vista)
            this.vista.hidden = false;
        this.inDescripcion.value = "";
        this.inTipo.value = "cargo";
        this.inMonto.value = "";
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vMovimiento.js.map