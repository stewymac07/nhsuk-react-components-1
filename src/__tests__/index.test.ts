import * as index from '../index';

describe('Index', () => {
  it('contains all expected elements', () => {
    expect(Object.keys(index)).toEqual([
      'ActionLink',
      'BackLink',
      'Breadcrumb',
      'Button',
      'DefaultButton',
      'ButtonLink',
      'CareCard',
      'Checkboxes',
      'ContentsList',
      'DateInput',
      'Details',
      'DoDontList',
      'ErrorMessage',
      'ErrorSummary',
      'Fieldset',
      'Footer',
      'Form',
      'useFormContext',
      'Header',
      'Hero',
      'Hint',
      'Icons',
      'ArrowLeftIcon',
      'ArrowRightIcon',
      'ArrowRightCircleIcon',
      'ChevronLeftIcon',
      'ChevronRightIcon',
      'CloseIcon',
      'CrossIcon',
      'SmallEmdashIcon',
      'EmdashIcon',
      'MinusIcon',
      'PlusIcon',
      'SearchIcon',
      'TickIcon',
      'Images',
      'Input',
      'InsetText',
      'Label',
      'Container',
      'Col',
      'Row',
      'ListPanel',
      'NavAZ',
      'Pagination',
      'Panel',
      'Promo',
      'Radios',
      'ReviewDate',
      'Select',
      'SkipLink',
      'SummaryList',
      'Table',
      'Textarea',
      'LedeText',
      'BodyText',
      'WarningCallout',
      'Clearfix',
      'ReadingWidth',
    ]);
  });
});
