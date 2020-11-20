import { Component } from '@angular/core';

import {FormService} from './form.service';
import {Question, FormData} from '../app/models';
import {RestService} from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  forms: FormData[] = null;
  selectedForm: FormData = null;

  constructor(
    private formService: FormService,
    restService: RestService
  ) {
  //   restService.getForms().subscribe((forms: FormData[]) => {
  //     this.formService.setForms(forms);
  //     this.forms = this.formService.getAllForms();
  //   });
  // }

  // selectForm(formId: number) {
  //   this.selectedForm = this.formService.getForm(formId);
  // }



    formService.setForms([
      {
        id: 1,
        questions: [
          {
            controlType: 'radio',
            id: 'doyou',
            label: 'Do you like pizza?',
            options: [
                { label: 'Yes', value: 1 },
                { label: 'Of course', value: 2 }
            ],
            required: true
        },
        {
            controlType: 'select',
            id: 'favorite',
            label: 'Which is your favorite pizza?',
            options: [
                { label: '', value: 'no-answer' },
                { label: 'Anchovie', value: 'fish' },
                { label: 'Hawaiian', value: 'pineapple-ham' },
                { label: 'Meat Lover\'s', value: 'meat lover' },
                { label: 'Veggie', value: 'vegetable' }
            ],
            required: false
        },
        {
            controlType: 'textarea',
            id: 'more',
            label: 'Gives us your thoughts on pizza:',
            required: false
        }
            ],
        title: 'Pizza Perfection'
      }
    ]);
    this.forms = formService.getAllForms();
  }

  selectForm(formId: number) {
    this.selectedForm = this.formService.getForm(formId);
  }

   //   formService.setForms([
  //     {
  //       id: 1,
  //       questions: [
  //         {
  //           controlType: 'radio',
  //           id: 'doyou',
  //           label: 'Do you like pizza?',
  //           options: [
  //               { label: 'Yes', value: 1 },
  //               { label: 'Of course', value: 2 }
  //           ],
  //           required: true
  //       },
  //       {
  //           controlType: 'select',
  //           id: 'favorite',
  //           label: 'Which is your favorite pizza?',
  //           options: [
  //               { label: '', value: 'no-answer' },
  //               { label: 'Anchovie', value: 'fish' },
  //               { label: 'Hawaiian', value: 'pineapple-ham' },
  //               { label: 'Meat Lover\'s', value: 'meat lover' },
  //               { label: 'Veggie', value: 'vegetable' }
  //           ],
  //           required: false
  //       },
  //       {
  //           controlType: 'textarea',
  //           id: 'more',
  //           label: 'Gives us your thoughts on pizza:',
  //           required: false
  //       }
  //           ],
  //       title: 'Pizza Perfection'
  //     }
  //   ]);
  //   this.form = formService.getForm(1);
  // }
}
