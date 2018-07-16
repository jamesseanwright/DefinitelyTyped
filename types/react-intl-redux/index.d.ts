// Type definitions for react-intl-redux
// Project: https://github.com/ratson/react-intl-redux
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { Component } from "react";
import { Action } from "redux"
import { Provider as ReduxProvider } from "react-redux"
import { IntlProvider as ReactIntlProvider } from "react-intl"

interface IntlState {
    locale: string
    messages: any
}

interface IntlProviderProps {
  intlSelector?: ({ intl }: { intl: IntlState }) => IntlState;
}

interface IntlAction extends Action {
    payload?: IntlState
}

export function intlReducer(state: IntlState, action: IntlAction): IntlState
export function updateIntl (opts: IntlState): IntlAction
export class IntlProvider extends Component<ReactIntlProvider.Props & IntlProviderProps> {}
export class Provider extends ReduxProvider {}
