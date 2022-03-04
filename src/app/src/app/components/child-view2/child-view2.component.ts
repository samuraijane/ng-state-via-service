import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view2',
  templateUrl: './child-view2.component.html',
  styleUrls: ['./child-view2.component.css']
})
export class ChildView2Component implements OnInit {
  @Input() name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
