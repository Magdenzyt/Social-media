import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myPosts:any=[];

  constructor(public rest:ProfileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getMyPosts();
  }

  getMyPosts() {
    this.myPosts = [];
    this.rest.getMyPosts().subscribe((data: {}) => {
      console.log("myPosts"+ data);
      this.myPosts = data;
    });
  }

}
