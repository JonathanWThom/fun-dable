import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() currentProject: FirebaseObjectObservable<any>;
  editForm: boolean = false;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  showEditForm() {
    this.editForm = true;
  }

  updateProject() {
    this.projectService.update(this.currentProject);
  }

  deleteProject() {
    if(confirm("Are you sure you want to delete this project?")) {
      this.projectService.deleteProject(this.currentProject);
    }
  }

}
