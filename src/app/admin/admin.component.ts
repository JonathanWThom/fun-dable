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
  user: any = {};
  projects: FirebaseListObservable<any[]>;
  loggedIn: boolean = false;
  constructor(private projectService: ProjectService, public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.projects.forEach(function(project) {
      project.forEach(function(innerProject) {
        console.log(innerProject.funding);
      })
    })
  }

  login() {
    this.authenticationService.login().then((user) => {
      this.user = user;
      this.loggedIn = true;
    });
  }

  logout() {
     this.authenticationService.logout().then((user) => {
      this.user = {};
      this.loggedIn = false;
     })
   }

}
