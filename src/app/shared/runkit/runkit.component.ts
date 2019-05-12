import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-runkit',
  templateUrl: './runkit.component.html',
  styleUrls: ['./runkit.component.scss']
})
export class RunkitComponent implements OnInit {

  @Input() source = '';
  @Input() preamble = '';

  constructor() { }

  ngOnInit() {
  }

}
