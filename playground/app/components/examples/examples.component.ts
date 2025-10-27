import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { CopyComponent } from '../copy/copy.component';
import { ClipboardButtonComponent } from '../clipboard-button/clipboard-button.component';
import { ClipboardComponent } from '../clipboard/clipboard.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, CopyComponent, ClipboardButtonComponent, ClipboardComponent]
})
export class ExamplesComponent {
  public config = environment;
}
