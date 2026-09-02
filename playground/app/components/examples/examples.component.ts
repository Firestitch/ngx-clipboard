import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { CopyComponent } from '../copy/copy.component';
import { ClipboardButtonComponent } from '../clipboard-button/clipboard-button.component';
import { ClipboardComponent } from '../clipboard/clipboard.component';
import { ClipboardTextComponent } from '../clipboard-text/clipboard-text.component';
import { ClipboardTextLabelFieldComponent } from '../clipboard-text-label-field/clipboard-text-label-field.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [
        FsExampleModule,
        CopyComponent,
        ClipboardButtonComponent,
        ClipboardComponent,
        ClipboardTextComponent,
        ClipboardTextLabelFieldComponent,
    ]
})
export class ExamplesComponent {
  public config = environment;
}
