export default class Cl_mMovimiento {
    _descripcion = "";
    _tipo = "Cargo";
    _monto = 0;
    constructor({ descripcion, tipo, monto, }) {
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.monto = monto;
    }
    set descripcion(value) {
        this._descripcion = value;
    }
    get descripcion() {
        return this._descripcion;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get tipo() {
        return this._tipo;
    }
    set monto(value) {
        this._monto = value;
    }
    get monto() {
        return this._monto;
    }
}
//# sourceMappingURL=Cl_mMovimiento.js.map