import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { HomeService } from '../../services/home/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  postsFollowed:any=[];

  constructor(public rest:HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPostsFollowed();
  }

  getPostsFollowed() {
    this.postsFollowed = [];
    this.rest.getPostsFollowed().subscribe((data: {}) => {
      console.log("postsFollowed"+ data);
      this.postsFollowed = data;
    });
  }

}