import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class UserProfileComponent implements OnInit {
  user = {};
  projects: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire, public projectService: ProjectService, public authenticationService: AuthenticationService) {
    this.af.auth.subscribe(user => {
      if(user){
        this.user = user;
        this.projects = this.projectService.findUserProjects(user);
      } else {
        this.user ={}
      }
    });
   }

  ngOnInit() {

  }

}
