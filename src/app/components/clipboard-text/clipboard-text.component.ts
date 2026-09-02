import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { FsClipboardButtonComponent } from '../clipboard-button/clipboard-button.component';


@Component({
  selector: 'fs-clipboard-text',
  templateUrl: './clipboard-text.component.html',
  styleUrls: ['./clipboard-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FsClipboardButtonComponent],
})
export class FsClipboardTextComponent {

  @Input() public content: string | (() => string) | HTMLElement;
  @Input() public tooltip = 'Copy to clipboard';

  @ViewChild('text', { static: true })
  private _text: ElementRef<HTMLElement>;

  // When no content is supplied the projected text is what gets copied, which
  // is the common case for this component.
  public get buttonContent(): string | (() => string) | HTMLElement {
    return this.content ?? this._text.nativeElement;
  }

}
