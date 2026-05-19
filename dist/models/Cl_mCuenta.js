export default class Cl_mCuenta {
    saldoInicial;
    movimientos = [];
    constructor(saldoInicial = 50) {
        this.saldoInicial = saldoInicial;
    }
    agregarMovimiento(movimiento) {
        const saldoAnterior = this.movimientos.length === 0
            ? this.saldoInicial
            : this.movimientos[this.movimientos.length - 1].saldoAcumulado;
        const nuevoSaldo = movimiento.calcularNuevoSaldo(saldoAnterior);
        movimiento.saldoAcumulado = nuevoSaldo;
        this.movimientos.push(movimiento);
    }
    cantidadMovimientos() {
        return this.movimientos.length;
    }
    montoUltimoMovimiento() {
        if (this.movimientos.length === 0)
            return 0;
        return this.movimientos[this.movimientos.length - 1].monto;
    }
    descripcionesConMontoMayorQueUltimo() {
        if (this.movimientos.length === 0)
            return [];
        const ultimoMonto = this.movimientos[this.movimientos.length - 1].monto;
        const descripciones = [];
        for (let i = 0; i < this.movimientos.length - 1; i++) {
            if (this.movimientos[i].monto > ultimoMonto) {
                descripciones.push(this.movimientos[i].descripcion);
            }
        }
        return descripciones;
    }
}
//# sourceMappingURL=Cl_mCuenta.js.map