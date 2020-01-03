import { OtNotification } from './../ot-notification.interface';
import { OtNotificationService } from './../ot-notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
    selector: 'crp-ot-notification',
    templateUrl: './ot-notification.component.html',
    styleUrls: ['./ot-notification.component.scss'],
    animations: [
        trigger('enableNotificationAnimation', [
          transition(':enter', [
            style({
              transform: 'translateY(-100%)',
              opacity: 0
            }),
            animate('0.35s', style({
              transform: 'translateY(0)',
              opacity: 1
            }))
          ]),
          transition(':leave', [
            animate('0.2s', style({
              transform: 'translateY(-100%)',
              opacity: 0
            }))
          ])
        ])
      ]
})
export class OtNotificationComponent implements OnInit, OnDestroy {
    private notificationSubscription: Subscription;
    notification: OtNotification;
    constructor(private notificationService: OtNotificationService) { }

    ngOnInit() {
        this.notificationSubscription = this.notificationService.getNotification().subscribe((pushedNotification: OtNotification) => {
            this.notification = pushedNotification;
        });
    }
    ngOnDestroy() {
        this.notificationSubscription.unsubscribe();
    }
    public clearNotification() {
        this.notificationService.dismissActiveNotification();
    }
}
