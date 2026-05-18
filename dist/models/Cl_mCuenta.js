export default class Cl_mCuentaBancaria {
    saldoInicial;
    movimientos = [];
    constructor(saldoInicial) {
        this.saldoInicial = saldoInicial;
    }
    agregarMovimiento(mov) {
        this.movimientos.push(mov);
    }
    obtenerMovimientosConSaldo() {
        let saldoActual = this.saldoInicial;
        const resultado = [];
        for (let i = 0; i < this.movimientos.length; i++) {
            const mov = this.movimientos[i];
            if (mov.tipo === "Cargo") {
                saldoActual -= mov.monto;
            }
            else {
                saldoActual += mov.monto;
            }
            resultado.push({ movimiento: mov, saldo: saldoActual });
        }
        return resultado;
    }
    saldoFinal() {
        const movsConSaldo = this.obtenerMovimientosConSaldo();
        if (movsConSaldo.length === 0) {
            return this.saldoInicial;
        }
        return movsConSaldo[movsConSaldo.length - 1].saldo;
    }
    cantidadMovimientos() {
        return this.movimientos.length;
    }
    ultimoMovimiento() {
        if (this.movimientos.length === 0) {
            return null;
        }
        return this.movimientos[this.movimientos.length - 1];
    }
    movimientosMontoSuperiorAlUltimo() {
        const ultimoMovimiento = this.ultimoMovimiento();
        if (!ultimoMovimiento) {
            return [];
        }
        const movsConSaldo = this.obtenerMovimientosConSaldo();
        const montoUltimo = ultimoMovimiento.monto;
        return movsConSaldo.filter((item) => item.movimiento.monto > montoUltimo);
    }
}
//# sourceMappingURL=Cl_mCuenta.js.map