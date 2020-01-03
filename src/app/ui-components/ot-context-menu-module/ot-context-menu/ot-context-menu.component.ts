import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { OtContextMenu } from '../ot-context-menu.interface';
import { OtContextMenuService } from '../ot-context-menu.service';

@Component({
  selector: 'crp-ot-context-menu',
  templateUrl: './ot-context-menu.component.html',
  styleUrls: ['./ot-context-menu.component.scss']
})
export class OtContextMenuComponent implements OnInit {

  @Input() otContextMenu: OtContextMenu;

  @Output() clickSelected = new EventEmitter<{ index: number, MenuItem: string }>();
  toggleV: boolean;
  contextMenuStyles: string;

  constructor(private cms: OtContextMenuService) { }

  ngOnInit() {
    this.contextMenuStyles = 'ot-dropdown';
    this.cms.menuClose$.subscribe(val => {
      if (!val) {
        this.toggleV = false;
        this.contextMenuStyles = 'ot-dropdown';
      }
    });
  }

  getSelectedItem(event, menuItem, i) {
    this.clickSelected.emit({
      index: i,
      MenuItem: menuItem
    });
    this.cms.close(false);
    event.stopPropagation();
  }

  toggle() {
    this.cms.close(false);
    this.toggleV = !this.toggleV;

    console.log(this.toggleV);
    if (this.toggleV && this.otContextMenu.displayOptions.position === 'right') {
      this.contextMenuStyles = 'ot-dropdown ot-dropdown--is-active ot-dropdown--is-right';
    } else if (this.toggleV) {
      this.contextMenuStyles = 'ot-dropdown ot-dropdown--is-active';
    } else {
      this.contextMenuStyles = 'ot-dropdown';
    }
  }

}
