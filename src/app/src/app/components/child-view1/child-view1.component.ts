import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view1',
  templateUrl: './child-view1.component.html',
  styleUrls: ['./child-view1.component.css']
})
export class ChildView1Component implements OnInit {
  @Input() name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
