import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProjectService]
})
export class AppComponent {
  user: any = {};
  userId: string;
  users: FirebaseListObservable<any[]>;
  loggedIn: boolean = false;

  constructor(public af: AngularFire, public projectService: ProjectService)
  {
    this.af.auth.subscribe(user => {
      if(user) {
        //user logged in
        this.user = user;
        this.loggedIn = true;
      } else {
        //user not logged in
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    });
    console.log(this.user);
  }

  logout() {
     this.af.auth.logout();
     console.log(this.user);
     this.loggedIn = false;
   }
}
