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
  projects: any;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.findArt();
    console.log(this.projects);
  }

}
