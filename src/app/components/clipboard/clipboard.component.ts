import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FsClipboardButtonDirective } from '../../directives/clipboard/clipboard.directive';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
    selector: 'fs-clipboard',
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsClipboardButtonDirective, MatTooltip],
})
export class FsClipboardComponent {

  @Input() public content: string | (() => string) | HTMLElement;
  @Input() public tooltip = 'Copy to clipboard';

}
