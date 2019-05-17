import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  addingMocha = `
npm i mocha chai --save-dev
  `;
  constructor() { }

  ngOnInit() {
  }

}
