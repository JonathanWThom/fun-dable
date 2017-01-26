import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from './project.service';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProjectService, AuthenticationService]
})
export class AppComponent implements OnInit{
  user: any = {};
  userId: string;
  users: FirebaseListObservable<any[]>;
  loggedIn: boolean = false;

  constructor(private router: Router, public af: AngularFire, public projectService: ProjectService, public authenticationService: AuthenticationService) {
  this.af.auth.subscribe(user => {
    if(user){
      this.user = user;
    } else {
      this.user ={}
    }
  });
 }



  login() {
    let that = this
    this.authenticationService.login().then(function() {
      that.router.navigate(['userprofile']);
    });
  }

  logout() {
    let that = this
    this.authenticationService.logout().then(function() {
    that.router.navigate(['']);
    });
  }

  ngOnInit() {
  }
}
