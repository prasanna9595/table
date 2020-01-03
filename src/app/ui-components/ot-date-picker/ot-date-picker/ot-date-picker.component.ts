import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { IOtDatePickerConfig, IOtDatePickerResponse, IDates } from '../ot-date-picker';
import { OtDatePickerService } from '../ot-date-picker.service';

@Component({
    selector: 'crp-ot-date-picker',
    templateUrl: './ot-date-picker.component.html',
    styleUrls: ['./ot-date-picker.component.scss']
})
export class OtDatePickerComponent implements OnInit, OnChanges {

    // Datepicker prerequisite - Min & Max Dates and Language ex: 'en-us'
    @Input() config: IOtDatePickerConfig;

    // Return processed data to subscribers/consumers
    @Output() OnSelection = new EventEmitter<IOtDatePickerResponse>();

    currentMonth: any;
    currentYear: number;
    yearsList: any[] = [];
    monthYearPanel: boolean;
    tempStorage = new Map<string, any>();
    calendarPanel: boolean;
    datePickerSelcetedValue: string;
    error: string;
    @ViewChild('datepicker', { static: true }) datepickerIns: ElementRef;

    // Defaults
    startYear = new Date().getFullYear() - 100;
    weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
    dates: any[];

    constructor(
        private dps: OtDatePickerService,
        private cdr: ChangeDetectorRef
    ) {
        this.monthYearPanel = false;
        this.calendarPanel = false;
        this.datePickerSelcetedValue = '';
    }

    ngOnInit() {
        const dateObj = new Date();
        this.updateCurrentYearMonth(dateObj.getMonth(), dateObj.getFullYear());
        this.currentYear = dateObj.getFullYear();

        this.getYears(this.currentYear);

    }

    ngOnChanges() {
        if (this.config) {
            this.calendarPanel = this.config.isActive;
            this.monthYearPanel = false;
        }
    }

    // Getting 100 years back from now
    getYears(year: number) {
        for (let i = year; i > (year - 100); i--) {
            this.yearsList.push(i);
        }
    }

    // Calendar Initiate
    calInit(month: number, year: number, dateVal?: any) {
        this.monthYearPanel = false;
        const date = new Date(Date.UTC(year, month, 1));
        let tempDates: IDates;
        const days = [];

        while (date.getMonth() === month) {
            tempDates = {
                date: new Date(date).getDate(),
                day: new Date(date).getDay(),
                isToday: this.highlightSelectedDate(date, dateVal),
                month: date.getMonth(),
                year: date.getFullYear(),
                isDisabled: this.dps.compareDates(this.config.minDate, this.config.maxDate, date)
            };
            days.push(tempDates);
            date.setDate(date.getDate() + 1);
        }

        this.dates = days;
        const startFrom = this.dates[0].day;

        // Adding null values for previous dates
        if (startFrom) {
            for (let i = 0; i < startFrom; i++) {
                const addNullDates: IDates = {
                    date: null,
                    day: i,
                    isToday: false,
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    isDisabled: false
                };
                this.dates.splice(i, 0, addNullDates);
            }
        }
    }

    // Calendar Next & Previous
    showNextPrevMonth(event: any, direction: string) {
        event.stopPropagation();
        if (direction === 'prev') {
            this.currentMonth = {
                name: this.months[this.currentMonth.index - 1],
                index: this.currentMonth.index - 1
            };
            if (this.currentMonth.index < 0) {
                this.currentMonth = {
                    name: this.months[this.months.length - 1],
                    index: this.months.length - 1
                };
                this.currentYear = this.currentYear - 1;
            }

        } else {

            if (this.currentMonth.index >= this.months.length - 1) {
                this.currentMonth = {
                    name: this.months[0],
                    index: 0
                };
                this.currentYear = this.currentYear + 1;
            } else {
                this.currentMonth = {
                    name: this.months[this.currentMonth.index + 1],
                    index: this.currentMonth.index + 1
                };
            }
        }

        this.calInit(this.currentMonth.index, this.currentYear,
            this.datePickerSelcetedValue ? new Date(this.datePickerSelcetedValue).getDate() : null);
    }

    // Show Month & Year selection panel
    showMonthYear(event: any) {
        this.monthYearPanel = !this.monthYearPanel;
        event.stopPropagation();
    }

    // Storing the previous selections before going to change month & year
    updateCalByYearMonthSelction(val: string, objType: string, index: number) {
        if (objType === 'months') {
            if (!this.tempStorage.get(objType)) {
                this.tempStorage.set(objType, JSON.stringify(this.currentMonth));
            }
            this.currentMonth.name = val;
            this.currentMonth.index = index;
        } else {
            if (!this.tempStorage.get(objType)) {
                this.tempStorage.set(objType, JSON.stringify(this.currentYear));
            }
            this.currentYear = parseInt(val, 10);
        }
    }

    // Re-storing saved values and re-binding to controls
    clearCalSelection() {

        try {
            this.monthYearPanel = false;
            const months = JSON.parse(this.tempStorage.get('months'));
            const years = JSON.parse(this.tempStorage.get('years'));

            this.currentMonth.name = months.name;
            this.currentMonth.index = months.index;
            this.currentYear = years;
        } catch (error) {

        }

    }

    // Dates selection conditions
    highlightSelectedDate(month: any, val?: any): boolean {
        const todayDate = new Date();
        const userDate = new Date(val);

        if (!val) {
            return todayDate.getDate() === month.getDate()
                && todayDate.getMonth() === month.getMonth()
                && todayDate.getFullYear() === month.getFullYear();
        } else {
            return userDate.getDate() === month.getDate()
                && userDate.getMonth() === month.getMonth()
                && userDate.getFullYear() === month.getFullYear();
        }

    }

    // Datepicker pnale enable
    calendarActive(from?: string) {
        this.config.isActive = true;
        this.calendarPanel = this.config.isActive;
        this.datePickerSelcetedValue = this.datepickerIns.nativeElement.value;
        if (from && !this.datePickerSelcetedValue) {
            this.resetCal();
        }
    }

    // On Focus update calendar
    onFocusUpdateCalendar(event: any) {
        event.stopPropagation();
        this.error = null;
        if (event.target.value && event.target.value !== this.dps.getDefaultFormat()) {
            const dateObj = new Date(event.target.value);
            if (dateObj.toString() !== 'Invalid Date') {
                this.datePickerSelcetedValue = dateObj.toLocaleDateString();
                this.updateCurrentYearMonth(dateObj.getMonth(), dateObj.getFullYear());
                this.calendarActive();
                this.calInit(dateObj.getMonth(), dateObj.getFullYear(), this.datePickerSelcetedValue);
                return false;
            } else {
                this.error = 'Enter valid date';
                this.datePickerSelcetedValue = '';
                this.cdr.detectChanges();
                return false;
            }
        } else {
            this.datePickerSelcetedValue = '';
        }

        this.calendarActive();
        this.calInit(this.currentMonth.index, this.currentYear);
    }

    // On Blur/Focusour update calendar
    onBlurDateValidation(event: any) {
        setTimeout(() => {
            if (!this.calendarPanel) {
                // if (this.datePickerSelcetedValue) {
                const dateObj = new Date(event.target.value);
                if (dateObj.toString() === 'Invalid Date') {
                    this.error = 'Enter valid date';
                    this.datePickerSelcetedValue = '';
                    this.resetCal();
                    this.cdr.detectChanges();
                    return false;
                } else {
                    this.error = null;
                }
                // }
            } else {
                this.datePickerSelcetedValue = event.target.value;
            }
        }, 300);
    }

    // Restricting alphabet on KeyPress
    restricString(event: any) {
        this.error = null;

        if (event.which >= 97 && event.which <= 122) {
            this.datePickerSelcetedValue = event.target.value.substring(0, 0);
            return false;
        }
    }

    // Key Up
    onKeyUpUpdateCalendar(event: any) {
        this.error = null;
        const dateObj = new Date(event.target.value);
        if (dateObj.toString() !== 'Invalid Date') {
            this.updateCurrentYearMonth(dateObj.getMonth(), dateObj.getFullYear());
            this.calInit(dateObj.getMonth(), dateObj.getFullYear(), event.target.value);
        }

    }

    // Emitting selected data info
    getSelectedDate(event: any, date: any) {
        const newDate = new Date(date.year, date.month, date.date);
        this.OnSelection.emit({
            selectedDate: newDate
        });
        this.calendarPanel = false;
        this.datePickerSelcetedValue = this.dps.getFormat(newDate);
        event.stopPropagation();
    }

    onCalClick(event: any) {
        event.stopPropagation();
    }

    // Reset Calendar
    resetCal() {
        const dateObj = new Date();
        this.calInit(dateObj.getMonth(), dateObj.getFullYear());
        this.updateCurrentYearMonth(dateObj.getMonth(), dateObj.getFullYear());
    }

    updateCurrentYearMonth(month: number, year: number) {
        this.currentMonth = {
            name: this.months[month],
            index: month
        };
        this.currentYear = year;
    }

    // Get Styling for date
    getDateStyles(dateObj: any) {
        let cssString = '';

        if (dateObj.date !== null) {
            cssString = (dateObj.isToday ? 'ot-today-active' : '');
        } else {
            cssString = 'no-border';
        }

        if (dateObj.isDisabled) {
            cssString = 'ot-date-disbaled';
        }

        return cssString;

    }

}
