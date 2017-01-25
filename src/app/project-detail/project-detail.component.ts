import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService) { }

  projectId: string;
  projectToDisplay;
  fundForm: boolean = false;


  showFundForm() {
    this.fundForm = true;
  }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.projectId = urlParametersArray['id']
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

  hideFund() {
    this.fundForm = false;
  }

  fundProject(donation) {
    this.projectService.fundProject(this.projectToDisplay, donation);
    this.fundForm = false;

  }

}
