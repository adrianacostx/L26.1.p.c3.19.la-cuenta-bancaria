/**
 * 3.	TAXI EXPRESS
 * La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que,
 * por el aumento de su cartera de clientes, necesita un sistema automatizado que le permita
 * llevar ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes
 * datos: nombre, tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo
 * (1. Masculino o 2. Femenino).
 * Es significativo para la empresa, obtener un reporte que contenga: a) Cantidad de clientes
 * femeninas mayores de edad, b) cuál ha sido la menor edad atendida, c) promedio de edad de
 * los clientes.
 * Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
 * el siguiente formato, informando que Juan (20 años) tomó servicio corto, Ana (19) largo,
 * Lin (18) corto, y Mary (15) largo:
 *
 * Demo salidas:
 * Cantidad de clientes femeninas mayores de edad: 2
 * La menor edad atendida fue de 15 años
 * El promedio de edad de los clientes es de 18 años
 */
import Cl_mTransporte from "../models/Cl_mTransporte.js";
export default class Cl_cTransporte {
    mTransporte = new Cl_mTransporte();
    vTransporte;
    cCliente;
    // Recibe la vista de la bodega y el controlador del Cliente ya armado
    constructor(vistaTransporte, controladorCliente) {
        this.vTransporte = vistaTransporte;
        this.cCliente = controladorCliente;
        this.vTransporte.onNuevoCliente(() => this.procesar1Cliente());
    }
    procesar1Cliente() {
        this.cCliente.solicitarCliente((cliente) => {
            if (cliente !== null) {
                this.mTransporte.agregarCliente(cliente);
                this.vTransporte.mostrarClientes({
                    clientes: this.mTransporte.clientes,
                    cntFemMayores: this.mTransporte.cantidadClientesMayoresDeEdad(),
                    menorEdad: this.mTransporte.menorEdadAtendida(),
                    promedioEdad: this.mTransporte.promedioEdadClientes(),
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cTransporte.js.map