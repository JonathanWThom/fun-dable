import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() childProjects: FirebaseListObservable<any[]>;
  constructor(private router: Router) { }

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
