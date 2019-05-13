import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { RunKitEmbedComponent } from 'angular-runkit';

@Component({
  selector: 'app-runkit',
  templateUrl: './runkit.component.html',
  styleUrls: ['./runkit.component.scss']
})
export class RunkitComponent implements OnInit {

  @Input() source = '';
  @Input() preamble = '';

  @ViewChild('embedRunkit') runKitEmbedComponent: RunKitEmbedComponent;

  constructor() { }

  evaluate() {
    this.runKitEmbedComponent.evaluate();
  }

  ngOnInit() {
  }

}
