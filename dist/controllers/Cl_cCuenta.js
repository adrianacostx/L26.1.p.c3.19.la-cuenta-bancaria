/**
19. LA CUENTA BANCARIA
De la cuenta bancaria se conoce el saldo inicial y los datos de distintos movimientos
sucesivos (descripción, si es cargo o abono, y el monto). Se desea mostrar el saldo acumulado
para cada movimiento y el saldo final de la cuenta.
Considerando los movimientos bancarios de una persona, y suponiendo que comienza con
$50 en la cuenta y que compra un desayuno por $5, luego paga un taxi por $8, transfiere $20 y
luego paga $25 que debe, entonces la salida debería ser como esta:
Cargo por desayuno, saldo $45
Cargo por taxi, saldo $37
Abono por transferencia, saldo $57
Cargo por deuda, saldo $32
El saldo final de la cuenta es de $32
 */
import Cl_mCuenta from "../models/Cl_mCuenta.js";
import Cl_mMovimiento from "../models/Cl_mMovimiento.js";
export default class Cl_cCuenta {
    mCuenta = new Cl_mCuenta(50);
    vCuenta;
    cMovimiento;
    constructor(vistaCuenta, controladorMovimiento) {
        this.vCuenta = vistaCuenta;
        this.cMovimiento = controladorMovimiento;
        // Movimientos iniciales
        this.mCuenta.agregarMovimiento(new Cl_mMovimiento({ descripcion: "desayuno", tipo: "cargo", monto: 5 }));
        this.mCuenta.agregarMovimiento(new Cl_mMovimiento({ descripcion: "taxi", tipo: "cargo", monto: 8 }));
        this.mCuenta.agregarMovimiento(new Cl_mMovimiento({ descripcion: "transferencia", tipo: "abono", monto: 20 }));
        this.mCuenta.agregarMovimiento(new Cl_mMovimiento({ descripcion: "deuda", tipo: "cargo", monto: 25 }));
        this.actualizarVista();
        this.vCuenta.onNuevoMovimiento(() => this.procesarNuevoMovimiento());
    }
    actualizarVista() {
        this.vCuenta.mostrarMovimientos({
            movimientos: this.mCuenta.movimientos,
            cntMovimientos: this.mCuenta.cantidadMovimientos(),
            saldoUltimoMovimiento: this.mCuenta.saldoUltimoMovimiento(),
            descripcionesMayorQueUltimo: this.mCuenta.descripcionesConMontoMayorQueUltimo(),
        });
    }
    procesarNuevoMovimiento() {
        this.cMovimiento.solicitarMovimiento((movimiento) => {
            if (movimiento !== null) {
                this.mCuenta.agregarMovimiento(movimiento);
                this.actualizarVista();
            }
        });
    }
}
//# sourceMappingURL=Cl_cCuenta.js.map