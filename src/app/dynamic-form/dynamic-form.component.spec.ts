import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import {DynamicQuestionComponent} from '../dynamic-question/dynamic-question.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicFormComponent,
        DynamicQuestionComponent
     ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
  });

  // beforeEach(() => {
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBe(true);
  });

  it('should create a FormControl for each quesetion', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];
    component.ngOnInit();

    expect(Object.keys(component.formGroup.controls)).toEqual([
      'first', 'second'
    ]);
  });

  it('should set the payload to a stringified version of our form values', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];
    component.ngOnInit();

    component.formGroup.controls['first'].setValue('pizza');
    component.submit();

    expect(component.payload).toEqual(JSON.stringify({first: 'pizza', second: ''}));
  });
});
