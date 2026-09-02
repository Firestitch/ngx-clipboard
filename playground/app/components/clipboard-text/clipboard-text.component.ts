import { Component } from '@angular/core';

import { FsClipboardTextComponent } from '../../../../src/app/components/clipboard-text/clipboard-text.component';


@Component({
  selector: 'app-clipboard-text',
  templateUrl: './clipboard-text.component.html',
  styleUrls: ['./clipboard-text.component.scss'],
  standalone: true,
  imports: [FsClipboardTextComponent],
})
export class ClipboardTextComponent {

  public content = (): string => {
    return 'Content from Function!';
  };

}
