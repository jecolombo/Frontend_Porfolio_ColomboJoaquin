export class Experiencia {
    id? : number;
    anioE: string;
    nombreE : string;
    cargoE: string;
    descripcionE : string;

    constructor(anioE: string, nombreE: string,cargoE: string, descripcionE: string){
        this.anioE = anioE;
        this.nombreE = nombreE;
        this.cargoE = cargoE;
        this.descripcionE = descripcionE;
        
    }
}
