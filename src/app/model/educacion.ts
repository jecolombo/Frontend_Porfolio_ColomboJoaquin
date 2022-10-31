export class Educacion {
    id: number;
    anioE: string;
    nombreE: string;
    descripcionE: string;

    constructor(anioE: string, nombreE: string, descripcionE: string){
        this.anioE = anioE;
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}
