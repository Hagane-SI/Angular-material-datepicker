import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import moment from 'moment';

moment.locale('es-MX');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [

  ],
})
export class AppComponent {
  title = 'prueba';

  //Variables for date
  date: FormControl;
  today: Date;

  //Variables to set min and max allowed dates
  minDate: Date;
  maxDate: Date;

  //Variables to hold the selected user dates
  startDate: Date;
  endDate: Date;
  dates;
  dates2;

  constructor() {
    this.date = new FormControl(new Date());
    this.today = new Date();
    this.minDate = moment(this.today).subtract(2, 'months').toDate();
    this.maxDate = this.today;
  }

  ngOnInit() {
    
  }

  onDaySelected(event: MatDatepickerInputEvent<Date>) {
    console.log(moment(event.value).format('L'));
    this.dates = (moment(event.value).format('L'));
  }

  onWeekSelected(event: MatDatepickerInputEvent<Date>) {
    const day = moment(event.value).weekday();
    this.startDate = moment(event.value).subtract(day, 'days').toDate();
    this.endDate = moment(event.value).add((6 - day), 'days').toDate();
    console.log("startDate: " + moment(this.startDate).format('L'));
    console.log("endDate: " + moment(this.endDate).format('L'));
    this.dates2 = moment(this.startDate).format('L') + " - " + moment(this.endDate).format('L');
  }


}
