import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../project.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class AdminComponent implements OnInit {
  user = {};
  projects: FirebaseListObservable<any[]>;
  adminLoggedIn: boolean = false;
  constructor(private projectService: ProjectService, public authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  login() {
    this.authenticationService.login();
  }

  logout() {
     this.authenticationService.logout().then((user) => {
      this.user = {};
      this.adminLoggedIn = false;
     })
   }

   printUser() {
   }

}
