// @flow
import update from 'react-addons-update';
import { Store } from 'Cs';

function createSelector(mainSelectorText: string, selectorText: string) {
  // construct selector
  const selector = {};
  let selectorPart = selector;
  if (mainSelectorText) {
    mainSelectorText.split('.').forEach(elem => {
      let newPart = {};
      selectorPart[elem] = newPart;
      selectorPart = newPart;
    });
  }
  selectorText.split('.').forEach(elem => {
    let newPart = {};
    selectorPart[elem] = newPart;
    selectorPart = newPart;
  });

  return function (act: string, value: any) {
    selectorPart[act] = value;
    return selector;
  };
}

let timeout: number;
let lastSelector: string;

export function createBinder(store: Store) {
  return function initBinder(actionName: string, mainSelectorText: string) {
    return function bind(selectorText: string, updateAction?: string = 'set') {

      const selector = createSelector(mainSelectorText, selectorText);
      const currentSelector = JSON.stringify(selector);

      return function changed(e: any) {
        // we dispatch only if user finished typing
        if (timeout && currentSelector === lastSelector) {
          clearTimeout(timeout);
        }

        let value = e.currentTarget ? e.currentTarget['value'] : e;

        //timeout = setTimeout(() => {
          store.dispatch({
            type: actionName,
            selector,
            action: updateAction,
            value
          });
        //}, 300);
        lastSelector = currentSelector;
      };
    };
  };
}

export function bindingReducer(actionName: string) {
  return function (state: any, action: any): any {
    if (action.type === actionName) {
      const act = '$' + (action.action ? action.action : 'set');
      const updateSelector = action.selector(act, action.value);

      return update(state, updateSelector);
    }
    return null;
  };
}
