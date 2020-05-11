import { Component, OnInit } from '@angular/core';
import { SomeoneProfileService } from '../../services/someone-profile/someone-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-someone-profile',
  templateUrl: './someone-profile.component.html',
  styleUrls: ['./someone-profile.component.css']
})
export class SomeoneProfileComponent implements OnInit {

  someonePosts:any=[];

  constructor(public rest:SomeoneProfileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSomeonePosts();
  }

  getSomeonePosts() {
    this.someonePosts = [];
    this.rest.getSomeonePosts().subscribe((data: {}) => {
      console.log("someonePosts"+ data);
      this.someonePosts = data;
    });
  }

}
