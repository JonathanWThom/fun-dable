import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  providers: [ProjectService]
})
export class ArtComponent implements OnInit {
  user: any = {};
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService, public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user){
        this.user = user;
      } else {
        this.user ={}
      }
    });
   }

  ngOnInit() {
    this.projects = this.projectService.findArt();
  }

}
