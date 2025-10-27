import { Component } from '@angular/core';
import { FsClipboardButtonComponent } from '../../../../src/app/components/clipboard-button/clipboard-button.component';


@Component({
    selector: 'app-clipboard-button',
    templateUrl: './clipboard-button.component.html',
    styleUrls: ['./clipboard-button.component.scss'],
    standalone: true,
    imports: [FsClipboardButtonComponent]
})
export class ClipboardButtonComponent {

  public content = (): string => {
    return 'Content from Function!';
  }
}
