import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  providers: [ProjectService]
})
export class BusinessComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.findBusiness();
  }

}
