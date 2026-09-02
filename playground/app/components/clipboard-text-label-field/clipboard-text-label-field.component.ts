import { Component } from '@angular/core';

import { FsLabelModule } from '@firestitch/label';

import { FsClipboardTextComponent } from '../../../../src/app/components/clipboard-text/clipboard-text.component';


@Component({
  selector: 'app-clipboard-text-label-field',
  templateUrl: './clipboard-text-label-field.component.html',
  styleUrls: ['./clipboard-text-label-field.component.scss'],
  standalone: true,
  imports: [FsLabelModule, FsClipboardTextComponent],
})
export class ClipboardTextLabelFieldComponent {

  public apiKey = 'sk_live_51M2n3B4v5C6x7Z8y9A0b';

}
