import { Component, OnInit, DoCheck } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  providers: [ProjectService]
})
export class BusinessComponent implements OnInit, DoCheck {
  user: any = {};
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService, private af: AngularFire) {}

   ngDoCheck() {
     this.af.auth.subscribe(user => {
       if(user){
         this.user = user;
       } else {
         this.user ={}
       }
     });
   }


  ngOnInit() {
    this.projects = this.projectService.findBusiness();
  }

}
