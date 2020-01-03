import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[crpOtContextMenu]'
})
export class OtContextMenuDirective {
  constructor(tpl?: TemplateRef<any>) { }

}
