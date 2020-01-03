import { DemoComponent } from './demo/demo.component';
import { OtModalService } from './../ot-modal-module/ot-modal.service';
import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { OtContextMenu } from '../ot-context-menu-module/ot-context-menu.interface';
import { OtBreadCrumb } from '../ot-bread-crumb-module/ot-bread-crumb.interface';
import { OtBreadCrumbList } from '../ot-bread-crumb-module/ot-bread-crumb-list.interface';
import { IOtTableColumns, MockData } from '../ot-table-module/ot-table-columns.interface';
import { HttpGatewayService } from 'src/app/services/http-gateway.service';
import { OtTabs } from '../ot-tabs-module/ot-tabs.interface';
import { OtButton } from '../ot-button-module/ot-button.interface';
import { OtContextMenuService } from '../ot-context-menu-module/ot-context-menu.service';
import { IOtDatePickerConfig } from '../ot-date-picker/ot-date-picker';
@Component({
  selector: 'crp-ui-home',
  templateUrl: './ui-home.component.html',
  styleUrls: ['./ui-home.component.scss']
})
export class UiHomeComponent implements OnInit {

  showItem: string;
  otContextMenu: OtContextMenu;
  toggleV: boolean;
  breadcrumbs: OtBreadCrumb;
  breadcrumbsPrimary: OtBreadCrumb;
  tData: any;
  tColumnsList: IOtTableColumns[];
  rowActionList: OtContextMenu;
  tabs: OtTabs[];
  buttons: OtButton[];
  align: string;
  message: string;
  datePickerConfig: IOtDatePickerConfig;
  tempDates: any[] = [];

  constructor(
    private modalService: OtModalService,
    private httpS: HttpGatewayService,
    private otCms: OtContextMenuService,
    private cdr: ChangeDetectorRef
  ) {

    this.datePickerConfig = {
      isActive: false,
      minDate: null, // '12/05/2019',
      maxDate: null // '02/05/2020'
    };
  }


  ngOnInit() {

    this.tabs = [
      { name: 'Overview', isActive: true },
      { name: 'Documents', countBadge: 143 },
      { name: 'Info' },
      { name: 'Related' }
    ];
    this.buttons = [
      { name: 'Primary Button', type: 'Primary', viewType: 'Normal', buttonSize: 'Large' },
      { name: 'Secondary Button', type: 'Secondary', viewType: 'Outlined', buttonSize: 'Small' }
    ];
    this.align = 'Left';
    this.message = 'Thiszz tooltip';
    this.showItem = 'datePicker';
    this.toggleV = false;
    this.otContextMenu = {
      menulist: [
        {
          title: 'Create',
          icon: 'assets/icons/add.svg'
        },
        {
          title: 'View',
          icon: 'assets/icons/add.svg'
        },
        {
          title: 'Edit',
          icon: 'assets/icons/add.svg'
        },
        {
          title: 'Delete',
          icon: 'assets/icons/add.svg'
        }
      ],
      displayOptions:
      {
        icon: 'assets/icons/add.svg',
        size: 16,
        position: 'left'
      },
      isUserMenu: false
    };
    const breadCrumbsList: OtBreadCrumbList[] = [
      {
        name: 'Factory',
        link: '/factory',
        isActive: false
      },
      {
        name: 'Manufacturing Unit',
        link: '/',
        isActive: false
      },
      {
        name: 'Components',
        link: '',
        isActive: false
      },
      {
        name: 'Pumps',
        link: '',
        isActive: false
      },
      {
        name: 'Water Pumps',
        link: '',
        isActive: false
      },
      {
        name: 'Motors',
        link: '',
        isActive: false
      },
      {
        name: 'Induction Motor',
        link: '',
        isActive: false
      },
      {
        name: 'Multi Guage',
        link: '',
        isActive: false
      },
      {
        name: 'Wireless Chip',
        link: '',
        isActive: false
      },
      {
        name: 'MicroChip',
        link: '',
        isActive: false
      },
      {
        name: 'Services',
        link: '',
        isActive: false
      },
      {
        name: 'Control Devices',
        link: '',
        isActive: false
      },
      {
        name: 'Light Emitted Diodes',
        link: '',
        isActive: false
      },
      {
        name: 'Incandescent',
        link: '',
        isActive: false
      },
      {
        name: 'Companion',
        link: '',
        isActive: true
      }
    ];
    this.breadcrumbs = {
      type: 'standard',
      list: [{
        name: 'Factory',
        link: '',
        isActive: false
      },
      {
        name: 'Manufacturing Unit',
        link: '',
        isActive: false
      },
      {
        name: 'Components',
        link: '',
        isActive: true
      }]
    };
    this.breadcrumbsPrimary = {
      type: 'primary',
      list: breadCrumbsList
    };
    this.showData('mock');

    this.tabs = [
      { name: 'Overview', isActive: true },
      { name: 'Documents', countBadge: 143 },
      { name: 'Info' },
      { name: 'Related' }
    ];
    this.buttons = [
      { name: 'Primary Button', type: 'Primary', viewType: 'Normal', buttonSize: 'Large' },
      { name: 'Secondary Button', type: 'Secondary', viewType: 'Outlined', buttonSize: 'Small' }
    ];
    this.align = 'Left';
    this.message = 'Thiszz tooltip';

    this.rowActionList = this.otContextMenu;
    this.rowActionList.displayOptions.position = 'right';
  }

  showData(from: string) {
    if (from === 'API') {
      this.httpS.getTocData().subscribe(res => {
        this.tData = res;
        this.tColumnsList = this.getColumns(res);
      });
    } else {
      this.tColumnsList = [
        { title: '#', property: null, type: 'input', visibility: true },
        { title: 'Image', property: 'Url', type: 'image', visibility: true },
        { title: 'Id', property: 'Id', type: 'text', visibility: true },
        { title: 'Frist Name', property: 'FirstName', type: 'text', visibility: true },
        { title: 'Last Name', property: 'LastName', type: 'text', visibility: true },
        { title: 'Email', property: 'Email', type: 'text', visibility: true },
        { title: 'Gender', property: 'Gender', type: 'text', visibility: true },
        { title: 'IP', property: 'Ip_Address', type: 'text', visibility: false },
        { title: 'Actions', property: null, type: 'actions', visibility: true }
      ];
      this.tData = MockData;
      // this.tColumns = this.getColumns(MockData);
    }

  }

  // Get columns from API response
  getColumns(data: any) {
    const columnsList = [];

    Object.keys(data[0]).map(k => {
      const columns: IOtTableColumns[] = [
        {
          title: k.replace(/([A-Z])/g, ' $1').trim(),
          type: 'text',
          property: k,
          visibility: true
        }
      ];

      columnsList.push(columns[0]);
    });

    return columnsList;

  }

  // Get table row data by click
  getRowSelection(event) {
    console.log('Row Data || Row Actions check type key in object ', event);
  }

  doSelectedAction(event) {
    console.log(event);
    console.log('this got selected');
  }

  openModal() {
    const modalContainer = document.getElementById('modalViewContainer');
    this.modalService.setRootViewContainerRef(modalContainer);
    this.modalService.addModalComponent(DemoComponent);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {

    if (event.target.className.indexOf('ot-dropdown__icon') === -1) {
      this.otCms.close(false);
    }

    // Date picker
    if (this.datePickerConfig
      && event.target.className.indexOf('date-picker-view') === -1
      && event.target.className !== 'ot-datepicker'
      && event.target.className !== 'ot-cal-icon-img') {
      this.datePickerConfig = {
        isActive: false
      };
    }
  }

  getDatePickerResponse(res: any) {
    this.tempDates.push(res.selectedDate);
  }

}
