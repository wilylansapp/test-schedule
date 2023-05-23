import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonAllModule,
  CheckBoxAllModule,
} from '@syncfusion/ej2-angular-buttons';
import {
  DatePickerAllModule,
  DateTimePickerAllModule,
  TimePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';
import {
  DropDownListAllModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';
import {
  MaskedTextBoxModule,
  NumericTextBoxAllModule,
  UploaderAllModule,
} from '@syncfusion/ej2-angular-inputs';
import {
  ContextMenuAllModule,
  ToolbarAllModule,
  TreeViewModule,
} from '@syncfusion/ej2-angular-navigations';
import {
  RecurrenceEditorAllModule,
  ScheduleAllModule,
} from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
