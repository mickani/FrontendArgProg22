export class SoftSkill{
    id?: number;
    tipo: String;
    nombre: String;
    porcentaje: number;

    constructor (tipo: String, nombre: String, porcentaje: number){
        this.tipo=tipo;
        this.nombre=nombre;
        this.porcentaje=porcentaje;
    }
}