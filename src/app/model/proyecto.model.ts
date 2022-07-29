export class Proyecto{
    id?: number;
    nombre: String;
    fecha: number|any;
    imagen: String;
    descripcion: String;
    link: String;

    constructor (nombre: String, fecha: number, imagen: String, descripcion: String, link: String){
        this.nombre=nombre;
        this.fecha=fecha;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.link=link;
    }
}