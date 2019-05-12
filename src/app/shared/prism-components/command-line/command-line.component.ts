import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: ['./command-line.component.scss']
})
export class CommandLineComponent implements OnInit {

  @Input() user = 'Beto';
  @Input() dataLine = '';
  @Input() source = '';

  constructor() { }

  ngOnInit() {
  }

}
