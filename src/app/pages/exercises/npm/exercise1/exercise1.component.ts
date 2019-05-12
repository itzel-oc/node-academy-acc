import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {

  initProject = `
cd ~ && mkdir logUtil && cd ./logUtil
npm init -y
touch index.js
  `;

  indexFileContent = `
cd ..
node
  `;

  testingModule = `
const logger = require(./file-util);
fileUtil.createFile
  `;


  constructor() { }

  ngOnInit() {
  }

}
