export class Skill{
    id?: number;
    tipo: String;
    nombre: String;
    porcentaje: number|any;

    constructor (tipo: String, nombre: String, porcentaje: number){
        this.tipo=tipo;
        this.nombre=nombre;
        this.porcentaje=porcentaje;
    }
}