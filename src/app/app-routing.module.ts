import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontributionComponent } from './addcontribution/addcontribution.component';
import { BookviewComponent } from './bookview/bookview.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';



const routes: Routes = [{path: '',redirectTo:'/userhome',pathMatch:'full'},

{path: 'userhome',component: UserHomeComponent},
{path: 'addcontribution',component: AddcontributionComponent},
{path: 'login',component: LoginComponent},
{path: 'bookview',component: BookviewComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
