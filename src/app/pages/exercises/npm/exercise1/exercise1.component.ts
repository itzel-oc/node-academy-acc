import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {RunkitComponent} from '../../../../shared/runkit/runkit.component';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit, AfterViewInit {

  @ViewChild('runkitOne') firstRunkit: RunkitComponent;

  initProject = `
cd ~ && mkdir logUtil && cd ./logUtil
npm init -y
touch index.js
  `;

  indexFileContent = `
cd ..
node
  `;

  usingLogger = `
let util = require('./logUtil');
util.logger('./logger.txt', 'INFO', 'Hello World!');
fs.readFileSync('./logger.txt', { encoding: 'utf8'}, (err, data) => {
    console.log(data);
});
  `;

  index = "module.exports = {" +
  "  logger: require('./logger')" +
  "};";

  logger = "let path = require('path'); " +
  "let fs = require('fs'); " +
  "module.exports = (logPath, level, message) => { " +
  "let p = path.resolve(logPath); " +
  "let log = new Date().toString() +  '   ' + level + '   ' + message; " +
  "fs.writeFileSync(p, log, (err) => { "+
    " if(err) { " +
      " console.log(err); " +
    " } " +
  " }); " +
" } ";

  usingLoggerPre = '';

  constructor() {
    this.usingLoggerPre =  `
const path = require('path');
const fs = require('fs');
fs.mkdirSync('./logUtil', { recursive: true });
fs.writeFileSync('./logUtil/logger.js', "${ this.logger }");
fs.writeFileSync('./logUtil/index.js', "${ this.index }");
  `;
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
  }

}
