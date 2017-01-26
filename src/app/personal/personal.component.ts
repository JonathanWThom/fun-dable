import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class PersonalComponent implements OnInit {
  user = {};
  projects: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, public projectService: ProjectService, public authenticationService: AuthenticationService) {
    this.af.auth.subscribe(user => {
      if(user){
        this.user = user;
      } else {
        this.user ={}
      }
    });
   }

  ngOnInit() {
    this.projects = this.projectService.findPersonal();
  }

  printUser() {
    console.log(this.user);
  }

}
