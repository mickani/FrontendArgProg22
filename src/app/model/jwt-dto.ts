// INICIALICÉ LOS ATRIBUTOS, CORROBORAR QUE NO TIRE ERROR

export class JwtDTO {
    token:string='';
    type:string='';
    nombreUsuario:string='';
    authorities:string[]=[];
}
