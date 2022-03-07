import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { GenericService } from '../../services/generic.service';
import { Gender } from '../../interface';

@Component({
  selector: 'app-child-view1',
  templateUrl: './child-view1.component.html',
  styleUrls: ['./child-view1.component.css']
})
export class ChildView1Component implements OnInit {
  names: Gender = {
    female: '',
    male: ''
  }

  contactForm: FormGroup;
  constructor(private genericService: GenericService, private formBuilder: FormBuilder) {
    this.createContactForm();
    genericService.receiveNameChange().subscribe(result => {
      this.names = result;
    });
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      newFemaleName: ['']
    });
  }

  ngOnInit(): void {
  }

  broadcastNameChange(isFemale: boolean) {
    const name = this.contactForm.value.newFemaleName;
    this.genericService.broadcastNameChange(name, isFemale);
    this.contactForm.controls.newFemaleName.setValue('');
  }

}
