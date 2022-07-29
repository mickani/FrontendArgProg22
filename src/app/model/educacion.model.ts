export class Educacion{
    id?: number;
    nivelInstitucion: String;
    fecha: String;
    titulo: String;

    constructor (nivelInstitucion: String, fecha: String, titulo: String){
        this.nivelInstitucion=nivelInstitucion;
        this.fecha=fecha;
        this.titulo=titulo;
    }

    
}
