export default class Cl_mTransporte {
    clientes = [];
    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }
    cantidadClientesMayoresDeEdad() {
        return this.clientes.filter((cliente) => cliente.edad > 18).length;
    }
    menorEdadAtendida() {
        let menor = Infinity;
        this.clientes.forEach((cliente) => {
            if (cliente.edad < menor) {
                menor = cliente.edad;
            }
        });
        return menor;
    }
    promedioEdadClientes() {
        let promedio = 0;
        this.clientes.forEach((cliente) => {
            promedio += cliente.edad;
        });
        return promedio / this.clientes.length;
    }
}
//# sourceMappingURL=Cl_mTransporte.js.map