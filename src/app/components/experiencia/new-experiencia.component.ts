import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  anioE: string='';
  nombreE: string = '';
  cargoE: string='';
  descripcionE: string = '';
  
constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.anioE ,this.nombreE,this.cargoE ,this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experencia laboral agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la accion de agregar una experiencia laboral");
      this.router.navigate(['']);
    })
  }

}
