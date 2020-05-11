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

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(){
    var formData: any = new FormData();
    formData.append("name", this.loginForm.get('username').value);
    formData.append("avatar", this.loginForm.get('password').value);

    this.rest.login(formData);
  }
}
