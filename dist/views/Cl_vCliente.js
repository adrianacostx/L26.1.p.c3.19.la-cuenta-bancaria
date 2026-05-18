export default class Cl_cClientePlain {
    inNombre;
    inEdad;
    inSexo;
    inServicio;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("cliente");
        this.inNombre = document.getElementById("cliente_inNombre");
        this.inEdad = document.getElementById("cliente_inEdad");
        this.inSexo = document.getElementById("cliente_inSexo");
        this.inServicio = document.getElementById("cliente_inServicio");
        this.btCancelar = document.getElementById("cliente_btCancelar");
        this.btAceptar = document.getElementById("cliente_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get edad() {
        return parseInt(this.inEdad.value.trim());
    }
    get sexo() {
        return this.inSexo.value.trim() === "1" ? "M" : "F";
    }
    get servicio() {
        return parseInt(this.inServicio.value.trim()) === 1 ? 1 : 2;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
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
//# sourceMappingURL=Cl_vCliente.js.map