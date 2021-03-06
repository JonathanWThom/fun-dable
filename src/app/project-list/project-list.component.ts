import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() childProjects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router) { }
  public todaysDate = new Date();

  filterByFunding: string = "allProjects";

  goToProjectDetail(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

  onChange(option: string) {
    this.filterByFunding = option;
  }

  ngOnInit() {
  }

}
