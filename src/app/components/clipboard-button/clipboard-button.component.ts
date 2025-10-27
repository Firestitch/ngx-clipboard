import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { FsClipboardButtonDirective } from '../../directives/clipboard/clipboard.directive';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';


@Component({
    selector: 'fs-clipboard-button',
    templateUrl: './clipboard-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatIconButton,
        FsClipboardButtonDirective,
        MatTooltip,
        MatIcon,
    ],
})
export class FsClipboardButtonComponent {

  @Input() public content: string | (() => string) | HTMLElement;
  @Input() public tooltip = 'Copy to clipboard';

}
