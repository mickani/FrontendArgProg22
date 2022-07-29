export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;
    image_perfil: String;
    banner: String;

    constructor (nombre: String, apellido: String, titulo: String, descripcion: String, image_perfil: String, banner: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.image_perfil=image_perfil;
        this.banner=banner;
    }
}