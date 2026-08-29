import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { FsClipboardButtonDirective } from '../../directives/clipboard/clipboard.directive';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';


@Component({
    selector: 'fs-clipboard-button',
    templateUrl: './clipboard-button.component.html',
    styleUrls: ['./clipboard-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatIconButton,
        FsClipboardButtonDirective,
        MatTooltip,
        MatIcon,
    ],
})
export class FsClipboardButtonComponent implements OnDestroy {
  private _cdRef = inject(ChangeDetectorRef);

  @Input() public content: string | (() => string) | HTMLElement;
  @Input() public tooltip = 'Copy to clipboard';

  public showCheck = false;

  private _timeout;

  public copied(): void {
    clearTimeout(this._timeout);
    this.showCheck = true;
    this._cdRef.markForCheck();

    this._timeout = setTimeout(() => {
      this.showCheck = false;
      this._cdRef.markForCheck();
    }, 1000);
  }

  public ngOnDestroy(): void {
    clearTimeout(this._timeout);
  }

}
