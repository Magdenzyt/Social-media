import { Component, OnInit } from '@angular/core';
import { PeopleListService } from '../../services/people-list/people-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

class User{
  id: number;
  username: string;
  description: string;
  avatar: string;
  followed: boolean = false;
  follower: boolean = false;
}

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  all_users:any=[];
  followed_users: any = [];
  following_users: any = [];
  users: any = [];

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

  unfollow(id){
    console.log(id);
  }

  follow(id){
    console.log(id);
    this.rest.follow(id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUsers() {
    this.rest.getUsers().subscribe((users: User[]) => {
      this.all_users = users;
      this.rest.getFollowed().subscribe((followed: {}) => {
        this.followed_users = followed;
        for(var i = 0; i < users.length; i++){
          users[i].followed = false;
          for(var j = 0; j < this.followed_users.length; j++){
            if(users[i].id == this.followed_users[j].followed){
              users[i].followed = true;
              break;
            }
          }
        }
        this.rest.getFollowers().subscribe((followers: {}) => {
          this.following_users = followers;
          for(var i = 0; i < users.length; i++){
            users[i].follower = false;
            for(var j = 0; j < this.following_users.length; j++){
              if(users[i].id == this.following_users[j].follower){
                users[i].follower = true;
                break;
              }
            }
          }
          this.users = this.all_users;
        });
      });
    });
  }

  getFollowers() {
    this.rest.getUsers().subscribe((users: User[]) => {
      this.all_users = users;
      this.rest.getFollowed().subscribe((followed: {}) => {
        this.followed_users = followed;
        for(var i = 0; i < users.length; i++){
          users[i].followed = false;
          for(var j = 0; j < this.followed_users.length; j++){
            if(users[i].id == this.followed_users[j].followed){
              users[i].followed = true;
              break;
            }
          }
        }
        this.rest.getFollowers().subscribe((followers: {}) => {
          this.following_users = followers;
          for(var i = 0; i < users.length; i++){
            users[i].follower = false;
            for(var j = 0; j < this.following_users.length; j++){
              if(users[i].id == this.following_users[j].follower){
                users[i].follower = true;
                break;
              }
            }
          }
          this.users = [];
          for(var i = 0; i < this.all_users.length; i++){
            if(this.all_users[i].follower){
              this.users.push(this.all_users[i]);
            }
          }
        });
      });
    });
  }

  getFollowed() {
    this.rest.getUsers().subscribe((users: User[]) => {
      this.all_users = users;
      this.rest.getFollowed().subscribe((followed: {}) => {
        this.followed_users = followed;
        for(var i = 0; i < users.length; i++){
          users[i].followed = false;
          for(var j = 0; j < this.followed_users.length; j++){
            if(users[i].id == this.followed_users[j].followed){
              users[i].followed = true;
              break;
            }
          }
        }
        this.rest.getFollowers().subscribe((followers: {}) => {
          this.following_users = followers;
          for(var i = 0; i < users.length; i++){
            users[i].follower = false;
            for(var j = 0; j < this.following_users.length; j++){
              if(users[i].id == this.following_users[j].follower){
                users[i].follower = true;
                break;
              }
            }
          }
          this.users = [];
          for(var i = 0; i < this.all_users.length; i++){
            if(this.all_users[i].followed){
              this.users.push(this.all_users[i]);
            }
          }
        });
      });
    });
  }
}
