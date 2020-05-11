import { Component, OnInit } from '@angular/core';
import { PeopleListService } from '../../services/people-list/people-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  users:any=[];

  constructor(public rest:PeopleListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.endsWith('/list')) {
      this.getUsers();
    } else if (this.router.url.endsWith('/followers')) {
      this.getFollowers();
    } else if (this.router.url.endsWith('/followed')){
      this.getFollowed();
    }
  }

  getUsers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log("users"+ data);
      this.users = data;
    });
  }

  getFollowers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log("followers"+ data);
      this.users = data;
    });
  }

  getFollowed() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log("followed"+ data);
      this.users = data;
    });
  }
}
