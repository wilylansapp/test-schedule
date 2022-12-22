import { Component, ViewChild, OnInit } from '@angular/core';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import {
  ScheduleComponent,
  EventSettingsModel,
  View,
  TimelineViewsService,
  AgendaService,
  GroupModel,
  ResizeService,
  DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
import { employeeEventData } from './data';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { ScheduleData } from './schedule.model';
import { ScheduleService } from './schedule.service';
export const linesRessources = [
  {
    text: 'Cycle PO',
    id: 1,
    color: '#AEB18A',
    typeId: 0,
    Count: 0,
    ClassName: 'e-child-node',
  },
  {
    id: 2,
    typeId: 1,
    originalId: 126,
    text: '1RTIR',
    niveau: 4,
    color: '#AEB18A',
    uniteEcussonClass: 'ecusson-00BW000',
    Count: 0,
    ClassName: 'e-child-node',
  },
  {
    id: 3,
    typeId: 1,
    originalId: 150,
    text: '1RTIR - EM',
    niveau: 5,
    color: '#AEB18A',
    uniteEcussonClass: 'ecusson-00BW150',
    Count: 0,
    ClassName: 'e-child-node',
  },
  {
    id: 4,
    typeId: 1,
    originalId: 132,
    text: '1RTIR - 1 CIE',
    niveau: 5,
    color: '#AEB18A',
    uniteEcussonClass: 'ecusson-00BW132',
    Count: 0,
    ClassName: 'e-child-node',
  },
  {
    id: 5,
    typeId: 1,
    originalId: 138,
    text: '1RTIR - 2 CIE',
    niveau: 5,
    color: '#AEB18A',
    uniteEcussonClass: 'ecusson-00BW138',
    Count: 0,
    ClassName: 'e-child-node',
  },
  {
    id: 6,
    typeId: 1,
    originalId: 144,
    text: '1RTIR - 3 CIE',
    niveau: 5,
    color: '#AEB18A',
    uniteEcussonClass: 'ecusson-00BW144',
    Count: 0,
    ClassName: 'e-child-node',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    TimelineViewsService,
    AgendaService,
    ResizeService,
    DragAndDropService,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('scheduleObj', null)
  public scheduleObj: ScheduleComponent;
  public linesRessources: any[] = linesRessources;

  students: ScheduleData[] = [];
  public selectedDate: Date = new Date(2018, 3, 4);
  public group: GroupModel = {
    resources: ['lines'],
  };
  public eventSettings: EventSettingsModel = { dataSource: employeeEventData };
  public categoryDataSource: Object[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
    { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' },
  ];

  constructor(private scheduleService: ScheduleService) {}
  ngOnInit() {}
  onActionComplete(args): void {
    if (args.requestType === 'dateNavigate') {
      this.getEvents();
    }
  }

  getEvents() {
    const studentsObservable = this.scheduleService.getSchedule();
    studentsObservable.subscribe((scheduleData: ScheduleData[]) => {
      let initialData: Object[] = <Object[]>(
        extend([], this.scheduleObj.eventSettings.dataSource, null, true)
      );
      scheduleData.forEach((element) => {
        if (element.Id < 16) {
          initialData.push(element);
        }
      });
      this.eventSettings = {
        dataSource: initialData,
      };
    });
  }
}
