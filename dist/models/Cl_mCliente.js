export default class Cl_mCliente {
    _nombre = "";
    _edad = 0;
    _sexo = "M";
    _servicio = 1;
    constructor({ nombre, edad, sexo, servicio, }) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.servicio = servicio;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(value) {
        this._edad = +value;
    }
    get edad() {
        return this._edad;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get sexo() {
        return this._sexo;
    }
    set servicio(value) {
        this._servicio = value;
    }
    get servicio() {
        return this._servicio;
    }
}
//# sourceMappingURL=Cl_mCliente.js.map