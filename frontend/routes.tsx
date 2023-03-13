import { capitalCase, paramCase } from 'change-case';
import MainLayout from 'Frontend/views/MainLayout.js';
import * as React from 'react';
import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import AppLayoutSimple from './views/app-layout/AppLayoutSimple.js';
import ButtonDisabled from './views/button/ButtonDisabled.js';
import ButtonSimple from './views/button/ButtonSimple.js';
import ButtonStyles from './views/button/ButtonStyles.js';
import CheckboxDisabled from './views/checkbox/CheckboxDisabled.js';
import CheckboxGroupSimple from './views/checkbox/CheckboxGroupSimple.js';
import CheckboxIndeterminate from './views/checkbox/CheckboxIndeterminate.js';
import CheckboxSimple from './views/checkbox/CheckboxSimple.js';
import ComboBoxCustomValue from './views/combo-box/ComboBoxCustomValue.js';
import ComboBoxSimple from './views/combo-box/ComboBoxSimple.js';
import ConfirmDialogSimple from './views/confirm-dialog/ConfirmDialogSimple.js';
import CustomFieldSimple from './views/custom-field/CustomFieldSimple.js';
import DatePickerNoAutoOpen from './views/date-picker/DatePickerNoAutoOpen.js';
import DatePickerRange from './views/date-picker/DatePickerRange.js';
import DatePickerSimple from './views/date-picker/DatePickerSimple.js';
import DateTimePickerSimple from './views/date-time-picker/DateTimePickerSimple.js';
import DateTimePickerStep from './views/date-time-picker/DateTimePickerStep.js';
import DateTimePickerStepSecond from './views/date-time-picker/DateTimePickerStepSecond.js';
import Root from './views/root/Root.js';

export type MenuProps = Readonly<{
  icon?: string;
  title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
  Override<NonIndexRouteObject, ViewMeta>,
  {
    children?: ViewRouteObject[];
  }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

const examples = [
  AppLayoutSimple,
  ButtonSimple, ButtonStyles, ButtonDisabled,
  CheckboxSimple, CheckboxGroupSimple, CheckboxDisabled, CheckboxIndeterminate,
  ComboBoxSimple, ComboBoxCustomValue,
  ConfirmDialogSimple,
  CustomFieldSimple,
  DatePickerSimple, DatePickerNoAutoOpen, DatePickerRange,
  DateTimePickerSimple, DateTimePickerStep, DateTimePickerStepSecond,
];

export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout />,
    handle: { icon: 'null', title: 'Main' },
    children: [
      { path: '/', element: <Root />, handle: { icon: 'home', title: 'Home' } },
      ...examples.map(element => ({
        path: paramCase(element.name),
        element: React.createElement(element, {}),
        handle: { icon: 'dot-circle', title: capitalCase(element.name) },
      })),
    ]
  },
];

const router = createBrowserRouter([...routes]);
export default router;
