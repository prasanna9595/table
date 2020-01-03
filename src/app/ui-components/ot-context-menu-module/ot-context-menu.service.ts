import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtContextMenuService {

  private cMenuClose = new Subject<boolean>();
  menuClose$ = this.cMenuClose.asObservable();

  constructor() { }

  close(val: boolean) {
    this.cMenuClose.next(val);
  }
}
