import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  {"path":"",component:LoginComponent},
  {"path":"home",component:HomeComponent},
  {"path":"about",component:AboutComponent},
  {"path":"contact",component:ContactComponent},
  {"path":"login",component:LoginComponent},
  {"path":"studentupdate/:student_id",component:StudentUpdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
