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
  fileToUpload: File = null;

  myPosts:any=[];
  myName = localStorage["username"];

  constructor(public rest:ProfileService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getMyPosts();
    this.postForm = this.formBuilder.group({
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

  processFile(imageInput: FileList){
    this.fileToUpload = imageInput.item(0);
  }

  onSubmit(){
    var postData: any = new FormData();

    if(this.postForm.valid && this.fileToUpload != null){
      postData.append("description", this.postForm.get('message').value);
      postData.append("image", this.fileToUpload, this.fileToUpload.name);

      this.rest.makePost(postData).subscribe(
        (response) => {
          console.log(response);
          // this.router.navigate(["/profile"]);
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
