import { Injectable } from '@angular/core';

import {FormData} from './models';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private forms: Array<FormData> = [];

  constructor() { }

  setForms(newForms: Array<FormData>) {
    this.forms = newForms;
  }

  getAllForms() {
    return this.forms;
  }

  getForm(formId: number): FormData {
    let form = this.forms.find((form) => form.id === formId);

    if(!form) {
      form = null;
    }

    return form;
  }
}
