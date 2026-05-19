export default class Cl_mMovimiento {
    _descripcion = "";
    _tipo = "cargo";
    _monto = 0;
    _saldoAcumulado = 0;
    constructor({ descripcion, tipo, monto }) {
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.monto = monto;
    }
    set descripcion(value) { this._descripcion = value; }
    get descripcion() { return this._descripcion; }
    set tipo(value) { this._tipo = value; }
    get tipo() { return this._tipo; }
    set monto(value) { this._monto = +value; }
    get monto() { return this._monto; }
    set saldoAcumulado(value) { this._saldoAcumulado = value; }
    get saldoAcumulado() { return this._saldoAcumulado; }
    calcularNuevoSaldo(saldoAnterior) {
        if (this.tipo === "cargo") {
            return saldoAnterior - this.monto;
        }
        else {
            return saldoAnterior + this.monto;
        }
    }
}
//# sourceMappingURL=Cl_mMovimiento.js.map