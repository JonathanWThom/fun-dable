import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('/projects/' + projectId);
  }

  fundProject(displayedProject: FirebaseObjectObservable<any>, donation: string) {
    let currentFunding: number;
    displayedProject.subscribe(x => currentFunding = x.funding + parseInt(donation));
    displayedProject.update({funding: currentFunding});
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  update(project: any) {
    var projectFB = this.getProjectById(project.$key);
    projectFB.update({name: project.name,
                      managers: project.managers,
                      description: project.description,
                      cashGoal: project.cashGoal,
                      actionGoal: project.actionGoal,
                      perks: project.perks,
                      type: project.type
                    });
  }


}
