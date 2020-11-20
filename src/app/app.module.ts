import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { FormService } from './form.service';
import {RestService} from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FormService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
