import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Gender } from '../../interface';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  names: Gender = {
    female: '',
    male: ''
  }
  
  constructor(private genericService: GenericService) {
    genericService.receiveNameChange().subscribe(result => {
      this.names = result;
    });
  }

  ngOnInit(): void {
    this.genericService.broadcastNameChange()
  }

}
