import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent} from './components/profile/profile.component';
import { HomeComponent} from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { LayoutComponent} from './components/layout/layout.component';
import { RegisterComponent} from './components/register/register.component';
import { PeopleListComponent} from './components/people-list/people-list.component';
import { SomeoneProfileComponent} from './components/someone-profile/someone-profile.component';
import { CommentPageComponent} from './components/comment-page/comment-page.component';
import { EditPageComponent} from './components/edit-page/edit-page.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'edit', component: EditPageComponent },
      { path: 'profile', component:ProfileComponent },
      { path: 'list', component:PeopleListComponent },
      { path: 'followers', component:PeopleListComponent },
      { path: 'followed', component:PeopleListComponent },
      { path: 'someone', component: SomeoneProfileComponent},
      { path: 'comments', component: CommentPageComponent },
     ],
    component: LayoutComponent
  },      
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
