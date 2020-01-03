import { OtNotificationService } from './../../ot-notfications-module/ot-notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crp-ot-demonotification',
  templateUrl: './notification-demo.component.html',
  styleUrls: ['./notification-demo.component.scss']
})
export class OtNotificationDemoComponent implements OnInit {

  constructor(private notificationService: OtNotificationService) { }

  ngOnInit() {
  }
  pushNotification() {
      this.notificationService.pushNotification({
          message : 'Application have been successfully submitted for Paracetemol-500mg-NDA',
          type   : 'success',
          interval : 3000
      });
  }
}
