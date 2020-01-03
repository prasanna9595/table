import {
  Component, OnInit, Input, ViewChild,
  AfterViewChecked, ChangeDetectorRef, NgZone, HostListener
} from '@angular/core';
import { OtBreadCrumb } from '../ot-bread-crumb.interface';
import { OtContextMenu, IOtCMenu } from '../../ot-context-menu-module/ot-context-menu.interface';
import { OtBreadCrumbList } from '../ot-bread-crumb-list.interface';
import { Router } from '@angular/router';
import { OtContextMenuService } from '../../ot-context-menu-module/ot-context-menu.service';

@Component({
  selector: 'crp-ot-bread-crumb',
  templateUrl: './ot-bread-crumb.component.html',
  styleUrls: ['./ot-bread-crumb.component.scss']
})
export class OtBreadCrumbComponent implements OnInit, AfterViewChecked {

  @Input() breadcrumbs: OtBreadCrumb;
  @ViewChild('ot_breadcrumbs_ref', { static: true }) breadcrumbreference;
  @ViewChild('ot_breadcrumbs_ul_ref', { static: false }) breadcrumbListreference;
  showExtraBreadcrumbs: boolean;
  otContextMenu: OtContextMenu;
  initialContainerWidth: number;
  extraBreadcrumbsClicked: boolean;
  divisionFactor: number;
  showBreadCrumbs: boolean;
  playArea: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private otCms: OtContextMenuService,
    private ngZone: NgZone,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.playArea = document.getElementById('ot-breadcrumbs').clientWidth;
    this.initBreadcrumbs();
  }

  initBreadcrumbs() {
    this.showExtraBreadcrumbs = false;
    this.extraBreadcrumbsClicked = false;
    this.showBreadCrumbs = true;
    this.cdr.detectChanges();
    this.initialContainerWidth = this.breadcrumbreference.nativeElement.offsetWidth;
  }

  ngAfterViewChecked(): void {
    this.checkForExtraBreadcrumbs();
  }

  checkForExtraBreadcrumbs() {
    if (this.initialContainerWidth > this.playArea) {
      this.toggleExtraBreadcrumbs(this.initialContainerWidth - this.playArea);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngZone.run(() => {
      this.showBreadCrumbs = false;
      this.showExtraBreadcrumbs = false;
      this.cdr.detectChanges();
      this.playArea = document.getElementById('ot-breadcrumbs').clientWidth;
      this.initBreadcrumbs();
      this.checkForExtraBreadcrumbs();
    });
  }

  toggleExtraBreadcrumbs(differenceWidth: number) {
    this.showExtraBreadcrumbs = true;
    let accumulatedWidth = 0;
    let index = 1;
    if (this.breadcrumbListreference && this.breadcrumbListreference.nativeElement) {
      for (const item of this.breadcrumbListreference.nativeElement.children) {
        accumulatedWidth = accumulatedWidth + item.offsetWidth;
        index++;
        if (accumulatedWidth > differenceWidth) {
          this.divisionFactor = index;
          break;
        }
      }
    }
    this.cdr.detectChanges();
  }

  toggleContextMenu(list: OtBreadCrumbList[]) {
    const contextMenuList = [];
    list.forEach((item, index) => {
      const temMenu: IOtCMenu = {
        title: item.name,
        route: item.link
      };
      contextMenuList.push(temMenu);
      // contextMenuList[index] = item.name;
    });
    console.log(contextMenuList);
    // contextMenuList
    this.otContextMenu = {
      displayOptions: {
        icon: ''
      },
      menulist: contextMenuList,
      isUserMenu: false
    };
    this.extraBreadcrumbsClicked = !this.extraBreadcrumbsClicked;
  }

  doSelectedAction(event: any) {
    console.log('breadcrum selected ', event);
    if (event.MenuItem && event.MenuItem.route) {
      this.router.navigate([event.MenuItem.route]);
    }
    this.otCms.close(false);
    this.extraBreadcrumbsClicked = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (event.target.className.indexOf('ot-dropdown__icon') === -1) {
      this.otCms.close(false);
      this.extraBreadcrumbsClicked = false;
    }
  }

}
