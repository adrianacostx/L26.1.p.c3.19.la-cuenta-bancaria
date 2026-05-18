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

import Cl_mCuentaBancaria from "../models/Cl_mCuenta.js";
import Cl_mMovimiento from "../models/Cl_mMovimiento.js";
import { I_vCuenta } from "../interfaces/I_vCuenta.js";
import Cl_cMovimiento from "./Cl_cMovimiento.js";

export default class Cl_cCuenta {
  private mCuenta: Cl_mCuentaBancaria;
  private vCuenta: I_vCuenta;
  private cMovimiento: Cl_cMovimiento;

  constructor(vistaCuenta: I_vCuenta, controladorMovimiento: Cl_cMovimiento) {
    this.mCuenta = new Cl_mCuentaBancaria(50); // Saldo inicial $50
    this.vCuenta = vistaCuenta;
    this.cMovimiento = controladorMovimiento;

    this.vCuenta.onNuevoMovimiento(() => this.procesar1Movimiento());

    this.agregarDatosIniciales();
    this.actualizarVista();
  }

  private agregarDatosIniciales() {
    const movimientosIniciales = [
      new Cl_mMovimiento({ descripcion: "desayuno", tipo: "Cargo", monto: 5 }),
      new Cl_mMovimiento({ descripcion: "taxi", tipo: "Cargo", monto: 8 }),
      new Cl_mMovimiento({ descripcion: "transferencia", tipo: "Abono", monto: 20 }),
      new Cl_mMovimiento({ descripcion: "deuda", tipo: "Cargo", monto: 25 }),
    ];
    movimientosIniciales.forEach(mov => this.mCuenta.agregarMovimiento(mov));
  }

  private actualizarVista() {
    this.vCuenta.mostrarMovimientos({
      movimientosConSaldo: this.mCuenta.obtenerMovimientosConSaldo(),
      saldoFinal: this.mCuenta.saldoFinal(),
      cantidadMovimientos: this.mCuenta.cantidadMovimientos(),
      ultimoMovimiento: this.mCuenta.ultimoMovimiento(),
      movimientosMontoSuperiorAlUltimo: this.mCuenta.movimientosMontoSuperiorAlUltimo()
    });
  }

  private procesar1Movimiento() {
    this.cMovimiento.solicitarMovimiento((movimiento) => {
      if (movimiento !== null) {
        this.mCuenta.agregarMovimiento(movimiento);
        this.actualizarVista();
      }
    });
  }
}
