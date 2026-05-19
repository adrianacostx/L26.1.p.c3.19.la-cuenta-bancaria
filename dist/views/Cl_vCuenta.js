const html = String.raw;
export default class Cl_vCuenta {
    lblCntMovimientos;
    lblMontoUltimoMovimiento;
    lblDescMayorQueUltimo;
    btNuevoMovimiento;
    tbMovimientos;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoMovimiento = document.getElementById("body_btNuevoMovimiento");
        this.lblCntMovimientos = document.getElementById("body_lblCntMovimientos");
        this.lblMontoUltimoMovimiento = document.getElementById("body_lblMontoUltimoMovimiento");
        this.lblDescMayorQueUltimo = document.getElementById("body_lblDescMayorQueUltimo");
        this.tbMovimientos = document.getElementById("body_Movimientos");
    }
    onNuevoMovimiento(callback) {
        this.btNuevoMovimiento.onclick = callback;
    }
    mostrarMovimientos({ movimientos, cntMovimientos, montoUltimoMovimiento, descripcionesMayorQueUltimo, }) {
        this.tbMovimientos.innerHTML = "";
        movimientos.forEach(mov => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${mov.descripcion}</td>
        <td>${mov.tipo === "cargo" ? "Cargo" : "Abono"}</td>
        <td>${mov.monto.toFixed(2)}</td>
        <td>${mov.saldoAcumulado.toFixed(2)}</td>
      `;
            this.tbMovimientos.appendChild(tr);
        });
        this.lblCntMovimientos.innerHTML = cntMovimientos.toString();
        this.lblMontoUltimoMovimiento.innerHTML = montoUltimoMovimiento.toFixed(2);
        this.lblDescMayorQueUltimo.innerHTML =
            descripcionesMayorQueUltimo.length > 0 ? descripcionesMayorQueUltimo.join(", ") : "ninguna";
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