import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import {Question} from '../models';
import { DynamicQuestionComponent } from './dynamic-question.component';

describe('DynamicQuestionComponent', () => {
  let component: DynamicQuestionComponent;
  let fixture: ComponentFixture<DynamicQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicQuestionComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
  });

  // beforeEach(() => {
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('test');
    const formGroup = new FormGroup({ pizza: formControl });

    component.question = {
      controlType: 'text',
      id: 'pizza',
      label: 'Pizza!',
      required: false
    };

    component.form = formGroup;

    // component.control = formControl;
    expect(component.isValid).toBe(true);
  });
});
