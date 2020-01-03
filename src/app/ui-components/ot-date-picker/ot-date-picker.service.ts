import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtDatePickerService {

  private defaultFormate = 'MM/DD/YYYY';

  constructor() { }

  getDefaultFormat() {
    return this.defaultFormate;
  }

  OnLoad() {

  }
  OnDestrory() {

  }

  // GetSelectedAllDates

  // GetSelectedDate

  // GetTime

  GetLocalDateString() {

  }

  getFormat(date: any, format?: string) {
    if (!format) {
      return new Date(date).toLocaleDateString();
    }
  }

  isValidDate(value: any) {
    // tslint:disable-next-line: max-line-length
    const regExp = new RegExp(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/);
    return !regExp.test(value) ? false : true;

  }

  compareDates(minDate: any, maxDate: any, currentMonth: any) {
    const cMonth = new Date(currentMonth);
    const min = new Date(minDate);
    min.setDate(min.getDate() + 1);
    const max = new Date(maxDate);

    if (!minDate && !maxDate) {
      return false;
    }

    if (min.getTime() < cMonth.getTime() && max.getTime() > cMonth.getTime()) {
      return false;
    } else {
      return true;
    }

  }
}
