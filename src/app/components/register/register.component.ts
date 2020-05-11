import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterService } from '../../services/register/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public rest: RegisterService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit(){
    var formData: any = new FormData();

    formData.append("username", this.registerForm.get("username").value);
    formData.append("email", this.registerForm.get("email").value);
    formData.append("password", this.registerForm.get("password").value);

    this.rest.register(formData).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/login"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
