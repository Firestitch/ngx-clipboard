import { Component } from '@angular/core';

import { FsClipboard } from '@firestitch/clipboard';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'app-copy',
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss'],
    standalone: true,
    imports: [MatButton]
})
export class CopyComponent {

  public constructor(
    private _clipboard: FsClipboard,
  ) {}

  public copy(): void {
    this._clipboard.copy('Copied Text!');
  }

  public copyHtml(): void {
    this._clipboard.copyHtml('<h1>This is 1st level heading</h1> This text');
  }

  public copyTypes(): void {
    this._clipboard.copy({
      'text/html': '<h1>This is 1st level heading</h1> This text',
      'text/plain': 'This is 1st level heading This text',
    });
  }
}
