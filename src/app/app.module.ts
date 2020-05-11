import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SomeoneProfileComponent } from './components/someone-profile/someone-profile.component';
import { PostComponent } from './components/post/post.component';
import { CommentPageComponent } from './components/comment-page/comment-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,   
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    PeopleListComponent,
    SomeoneProfileComponent,
    PostComponent,
    CommentPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
