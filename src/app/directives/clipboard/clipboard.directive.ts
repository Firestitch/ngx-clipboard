import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

import { FsClipboard } from '../../services/clipboard-service';


@Directive({
    selector: '[fs-clipboard],[fsClipboard]',
    standalone: true,
})
export class FsClipboardButtonDirective {
  private _clipboard = inject(FsClipboard);
  private _elRef = inject(ElementRef);


  @HostListener('click')
  public clicked() {
    this.copy();
  }

  @Input() public content: string | (() => string) | HTMLElement;

  public copy(): void {
    if(this.content === undefined) {
      this.content = this._elRef.nativeElement;
    }

    let content = '';
    if(this.content instanceof Function) {
      content = this.content();
    } else if(this.content instanceof HTMLElement) {
      content = this.content.innerText;
    } else if(this.content) {
       content = this.content;
    }

    this._clipboard.copy(content);
  }
}
