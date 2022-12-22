import { Injectable } from '@angular/core';
import { ScheduleData } from './schedule.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  public getSchedule(): any {
    const scheduleObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
    return scheduleObservable;
  }

  students: ScheduleData[] = [
    {
      Id: 11,
      Subject: 'Project Output Preview',
      StartTime: new Date(2018, 3, 9, 11),
      EndTime: new Date(2018, 3, 9, 12),
      TaskId: 1,
    },
    {
      Id: 12,
      Subject: 'Testing Project Quality',
      StartTime: new Date(2018, 3, 10, 11),
      EndTime: new Date(2018, 3, 10, 12),
      TaskId: 2,
    },
    {
      Id: 13,
      Subject: 'Draft Technical Documentation',
      StartTime: new Date(2018, 3, 11, 11),
      EndTime: new Date(2018, 3, 11, 12),
      TaskId: 3,
    },
    {
      Id: 14,
      Subject: 'Online Hosting of Project',
      StartTime: new Date(2018, 3, 12, 11),
      EndTime: new Date(2018, 3, 12, 12),
      TaskId: 4,
    },
    {
      Id: 15,
      Subject: 'Project Output Preview',
      StartTime: new Date(2018, 3, 13, 11),
      EndTime: new Date(2018, 3, 13, 12),
      TaskId: 5,
    },
    {
      Id: 16,
      Subject: 'Testing',
      StartTime: new Date(2018, 3, 6, 13),
      EndTime: new Date(2018, 3, 6, 14),
      TaskId: 6,
    },
    {
      Id: 17,
      Subject: 'Testing',
      StartTime: new Date(2018, 3, 2, 13),
      EndTime: new Date(2018, 3, 2, 14),
      TaskId: 1,
    },
    {
      Id: 18,
      Subject: 'Testing',
      StartTime: new Date(2018, 3, 3, 13),
      EndTime: new Date(2018, 3, 3, 14),
      TaskId: 2,
    },
    {
      Id: 19,
      Subject: 'Testing',
      StartTime: new Date(2018, 3, 4, 13),
      EndTime: new Date(2018, 3, 4, 14),
      TaskId: 3,
    },
    {
      Id: 20,
      Subject: 'Testing',
      StartTime: new Date(2018, 3, 5, 13),
      EndTime: new Date(2018, 3, 5, 14),
      TaskId: 4,
    },
  ];

  constructor() {}
}
