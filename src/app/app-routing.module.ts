import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/aboutme/edit-about-me.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExpComponent } from './components/experiencia/edit-exp.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/LoginComponent";
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExpComponent},
  {path: 'nuevaeduc', component: NewEducacionComponent},
  {path: 'editeduc/:id', component: EditEducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component:EditSkillComponent},
  {path: 'editAboutme/:id', component:EditAboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
