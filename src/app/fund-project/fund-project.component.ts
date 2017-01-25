import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-project',
  templateUrl: './fund-project.component.html',
  styleUrls: ['./fund-project.component.css']
})
export class FundProjectComponent implements OnInit {
  fundForm: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showFundForm() {
    this.fundForm = true;
  }

}
