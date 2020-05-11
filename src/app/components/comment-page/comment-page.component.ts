import { Component, OnInit } from '@angular/core';
import {CommentPageService } from '../../services/comment-page/comment-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  comments:any=[];

  constructor(public rest:CommentPageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.comments = [];
    this.rest.getComments().subscribe((data: {}) => {
      console.log("comments"+ data);
      this.comments = data;
    });
  }
}
