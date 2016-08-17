// @flow

import moment from 'moment';
import marked from 'marked';
import sAlert from 'react-s-alert';
import swal from 'sweetalert2';
import mf from '../configs/i18n';
import store from '../configs/store';
import { push } from 'react-router-redux';

import { Saveable, AsyncCallback } from 'Cs';
import { Group } from 'Cs/Entities';

export const RouterUtils = {
  encodeUrlName(name: string): string {
    let result = name.replace(/:/g, '');
    result = result.replace(/ - /g, '-');
    result = result.replace(/\W/g, '-');
    return result.replace(/--/g, '-');
  },
  go(route: string) {
    store.dispatch(push(route));
  }
};

/////////////////////////////////////////////////////////////////////////////
// UI Utils                                                                //
/////////////////////////////////////////////////////////////////////////////

let saveFunction: Saveable;
let saveCallback: AsyncCallback;

const saveListener = function (e: KeyboardEvent) {
  if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    saveFunction(); // UiUtils.announceSaved()
    if (saveCallback) {
      saveCallback();
    }
  }
};

export const UiUtils = {
  datePicker(elem: Element, context: any, field: string) {
    $(elem).pickadate({
      format: 'dd mmm yyyy',
      onSet: function (value: any) {
        context[field] = new Date(value.select);
      }
    });
  },
  niceDate(date: Date) {
    if (date) {
      return moment(date).format('DD MMM YYYY');
    }
    return '';
  },
  fullDate(date: Date) {
    if (date) {
      return moment(date).format('DD MMM YYYY, HH:mm');
    }
    return '';
  },
  relativeDate(date: Date) {
    if (date) {
      return moment(date).fromNow();
    }
    return '';
  },
  previewMarkdown(text: string, length: number): string {
    if (!text) {
      return '';
    }

    if (length == null) {
      length = text.length;
    }

    let html = marked(text);
    let regex = /(<([^>]+)>)/ig;
    html = html.replace(regex, '');

    // find a good cutoff position
    while (html[length] !== ' ' && length < html.length) {
      length++;
    }

    html = html.substring(0, length + 1);
    html = html.replace(/(\r|\n)/, ' ');

    // remove all double spaces
    while (html.indexOf('  ') >= 0) {
      html = html.replace(/ {2}/g, ' ');
    }

    // add elipsis
    if (text.length > length) {
      html += '...';
    }

    return html;
  },
  hResize(lDiv: JQuery, rDiv: JQuery, marker: JQuery, evt: any) {
    return function (e: MouseEvent) {
      let minLeft = lDiv.position().left + 50;
      let maxRight = rDiv.position().left + rDiv.width() - 50;
      if (e.clientX > minLeft && e.clientX < maxRight) {
        lDiv.css('right', (((window.innerWidth - e.clientX) / window.innerWidth) * 100) + '%');
        rDiv.css('left', ((e.clientX / window.innerWidth) * 100) + '%');
        marker.css('left', ((e.clientX / window.innerWidth) * 100) + '%');

        // notify clients on resizing event
        evt.emit(); // type of EventObject
      }
    };
  },
  relativeResize(lDiv: JQuery, rDiv: JQuery, marker: JQuery, evt: any) {
    return function (e: MouseEvent) {

      let left = lDiv.offset().left;
      let relativeWindow = window.innerWidth - left;
      let relativePosition = e.clientX - left;
      let minLeft = left + 150;
      let maxRight = window.innerWidth - 300;

      if (e.clientX > minLeft && e.clientX < maxRight) {
        lDiv.css('width', ((relativePosition / relativeWindow) * 100) + '%');
        rDiv.css('width', (((relativeWindow - relativePosition) / relativeWindow) * 100) + '%');
        marker.css('left', ((relativePosition / relativeWindow) * 100) + '%');

        // notify clients on resizing event
        evt.emit();
      }
    };
  },
  resizer(left: any, right: any, resizer: any, evt: any) {
    const hresize = UiUtils.relativeResize($(left), $(right), $(resizer), evt);

    window.addEventListener('mousemove', hresize, true);
    window.addEventListener('mouseup', function () {
      window.removeEventListener('mousemove', hresize, true);
    }, true);
    return false;
  },
  pageTransition() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    $('#main').hide().fadeIn(1000);
  },
  removeSaveListener() {
    document.removeEventListener('keydown', saveListener);
  },
  registerSaveListener(saveFunc: Saveable, callback?: Function) {
    saveFunction = saveFunc;
    saveCallback = callback;

    // TODO: ApplicationState.editor = obj;
    UiUtils.removeSaveListener();
    document.addEventListener('keydown', saveListener, false);
  },
  alert(text: string, params?: Object, options?: Object) {
    sAlert.success(mf(text, params), options);
  },
  alertError(text: string, params?: Object, options?: Object) {
    sAlert.error(mf(text, params), options);
  },
  announce(infoText: string, errorText: string, callback?: AsyncCallback): AsyncCallback {
    return (error: Error, value: any) => {
      if (error) {
        if (error.reason != null || error.details != null) {
          sAlert.error(mf(errorText) + ': ' + (error.reason ? error.reason : error.message), { type: 'error' });
        } else {
          sAlert.error(error.toString());
        }
      } else {
        sAlert.success(mf(infoText));
      }

      if (callback) {
        callback(error, value);
      }
    };
  },
  announceCreated(callback?: AsyncCallback): AsyncCallback {
    return UiUtils.announce('info.createSuccess', 'info.createError', callback); // mf('info.createSuccess', ''); mf('info.createError', '');
  },
  announceSaved(callback?: AsyncCallback): AsyncCallback {
    return UiUtils.announce('info.saveSuccess', 'info.saveError', callback); // mf('info.saveSuccess', ''); mf('info.saveError', '');
  },
  announceDeleted(callback?: AsyncCallback): AsyncCallback {
    return UiUtils.announce('info.deleted', 'info.deleteFailed', callback); // mf('info.deleted', ''); mf('info.deleteFailed', '');
  },
  announceDuplicated(callback?: AsyncCallback): AsyncCallback {
    return UiUtils.announce('info.duplicated', 'info.duplicateFailed', callback); // mf('info.duplicated', ''); mf('info.duplicateFailed', '');
  },
  showMarkdownModal(raw: string, header?: string): void {
    let html = marked(raw);
    html = html.replace(/<table/g, '<table class=\'ui striped table\'');

    // now fill in the data
    $('#previewModalHeader').html(header ? mf(header) : mf('description'));
    let content = raw[0] === '?' ? mf(html) : html;
    content = UiUtils.parseText(content);

    $('#previewModalContent').html(content);
    $('#previewModal').modal('show');

    setTimeout(function () {
      $('#previewModal').modal('refresh');
    }, 1000);
  },
  alertDialog(title: string, text: string, type: string = 'error') {
    swal(mf(title), mf(text), type);
  },
  confirmDialog(callback: Function,
    text: string = 'deletingRecord',
    title: string = 'areYouSure',
    confirmButtonText: string = 'deleteIt',
    type: string = 'warning',
    closeOnConfirm: boolean = true) {
    swal({
      title: mf(title),
      text: mf(text),
      type: type,
      showCancelButton: true,
      confirmButtonText: mf(confirmButtonText)
    }).then(callback);
  },
  promptText(callback: Function, prompt: string, placeholder: string = '', validate: any = (val: string) => val) {
    swal({
      title: mf(prompt),
      input: 'text',
      inputPlaceholder: placeholder[0] === '!' ? mf(placeholder.substring(1)) : placeholder,
      showCancelButton: true,
      inputValidator: function (value: string) {
        return new Promise(function (resolve, reject) {
          if (validate(value)) {
            resolve();
          } else {
            reject(mf('validationError'));
          }
        });
      }
    }).then(function (result: string) {
      callback(result);
    });


  },
  promptOptions(callback: Function, prompt: string, placeholder: string, options: { [idx: string]: string }, validate: any = (val: string) => val) {
    swal({
      title: mf(prompt),
      input: 'select',
      inputOptions: options,
      inputPlaceholder: mf(placeholder),
      showCancelButton: true,
      // onOpen: () => {
      //   $('.swal2-select').dropdown();
      //
      //   let sel = $('.swal2-select')[0];
      //   Object.defineProperty(sel, 'value', {
      //     get: function() {
      //       return $('.swal2-modal select').val();
      //     },
      //     set: function(val: string) {
      //      // nothing
      //     }
      //   });
      // },
      inputValidator: function (value: string) {
        return new Promise(function (resolve, reject) {
          if (validate(value)) {
            resolve();
          } else {
            reject(mf('validationError'));
          }
        });
      }
    }).then(function (result: string) {
      callback(result);
    });
  },
  deletedDialog() {
    swal(mf('deleted'), mf('recordDeleted'), 'success');
  },
  parseMarkdown(text: string) {
    return marked(UiUtils.parseText(text));
  },
  parseText(text: string) {
    const bucket: string = process.env.awsBucket ? process.env.awsBucket : '';
    return text ? text.replace(/img src='/g, 'img src=\'' + bucket) : '';
  }
};

/////////////////////////////////////////
// SYSTEM UTILS                        //
/////////////////////////////////////////

export const ClassUtils = {
  groupByArray<T>(xs: Array<T>, key: string | Function): Group<T>[] {
    return xs.reduce(function (rv, x: any) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find((r: any) => r && r.key === v);
      if (el) {
        el.values.push(x);
      } else {
        rv.push({
          key: v,
          values: [x]
        });
      }
      return rv;
    }, []
    );
  },
  filterByObject<T>(obj: Object, filters: Object): T[] {
    let result: T[] = [];
    let filts = Object.getOwnPropertyNames(filters);
    let allGood = true;

    for (let key of Object.getOwnPropertyNames(obj)) {
      for (let filt of filts) {
        allGood = true;
        if (obj[key][filt] !== filters[filt]) {
          allGood = false;
          break;
        }
      }
      if (allGood) {
        result.push(obj[key]);
      }
    }

    return result;
  },
  filter<T>(obj: Object, filter: (s: T) => boolean) {
    let result: T[] = [];

    for (let key of Object.getOwnPropertyNames(obj)) {
      if (filter(obj[key])) {
        result.push(obj[key]);
      }
    }

    return result;
  },
  groupByObject(xs: Array<any>, key: string | Function) {
    return xs.reduce(function (rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      (rv[v] = rv[v] || []).push(x);
      return rv;
    }, {}
    );
  },
  indexArray(arr: any[]): any[] {
    if (arr.length === 0) {
      return arr;
    }

    if (typeof arr[0] === 'string') {
      let arr1 = [];
      for (let i = 0; i < arr.length; i++) {
        arr1.push({ value: arr[i], index: i, nextIndex: i + 1 });
      }
      return arr1;
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].index = i;
        arr[i].nextIndex = i + 1;
      }
    }

    return arr;
  },
  find<T>(obj: any, callback: (elem: any) => boolean): ?T {
    let props = Object.getOwnPropertyNames(obj);
    for (let prop of props) {
      if (callback(obj[prop])) {
        let res: T = obj[prop];
        return res;
      }
    }
    return null;
  }
};
