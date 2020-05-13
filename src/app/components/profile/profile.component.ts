import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  postForm: FormGroup;

  myPosts:any=[];

  constructor(public rest:ProfileService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getMyPosts();
    this.postForm = new FormGroup({
      message: new FormControl(null, Validators.required),
      customFile: new FormControl(null, Validators.required)
    });
  }

  getMyPosts() {
    this.myPosts = [];
    this.rest.getMyPosts().subscribe((data: {}) => {
      console.log("myPosts"+ data);
      this.myPosts = data;
    });
  }

  onSubmit(){
    var postData: any = new FormData();

    if(this.postForm.valid){
      postData.append("message", this.postForm.get('message').value);
      postData.append("customFile", this.postForm.get('customFile').value);

      console.log(postData);

      this.rest.makePost(postData).subscribe(
        (response) => {
          this.router.navigate(["/profile"]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else{
      console.log("NOT VALID")
    }
    
  }

}
