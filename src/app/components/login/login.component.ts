import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public rest:LoginService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() : void {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit(){
    var formData: any = new FormData();

    if(this.loginForm.valid){
      formData.append("username", this.loginForm.get('username').value);
      formData.append("password", this.loginForm.get('password').value);

      localStorage.setItem("username", this.loginForm.get('username').value);

      this.rest.login(formData).subscribe(
        (response) => {
          localStorage.setItem("token", response["token"]);
          console.log(localStorage["token"]);
          console.log(localStorage["username"]);
          this.router.navigate(["/home"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else{
      console.log("NOT VALID")
    }
    

    this.rest.login(formData);
  }
}
