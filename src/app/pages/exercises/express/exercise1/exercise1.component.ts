import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {

  runkitEndpoint = `
const express = require("@runkit/runkit/express-endpoint/1.0.0");
const app = express(exports);
  `;

  appFile = `
app.get('/customers', (req, res) => res.json([
  {
    name: 'John',
    lastName: 'Doe',
    email: 'Doe@gmail.com'
  }, {
    name: 'Jose',
    lastName: 'Perez',
    email: 'Jose@gmail.com'
  }
 ]))
  `;

  webServerFile = `
const app = require(../app);
const port = 3000;
app.listen(port, () => {
  console.log('Listening in port ' + port);
});
  `;

  constructor() {
    this.runkitEndpoint = this.runkitEndpoint.replace(/(\r\n|\n|\r)/gm, ' ');
  }

  ngOnInit() {
  }

}
