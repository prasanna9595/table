export interface IOtDatePickerConfig {
    minDate?: string;
    maxDate?: string;
    lang?: string;
    isActive: boolean;
}

export interface IOtDatePickerResponse {
    selectedDate?: any;
    multiSelectedDates?: any[];
}


export interface IDates {
    date: number;
    day: number | string;
    isToday: boolean;
    month: number;
    year: number;
    isDisabled: boolean;
}


export interface IMonthsAndYear {
    title: string | number;
    isActive: boolean;
}
