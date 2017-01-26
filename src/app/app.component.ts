import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from './project.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProjectService, AuthenticationService]
})
export class AppComponent {
  user: any = {};
  userId: string;
  users: FirebaseListObservable<any[]>;
  loggedIn: boolean = false;

  constructor(public af: AngularFire, public projectService: ProjectService, public authenticationService: AuthenticationService) { }
  // {
  //   this.af.auth.subscribe(user => {
  //     if(user) {
  //       //user logged in
  //       this.user = user;
  //       this.loggedIn = true;
  //     } else {
  //       //user not logged in
  //       this.user = {};
  //     }
  //   });
  // }

  // login() {
  //   this.authenticationService.login().then((user) => {
  //     this.user = user;
  //   });
  // }
  //
  // logout() {
  //    this.authenticationService.logout().then((user) => {
  //     this.user = {};
  //    })
  //  }
}
