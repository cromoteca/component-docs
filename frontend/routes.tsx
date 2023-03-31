import { capitalCase, paramCase } from "change-case";
import MainLayout from "Frontend/views/MainLayout.js";
import * as React from "react";
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  useMatches,
} from "react-router-dom";
import AccordionSimple from "./views/accordion/AccordionSimple.js";
import AppLayoutSimple from "./views/app-layout/AppLayoutSimple.js";
import AvatarGroupSimple from "./views/avatar/AvatarGroupSimple.js";
import AvatarSimple from "./views/avatar/AvatarSimple.js";
import ButtonDisabled from "./views/button/ButtonDisabled.js";
import ButtonSimple from "./views/button/ButtonSimple.js";
import ButtonStyles from "./views/button/ButtonStyles.js";
import ChartArea from "./views/chart/ChartArea.js";
import ChartColumn from "./views/chart/ChartColumn.js";
import ChartPie from "./views/chart/ChartPie.js";
import ChartPolar from "./views/chart/ChartPolar.js";
import ChartSimple from "./views/chart/ChartSimple.js";
import CheckboxDisabled from "./views/checkbox/CheckboxDisabled.js";
import CheckboxGroupSimple from "./views/checkbox/CheckboxGroupSimple.js";
import CheckboxIndeterminate from "./views/checkbox/CheckboxIndeterminate.js";
import CheckboxSimple from "./views/checkbox/CheckboxSimple.js";
import ComboBoxCustomValue from "./views/combo-box/ComboBoxCustomValue.js";
import ComboBoxSimple from "./views/combo-box/ComboBoxSimple.js";
import ConfirmDialogSimple from "./views/confirm-dialog/ConfirmDialogSimple.js";
import ContextMenuSimple from "./views/context-menu/ContextMenuSimple.js";
import CookieConsentLocalization from "./views/cookie-consent/CookieConsentLocalization.js";
import CookieConsentSimple from "./views/cookie-consent/CookieConsentSimple.js";
import CrudColumns from "./views/crud/CrudColumns.js";
import CrudEditorAside from "./views/crud/CrudEditorAside.js";
import CrudEditorBottom from "./views/crud/CrudEditorBottom.js";
import CrudEditorContent from "./views/crud/CrudEditorContent.js";
import CrudGridReplacement from "./views/crud/CrudGridReplacement.js";
import CrudOpenEditor from "./views/crud/CrudOpenEditor.js";
import CrudSimple from "./views/crud/CrudSimple.js";
import CrudToolbarCustom from "./views/crud/CrudToolbarCustom.js";
import CrudToolbarHidden from "./views/crud/CrudToolbarHidden.js";
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
import GridProEditableColumn from "./views/grid-pro/GridProEditableColumn.js";
import GridProEditOnClick from "./views/grid-pro/GridProEditOnClick.js";
import GridProEditors from "./views/grid-pro/GridProEditors.js";
import GridProEnterNextRow from "./views/grid-pro/GridProEnterNextRow.js";
import GridProHighlightEditable from "./views/grid-pro/GridProHighlightEditable.js";
import GridProHighlightReadOnly from "./views/grid-pro/GridProHighlightReadOnly.js";
import GridProPreventSave from "./views/grid-pro/GridProPreventSave.js";
import GridProSimple from "./views/grid-pro/GridProSimple.js";
import GridProSingleCellEdit from "./views/grid-pro/GridProSingleCellEdit.js";
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
import ListBoxCustomPresentation from "./views/list-box/ListBoxCustomPresentation.js";
import ListBoxSimple from "./views/list-box/ListBoxSimple.js";
import LoginSimple from "./views/login/LoginSimple.js";
import MenuBarCheckable from "./views/menu-bar/MenuBarCheckable.js";
import MenuBarOverflow from "./views/menu-bar/MenuBarOverflow.js";
import MenuBarSimple from "./views/menu-bar/MenuBarSimple.js";
import MessageInputSimple from "./views/message-input/MessageInputSimple.js";
import MessageInputWithList from "./views/message-input/MessageInputWithList.js";
import MessageListSimple from "./views/message-list/MessageListSimple.js";
import NotificationSimple from "./views/notification/NotificationSimple.js";
import NotificationThemes from "./views/notification/NotificationThemes.js";
import NumberFieldSimple from "./views/number-field/NumberFieldSimple.js";
import NumberFieldStep from "./views/number-field/NumberFieldStep.js";
import NumberFieldStepper from "./views/number-field/NumberFieldStepper.js";
import PasswordFieldReveal from "./views/password-field/PasswordFieldReveal.js";
import PasswordFieldSimple from "./views/password-field/PasswordFieldSimple.js";
import ProgressBarIndeterminate from "./views/progress-bar/ProgressBarIndeterminate.js";
import ProgressBarSimple from "./views/progress-bar/ProgressBarSimple.js";
import RadioButtonDisabled from "./views/radio-button/RadioButtonDisabled.js";
import RadioButtonOrientationHorizontal from "./views/radio-button/RadioButtonOrientationHorizontal.js";
import RadioButtonOrientationVertical from "./views/radio-button/RadioButtonOrientationVertical.js";
import RadioButtonReadOnly from "./views/radio-button/RadioButtonReadOnly.js";
import RadioButtonSimple from "./views/radio-button/RadioButtonSimple.js";
import RichTextEditorAutoHeight from "./views/rich-text-editor/RichTextEditorAutoHeight.js";
import RichTextEditorCompact from "./views/rich-text-editor/RichTextEditorCompact.js";
import RichTextEditorNoBorder from "./views/rich-text-editor/RichTextEditorNoBorder.js";
import RichTextEditorReadOnly from "./views/rich-text-editor/RichTextEditorReadOnly.js";
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
import TooltipOnElement from "./views/tooltip/TooltipOnElement.js";
import TooltipPosition from "./views/tooltip/TooltipPosition.js";
import TooltipSimple from "./views/tooltip/TooltipSimple.js";
import UploadSimple from "./views/upload/UploadSimple.js";
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
  [AccordionSimple],
  [AppLayoutSimple],
  [AvatarSimple, AvatarGroupSimple],
  [ButtonSimple, ButtonStyles, ButtonDisabled],
  [ChartSimple, ChartColumn, ChartArea, ChartPie, ChartPolar],
  [
    CheckboxSimple,
    CheckboxGroupSimple,
    CheckboxDisabled,
    CheckboxIndeterminate,
  ],
  [ComboBoxSimple, ComboBoxCustomValue],
  [ContextMenuSimple],
  [CookieConsentSimple, CookieConsentLocalization],
  [
    CrudSimple,
    CrudColumns,
    CrudOpenEditor,
    CrudEditorAside,
    CrudEditorBottom,
    CrudEditorContent,
    CrudGridReplacement,
    CrudToolbarCustom,
    CrudToolbarHidden,
  ],
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
  [
    GridProSimple,
    GridProEditOnClick,
    GridProSingleCellEdit,
    GridProEnterNextRow,
    GridProEditableColumn,
    GridProEditors,
    GridProPreventSave,
    GridProHighlightEditable,
    GridProHighlightReadOnly,
  ],
  [HorizontalLayoutSimple],
  [
    InputFieldLabel,
    InputFieldHelper,
    InputFieldRequired,
    InputFieldNonEditable,
  ],
  [IntegerFieldSimple],
  [ListBoxSimple, ListBoxCustomPresentation],
  [LoginSimple],
  [MessageInputSimple, MessageInputWithList],
  [MessageListSimple],
  [MenuBarSimple, MenuBarOverflow, MenuBarCheckable],
  [NotificationSimple, NotificationThemes],
  [NumberFieldSimple, NumberFieldStepper, NumberFieldStep],
  [PasswordFieldSimple, PasswordFieldReveal],
  [ProgressBarSimple, ProgressBarIndeterminate],
  [
    RadioButtonSimple,
    RadioButtonReadOnly,
    RadioButtonDisabled,
    RadioButtonOrientationVertical,
    RadioButtonOrientationHorizontal,
  ],
  [
    RichTextEditorSimple,
    RichTextEditorReadOnly,
    RichTextEditorAutoHeight,
    RichTextEditorCompact,
    RichTextEditorNoBorder,
  ],
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
  [TooltipSimple, TooltipOnElement, TooltipPosition],
  [UploadSimple],
  [VerticalLayoutSimple],
  [VirtualListSimple],
]
  .map((group, index) => {
    return group.map((element) => ({
      element,
      icon: index % 2 ? "dot-circle" : "circle",
    }));
  })
  .flat();

export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout />,
    handle: { icon: "null", title: "Main" },
    children: [
      {
        path: "/",
        element: (
          <div className="flex p-l gap-m">
            Select the example in the navigation menu. When opening the App
            Layout example, use the Back button to return to the menu.
          </div>
        ),
        handle: { icon: "home", title: "Home" },
      },
      ...examples.map(({ element, icon }) => ({
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
