import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService, AuthenticationService]
})
export class NewProjectComponent implements OnInit {
  user = {};
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService, private as: AuthenticationService) { }

  ngOnInit() {
    this.user = this.as.findUser();
    // this.projects = this.projectService.findUserProjects(this.user);
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
