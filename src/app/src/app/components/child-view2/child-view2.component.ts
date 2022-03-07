import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { GenericService } from '../../services/generic.service';
import { Gender } from '../../interface';

@Component({
  selector: 'app-child-view2',
  templateUrl: './child-view2.component.html',
  styleUrls: ['./child-view2.component.css']
})
export class ChildView2Component implements OnInit {
  names: Gender = {
    female: '',
    male: ''
  }

  contactForm2: FormGroup;
  constructor(private genericService: GenericService, private formBuilder: FormBuilder) {
    this.createContactForm();
    genericService.receiveNameChange().subscribe(result => {
      this.names = result;
    });
  }

  createContactForm(){
    this.contactForm2 = this.formBuilder.group({
      newMaleName: ['']
    });
  }

  ngOnInit(): void {
  }

  broadcastNameChange() {
    const name = this.contactForm2.value.newMaleName;
    this.genericService.broadcastNameChange(name, false);
    this.contactForm2.controls.newMaleName.setValue('');
  }

}
