import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [ProjectService]
})
export class PersonalComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.findPersonal();
  }

}
