export default class Cl_vCuenta {
    lblSaldoFinal;
    lblCantidadMovimientos;
    lblUltimoMovimiento;
    btNuevoMovimiento;
    divMovimientos;
    divMovimientosSuperior;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoMovimiento = document.getElementById("body_btNuevoMovimiento");
        this.lblSaldoFinal = document.getElementById("body_lblSaldoFinal");
        this.lblCantidadMovimientos = document.getElementById("body_lblCantidadMovimientos");
        this.lblUltimoMovimiento = document.getElementById("body_lblUltimoMovimiento");
        this.divMovimientos = document.getElementById("body_movimientosLista");
        this.divMovimientosSuperior = document.getElementById("body_movimientosSuperiorLista");
    }
    onNuevoMovimiento(callback) {
        this.btNuevoMovimiento.onclick = callback;
    }
    mostrarMovimientos(data) {
        this.divMovimientos.innerHTML = "";
        this.divMovimientosSuperior.innerHTML = "";
        data.movimientosConSaldo.forEach(item => {
            const mov = item.movimiento;
            const linea = document.createElement("div");
            linea.textContent = `${mov.tipo} por ${mov.descripcion}, saldo $${item.saldo}`;
            this.divMovimientos.appendChild(linea);
        });
        this.lblSaldoFinal.innerHTML = data.saldoFinal.toString();
        this.lblCantidadMovimientos.innerHTML = data.cantidadMovimientos.toString();
        this.lblUltimoMovimiento.innerHTML = data.ultimoMovimiento
            ? `${data.ultimoMovimiento.tipo} por ${data.ultimoMovimiento.descripcion} $${data.ultimoMovimiento.monto}`
            : "ninguno";
        if (data.movimientosMontoSuperiorAlUltimo.length === 0) {
            const mensaje = document.createElement("div");
            mensaje.textContent = "No hay movimientos con monto superior al último.";
            this.divMovimientosSuperior.appendChild(mensaje);
        }
        else {
            data.movimientosMontoSuperiorAlUltimo.forEach(item => {
                const linea = document.createElement("div");
                linea.textContent = `${item.tipo} por ${item.descripcion}, monto $${item.monto}`;
                this.divMovimientosSuperior.appendChild(linea);
            });
        }
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
//# sourceMappingURL=Cl_vCuenta.js.map