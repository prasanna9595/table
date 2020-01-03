import { OtNotification } from './ot-notification.interface';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class OtNotificationService {
    private notification: OtNotification;
    private notificationSubject = new Subject<OtNotification>();
    private dismissNotification;
    constructor() { }
    public getNotification(): Observable<OtNotification> {
        return this.notificationSubject;
    }
    public pushNotification(notification: OtNotification) {
        this.notification = notification;
        this.notificationSubject.next(notification);
        this.dismissNotification = setTimeout(() => {
            this.dismissActiveNotification();
        }, notification.interval);
    }
    public dismissActiveNotification() {
        this.notificationSubject.next(null);
        clearTimeout(this.dismissNotification);
    }
}
