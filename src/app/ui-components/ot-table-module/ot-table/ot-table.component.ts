import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { IOtTableColumns, MockData } from '../ot-table-columns.interface';
import { OtContextMenu } from '../../ot-context-menu-module/ot-context-menu.interface';
import { HttpGatewayService } from 'src/app/services/http-gateway.service';
import { OtContextMenuService } from '../../ot-context-menu-module/ot-context-menu.service';

@Component({
  selector: 'crp-ot-table',
  templateUrl: './ot-table.component.html',
  styleUrls: ['./ot-table.component.scss']
})
export class OtTableComponent implements OnInit {

  // Columns Input
  @Input() tColumns: IOtTableColumns[];

  // Data source input
  @Input() dataSource: any[];

  // Columns Input
  @Input() rowActions: OtContextMenu;

  // Sort input
  @Input() sort: string;

  // Per page
  perPage: any[];

  // Row click emit
  @Output() rowData = new EventEmitter<any>();

  // Pagination
  pagination: any[];
  private prevSortVal: string;
  showSortIcon: string;
  sortDirection: string;
  toggleV: boolean;
  viewActions: any = {};
  pos: string;
  msg: string;
  showSort: any;

  constructor(
    private httpS: HttpGatewayService,
    private otCms: OtContextMenuService
  ) {
  }

  ngOnInit() {

    this.perPage = [10, 20, 50, 100, 'All'];
    // this.tColumns = this.getColumns(MockData);

    // this.showData('mock');

  }

  // showData(from: string) {
  //   if (from === 'API') {
  //     this.httpS.getTocData().subscribe(res => {
  //       this.dataSource = res;
  //       this.tColumns = this.getColumns(res);
  //     });
  //   } else {
  //     this.tColumns = [
  //       { title: '#', property: null, type: 'input', visibility: true },
  //       { title: 'Image', property: 'Url', type: 'image', visibility: true },
  //       { title: 'Id', property: 'Id', type: 'text', visibility: true },
  //       { title: 'Frist Name', property: 'FirstName', type: 'text', visibility: true },
  //       { title: 'Last Name', property: 'LastName', type: 'text', visibility: true },
  //       { title: 'Email', property: 'Email', type: 'text', visibility: true },
  //       { title: 'Gender', property: 'Gender', type: 'text', visibility: true },
  //       { title: 'IP', property: 'Ip_Address', type: 'text', visibility: false },
  //       { title: 'Actions', property: null, type: 'actions', visibility: true }
  //     ];
  //     this.dataSource = MockData;
  //     // this.tColumns = this.getColumns(MockData);
  //   }

  //   this.prevSortVal = this.tColumns[0].title;
  //   this.showSortIcon = this.prevSortVal;
  //   this.sortDirection = 'desc';
  // }

  // // Get columns from API response
  // getColumns(data: any) {
  //   const columnsList = [];

  //   Object.keys(data[0]).map(k => {
  //     const columns: IOtTableColumns[] = [
  //       {
  //         title: k.replace(/([A-Z])/g, ' $1').trim(),
  //         type: 'text',
  //         property: k,
  //         visibility: true
  //       }
  //     ];

  //     columnsList.push(columns[0]);
  //   });

  //   return columnsList;

  // }

  // Show hide columns in table
  showColumns(colIndex: number, event: any) {
    this.tColumns[colIndex].visibility = event.target.checked;
  }

  sortBy(val: string) {
    if (this.prevSortVal !== val) {
      this.prevSortVal = val;
      this.showSortIcon = val;
      this.sortDirection = 'desc';
      this.dataSource.sort((a, b) => {
        if (a[val] > b[val]) {
          return -1;
        } else if (a[val] > b[val]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      this.dataSource.reverse();
      this.showSortIcon = this.prevSortVal;
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
  }

  // Get data from clicked cell and row
  getCellClick(event: any, rowIndex: number, cellHeader: string) {
    event.stopPropagation();

    // Clicked cell info and row data sending to parent
    this.rowData.emit({
      type: 'data',
      cellHeader,
      data: this.dataSource[rowIndex]
    });

    this.otCms.close(false);
  }

  getRowActions(item: any, rowindex: number) {
    this.rowData.emit({
      type: 'actions',
      actionData: item,
      rowIndex: rowindex
    });
  }

  toggle(index: number) {
    index = index + 1;

    Object.keys(this.viewActions).forEach((key) => {
      // Making sure that current index doesn't change
      if (index.toString() !== key) {
        this.viewActions[key] = false;
      }
    });

    // Making all other action invisible
    if (this.viewActions && this.viewActions.hasOwnProperty(index)) {
      // Toggle the state if clicked index is same
      this.viewActions[index] = !this.viewActions[index];
    } else {
      // Making visible by clicked index
      this.viewActions[index] = true;
    }

  }

  checkAll() {
    console.log('Hey i\'m under development! :)');
  }


  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (event.target.className.indexOf('ot-dropdown__icon') === -1) {
      this.otCms.close(false);
    }
  }
}
