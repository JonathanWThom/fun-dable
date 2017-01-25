import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fund-project',
  templateUrl: './fund-project.component.html',
  styleUrls: ['./fund-project.component.css']
})
export class FundProjectComponent implements OnInit {
  @Output() newDonationSender = new EventEmitter();
  @Output() hideSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  hideFund() {
    this.hideSender.emit();
  }

  fundProject(donation) {
    this.newDonationSender.emit(donation);
  }

}
