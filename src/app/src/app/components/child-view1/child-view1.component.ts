import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-child-view1',
  templateUrl: './child-view1.component.html',
  styleUrls: ['./child-view1.component.css']
})
export class ChildView1Component implements OnInit {
  @Input() name: string | undefined;

  constructor(private genericService: GenericService) {
    genericService.receiveNameChange().subscribe(result => {
      console.log('Broadcasting and receiving has occurred.');
    })
  }

  ngOnInit(): void {
  }

  doAlert() {
    this.genericService.alert('fired from Anna');
  }

  broadcastNameChange() {
    this.genericService.broadcastNameChange();
  }

}
