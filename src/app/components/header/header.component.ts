import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faTimes = faTimes;
  isLogged = false;
  persona: persona = null;
 
  
  
  constructor(private router:Router, private tokenService: TokenService, public personaService: PersonaService) { 
    
  }
  
  ngOnInit(): void {
    this.cargarPersona();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }

   }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }
  cargarPersona(){
    this.personaService.details(1).subscribe(data =>
      {this.persona = data});
  }

 
  
}
