import { Injectable, inject } from '@angular/core';

import { FsMessage } from '@firestitch/message';


@Injectable({
  providedIn: 'root',
})
export class FsClipboard {
  private _message = inject(FsMessage);


  public copyHtml(html: string, options: { showMessage?: boolean } = { showMessage: true}): Promise<void> {
    const el = document.createElement('div');
    el.innerHTML = html;
    const data = {
      'text/html': html,
      'text/plain': el.textContent || el.innerText || '',
    };

    return this.copy(data, options);
  }

  public copy(data: string | { [key: string]: any }, options: { showMessage?: boolean } = { showMessage: true}): Promise<void> {
    return new Promise((resolve, reject) => {
     this._createWrite(data)      
        .then(() => {
          if(options.showMessage === true || options.showMessage === undefined) {
            this._message.success('Copied to clipboard');
          }

          resolve();
        }, (e) => {
          console.error(e);
          this._message.error('Failed to copy to clipboard');
          reject();
        });
    });
  }

  private _createWrite(data): Promise<any> {
    if(typeof data === 'object') {
        data = Object.keys(data)
          .reduce((accum, type: any) => {
            const value = data[type] instanceof Blob ? data[type] : new Blob([data[type]], { type });

            return {
              ...accum,
              [type]: value,
            };
          }, {});

      return navigator.clipboard.write([
        new ClipboardItem(data)
      ]);
    } 

    return navigator.clipboard.writeText(data);
  }

}