import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {Question} from '../models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Array<Question>;

  formGroup: FormGroup;
  payload: string;

  constructor() { }

  ngOnInit(): void {
    console.log('\n THIS IS DYNAMIC FORM COMPONENT !!!\n');
    console.log('\n THESE are the questions: \n', this.questions);
    this.formGroup = this.generateForm(this.questions || []); //
    this.payload = '';
  }

  private generateForm(questions: Array<Question>): FormGroup {
    const formControls = questions.reduce(this.generateControl, {});

    console.log('\n generateForm: THIS is the formControls: \n', formControls);
    return new FormGroup(formControls);
  }

  private generateControl(controls: any, question: Question) {
    if(question.required) {
      console.log('\n generateControl: THIS IS THE QUESTION : \n', question);

      controls[question.id] = new FormControl(question.value || '', Validators.required);
    } else {
      controls[question.id] = new FormControl(question.value || '');
    }

    return controls;
  }

  submit() {
    this.payload = JSON.stringify(this.formGroup.value);
  }
}
