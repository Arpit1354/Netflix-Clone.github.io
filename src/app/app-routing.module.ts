import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeachComponent } from './pages/seach/seach.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [ {path:'',redirectTo:"signin",pathMatch:'full'},
                        {path:"seach",component:SeachComponent},
                         {path:"home",component:HomeComponent},
                     {path:"movie/:id",component:MovieComponent},
                     {path:"signin",component:SigninComponent}
                   
                  //  {path:"signup}
                    ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 