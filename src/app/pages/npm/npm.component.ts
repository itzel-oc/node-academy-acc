import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.scss']
})
export class NpmComponent implements OnInit {

  lodashSource = `
const _ = require('lodash');
_.toUpper('---Hello-world---');
`;

  lodashInstall = `
    cd ~ && mkdir lodash && cd ./lodash
    npm init
    npm install lodash --save
  `;

  noteFile = `
    cd ~
    mkdir notes-node && cd notes-node
  `;

  usingLogger = `
const var = true;
  `;

  constructor() { }

  ngOnInit() {
  }

}
