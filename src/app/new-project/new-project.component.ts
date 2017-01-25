import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createProject(name: string, managers: string, description: string, cashGoal: string, actionGoal: string, perks: string, type: string) {
    var arrayManagers = [];
    var arrayPerks = [];
    arrayManagers.push(managers);
    arrayPerks.push(perks);
    var newProject: Project = new Project(name, arrayManagers, description, parseInt(cashGoal), actionGoal, arrayPerks, type);
    this.projectService.addProject(newProject);
  }
}
