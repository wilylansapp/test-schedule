import { employeeEventData } from './data';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { ScheduleData } from './schedule.model';
import { ScheduleService } from './schedule.service';
import {
  ScheduleComponent,
  TimelineMonthService,
  TimelineViewsService,
} from '@syncfusion/ej2-angular-schedule';
import { Component, OnInit, ViewChild } from '@angular/core';
export const views = [
  {
    option: 'TimelineDay',
    timeScale: { slotCount: 1 },
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineWeek',
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    displayName: 'Quadrimestre',
    interval: 4,
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    displayName: 'Semestre',
    interval: 6,
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    displayName: 'Année',
    interval: 12,
    allowVirtualScrolling: false,
  },
];

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
  providers: [TimelineViewsService, TimelineMonthService],
})
export class AppComponent implements OnInit {
  @ViewChild('scheduleObj', null)
  public scheduleObj: ScheduleComponent;
  public linesRessources: any[] = linesRessources;

  students: ScheduleData[] = [];
  public selectedDate: Date = new Date(2022, 8, 1);
  public group = {
    resources: ['lines'],
  };
  public currentView = 'TimelineMonth';
  views = views;
  public eventSettings = { dataSource: employeeEventData };
  public categoryDataSource: Object[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
    { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' },
  ];
  dayWidth: any;

  constructor(private scheduleService: ScheduleService) {}
  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    const studentsObservable = this.scheduleService.getSchedule();
    studentsObservable.subscribe((scheduleData) => {
      let initialData: Object[] = this.scheduleObj.eventSettings.dataSource;
      scheduleData.forEach((element) => {
        initialData.push(element);
      });
      this.eventSettings = {
        dataSource: initialData,
      };
    });
  }
  public onNavigating(event: any): void {
    this.updateHeaderRows(event.currentView, event.viewIndex);
  }
  onRendred(args) {
    if (this.currentView === 'TimelineMonth') {
      this.dayWidth =
        this.dayWidth ??
        document.querySelector('.e-date-header-wrap').clientWidth /
          (new Date(
            this.selectedDate.getFullYear(),
            this.selectedDate.getMonth() + 1,
            0
          ).getDate() *
            this.scheduleObj.activeViewOptions.interval); //to calculate the width of a work cell
      const diffInDay = args.data.data.count; //to calculate number of days an event rendered.
      const td: HTMLElement = document.querySelector(
        '.e-work-cells[data-date="' +
          this.resetTime(args.data.StartTime).getTime() +
          '"]'
      ); //to find the work cell element in which the appointment started
      const left = td ? td.offsetLeft : args.element.style.left; //to calculate the left position of that work cell
      args.element.style.left = left + 'px'; //to assign the above left position to the appointment element
      args.element.style.width = diffInDay * this.dayWidth + 'px'; //to set width for the appointment element.
    }
  }
  onActionComplete(args): void {
    if (
      args.requestType === 'viewNavigate' ||
      args.requestType === 'dateNavigate'
    ) {
      this.dayWidth = null;
    }
  }
  resetTime(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  private updateHeaderRows(currentView: string, viewIndex: number): void {
    switch (currentView) {
      case 'TimelineDay':
        this.scheduleObj.headerRows = [{ option: 'Date' }, { option: 'Hour' }];
        break;

      case 'TimelineWeek':
        this.scheduleObj.headerRows = [{ option: 'Week' }, { option: 'Date' }];
        break;

      case 'TimelineMonth':
        if (viewIndex === 5) {
          this.scheduleObj.headerRows = [
            { option: 'Year' },
            { option: 'Month' },
          ];
        } else {
          this.scheduleObj.headerRows = [
            { option: 'Month' },
            { option: 'Week' },
          ];
        }
        break;
    }
  }
}
