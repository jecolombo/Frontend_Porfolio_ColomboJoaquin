export class persona{
    id?: number;
    nombre:string;
    apellido:string;
    descripcion:string;
    img:string;
    titulo:string;
    portada:string;
    instagram:string;
    email:string;
    github:string;
    linkedin:string;

    constructor(nombre: string, apellido: string, descripcion:string,img:string,titulo:string, portada:string,instagram:string, email:string, github:string, linkedin:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.titulo =titulo;
        this.portada = portada;
        this.instagram = instagram;
        this.email = email;
        this.github = github;
        this.linkedin = linkedin;
    }
}