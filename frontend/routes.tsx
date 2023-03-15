import { capitalCase, paramCase } from "change-case";
import MainLayout from "Frontend/views/MainLayout.js";
import * as React from "react";
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  useMatches,
} from "react-router-dom";
import AppLayoutSimple from "./views/app-layout/AppLayoutSimple.js";
import ButtonDisabled from "./views/button/ButtonDisabled.js";
import ButtonSimple from "./views/button/ButtonSimple.js";
import ButtonStyles from "./views/button/ButtonStyles.js";
import ChartSimple from "./views/chart/ChartSimple.js";
import CheckboxDisabled from "./views/checkbox/CheckboxDisabled.js";
import CheckboxGroupSimple from "./views/checkbox/CheckboxGroupSimple.js";
import CheckboxIndeterminate from "./views/checkbox/CheckboxIndeterminate.js";
import CheckboxSimple from "./views/checkbox/CheckboxSimple.js";
import ComboBoxCustomValue from "./views/combo-box/ComboBoxCustomValue.js";
import ComboBoxSimple from "./views/combo-box/ComboBoxSimple.js";
import ConfirmDialogSimple from "./views/confirm-dialog/ConfirmDialogSimple.js";
import CustomFieldSimple from "./views/custom-field/CustomFieldSimple.js";
import DatePickerNoAutoOpen from "./views/date-picker/DatePickerNoAutoOpen.js";
import DatePickerRange from "./views/date-picker/DatePickerRange.js";
import DatePickerSimple from "./views/date-picker/DatePickerSimple.js";
import DateTimePickerSimple from "./views/date-time-picker/DateTimePickerSimple.js";
import DateTimePickerStep from "./views/date-time-picker/DateTimePickerStep.js";
import DateTimePickerStepSecond from "./views/date-time-picker/DateTimePickerStepSecond.js";
import DetailsContent from "./views/details/DetailsContent.js";
import DetailsSimple from "./views/details/DetailsSimple.js";
import DialogSimple from "./views/dialog/DialogSimple.js";
import EmailPattern from "./views/email/EmailPattern.js";
import EmailSimple from "./views/email/EmailSimple.js";
import FormLayoutLabelPosition from "./views/form-layout/FormLayoutLabelPosition.js";
import FormLayoutSimple from "./views/form-layout/FormLayoutSimple.js";
import GridFiltering from "./views/grid/GridFiltering.js";
import GridMultipleSelection from "./views/grid/GridMultipleSelection.js";
import GridRenderers from "./views/grid/GridRenderers.js";
import GridSimple from "./views/grid/GridSimple.js";
import GridSingleSelection from "./views/grid/GridSingleSelection.js";
import GridSorting from "./views/grid/GridSorting.js";
import HorizontalLayoutSimple from "./views/horizontal-layout/HorizontalLayoutSimple.js";
import InputFieldHelper from "./views/input-fields/InputFieldHelper.js";
import InputFieldLabel from "./views/input-fields/InputFieldLabel.js";
import InputFieldNonEditable from "./views/input-fields/InputFieldNonEditable.js";
import InputFieldRequired from "./views/input-fields/InputFieldRequired.js";
import IntegerFieldSimple from "./views/integer-field/IntegerFieldSimple.js";
import NumberFieldSimple from "./views/number-field/NumberFieldSimple.js";
import NumberFieldStep from "./views/number-field/NumberFieldStep.js";
import NumberFieldStepper from "./views/number-field/NumberFieldStepper.js";
import PasswordFieldReveal from "./views/password-field/PasswordFieldReveal.js";
import PasswordFieldSimple from "./views/password-field/PasswordFieldSimple.js";
import RadioButtonDisabled from "./views/radio-button/RadioButtonDisabled.js";
import RadioButtonOrientationHorizontal from "./views/radio-button/RadioButtonOrientationHorizontal.js";
import RadioButtonOrientationVertical from "./views/radio-button/RadioButtonOrientationVertical.js";
import RadioButtonReadOnly from "./views/radio-button/RadioButtonReadOnly.js";
import RadioButtonSimple from "./views/radio-button/RadioButtonSimple.js";
import RichTextEditorSimple from "./views/rich-text-editor/RichTextEditorSimple.js";
import ScrollerSimple from "./views/scroller/ScrollerSimple.js";
import SelectDisabledItems from "./views/select/SelectDisabledItems.js";
import SelectDividers from "./views/select/SelectDividers.js";
import SelectPlaceholder from "./views/select/SelectPlaceholder.js";
import SelectSimple from "./views/select/SelectSimple.js";
import SplitLayoutOrientation from "./views/split-layout/SplitLayoutOrientation.js";
import SplitLayoutSimple from "./views/split-layout/SplitLayoutSimple.js";
import TabsOrientation from "./views/tabs/TabsOrientation.js";
import TabsSimple from "./views/tabs/TabsSimple.js";
import TabsStates from "./views/tabs/TabsStates.js";
import TextAreaSimple from "./views/text-area/TextAreaSimple.js";
import TextFieldAlignment from "./views/text-field/TextFieldAlignment.js";
import TextFieldClearButton from "./views/text-field/TextFieldClearButton.js";
import TextFieldPlaceholder from "./views/text-field/TextFieldPlaceholder.js";
import TextFieldSimple from "./views/text-field/TextFieldSimple.js";
import TimePickerSimple from "./views/time-picker/TimePickerSimple.js";
import TimePickerStep from "./views/time-picker/TimePickerStep.js";
import TimePickerStepSecond from "./views/time-picker/TimePickerStepSecond.js";
import VerticalLayoutSimple from "./views/vertical-layout/VerticalLayoutSimple.js";
import VirtualListSimple from "./views/virtual-list/VirtualListSimple.js";

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
  [AppLayoutSimple],
  [ButtonSimple, ButtonStyles, ButtonDisabled],
  [ChartSimple],
  [
    CheckboxSimple,
    CheckboxGroupSimple,
    CheckboxDisabled,
    CheckboxIndeterminate,
  ],
  [ComboBoxSimple, ComboBoxCustomValue],
  [ConfirmDialogSimple],
  [CustomFieldSimple],
  [DatePickerSimple, DatePickerNoAutoOpen, DatePickerRange],
  [DateTimePickerSimple, DateTimePickerStep, DateTimePickerStepSecond],
  [DetailsSimple, DetailsContent],
  [DialogSimple],
  [EmailSimple],
  [EmailPattern],
  [FormLayoutSimple, FormLayoutLabelPosition],
  [
    GridSimple,
    GridSingleSelection,
    GridMultipleSelection,
    GridSorting,
    GridFiltering,
    GridRenderers,
  ],
  [HorizontalLayoutSimple],
  [
    InputFieldLabel,
    InputFieldHelper,
    InputFieldRequired,
    InputFieldNonEditable,
  ],
  [IntegerFieldSimple],
  [NumberFieldSimple, NumberFieldStepper, NumberFieldStep],
  [PasswordFieldSimple, PasswordFieldReveal],
  [
    RadioButtonSimple,
    RadioButtonReadOnly,
    RadioButtonDisabled,
    RadioButtonOrientationVertical,
    RadioButtonOrientationHorizontal,
  ],
  [RichTextEditorSimple],
  [ScrollerSimple],
  [SelectSimple, SelectDividers, SelectDisabledItems, SelectPlaceholder],
  [SplitLayoutSimple, SplitLayoutOrientation],
  [TabsSimple, TabsStates, TabsOrientation],
  [TextAreaSimple],
  [
    TextFieldSimple,
    TextFieldPlaceholder,
    TextFieldClearButton,
    TextFieldAlignment,
  ],
  [TimePickerSimple, TimePickerStep, TimePickerStepSecond],
  [VerticalLayoutSimple],
  [VirtualListSimple],
].map((group, index) => {
  return group.map((element) => ({
    element,
    icon: index % 2 ? "dot-circle" : "circle",
  }));
});

export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout />,
    handle: { icon: "null", title: "Main" },
    children: [
      {
        path: "/",
        element: (
          <div className="flex p-l gap-m">
            Select the example in the navigation menu
          </div>
        ),
        handle: { icon: "home", title: "Home" },
      },
      ...examples.flat().map(({ element, icon }) => ({
        path: paramCase(element.name),
        element: (
          <div className="flex p-l gap-m">
            {React.createElement(element, {})}
          </div>
        ),
        handle: { icon, title: capitalCase(element.name) },
      })),
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
