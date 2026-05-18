const html = String.raw;
export default class Cl_cTransporte {
    lblCntFemMayores;
    lblMenorEdad;
    lblPromedioEdad;
    btNuevoCliente;
    tbClientes;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoCliente = document.getElementById("body_btNuevoCliente");
        this.lblCntFemMayores = document.getElementById("body_lblCntFemMayores");
        this.lblMenorEdad = document.getElementById("body_lblMenorEdad");
        this.lblPromedioEdad = document.getElementById("body_lblPromedioEdad");
        this.tbClientes = document.getElementById("body_clientes");
    }
    onNuevoCliente(callback) {
        this.btNuevoCliente.onclick = callback;
    }
    mostrarClientes({ clientes, cntFemMayores, menorEdad, promedioEdad, }) {
        this.tbClientes.innerHTML = "";
        clientes.forEach((cliente) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${cliente.nombre}</td>
        <td>${cliente.edad}</td>
        <td>${cliente.sexo}</td>
        <td>${cliente.servicio}</td>
      `;
            this.tbClientes.appendChild(tr);
        });
        this.lblCntFemMayores.innerHTML = cntFemMayores.toString();
        this.lblMenorEdad.innerHTML = menorEdad.toString();
        this.lblPromedioEdad.innerHTML = promedioEdad.toString();
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vTransporte.js.map