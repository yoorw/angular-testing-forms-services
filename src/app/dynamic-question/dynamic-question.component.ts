import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import { Question } from '../models';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent {
  @Input() form: FormGroup;
  @Input() question: Question;

  constructor() { }

  get isValid(): boolean {
    console.log('\n THIS IS DYNAMIC QUESTION COMPONENT !!!\n');
    return this.form.controls[this.question.id].valid;
  }
}
