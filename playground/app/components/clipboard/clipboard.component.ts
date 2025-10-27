import { Component } from '@angular/core';
import { FsClipboardComponent } from '../../../../src/app/components/clipboard/clipboard.component';


@Component({
    selector: 'app-clipboard',
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.scss'],
    standalone: true,
    imports: [FsClipboardComponent]
})
export class ClipboardComponent {

}
