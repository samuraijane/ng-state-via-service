import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-child-view2',
  templateUrl: './child-view2.component.html',
  styleUrls: ['./child-view2.component.css']
})
export class ChildView2Component implements OnInit {
  @Input() name: string | undefined;

  constructor(private genericService: GenericService) { }

  ngOnInit(): void {
  }

  doAlert() {
    this.genericService.alert('fired from Billy');
  }

}
