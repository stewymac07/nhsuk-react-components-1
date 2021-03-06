/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '../../src';

const stories = storiesOf('FormElementBehaviour: DateInput', module);

stories
  .add('Standard', () => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput onChange={e => console.log(e.target.value)} hint="Test hint" label="Test label" />
    </div>
  ))
  .add('Standard with Error', () => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput
        onChange={e => console.log(e.target.value)}
        error="Test Error"
        hint="Test hint"
        label="Test label"
      />
      <h5>Component with specific field errors</h5>

      <DateInput
        onChange={e => console.log(e.target.value)}
        error="Test Error"
        hint="Test hint"
        label="Test label"
      >
        <DateInput.Day error={false} />
        <DateInput.Month />
        <DateInput.Year />
      </DateInput>
    </div>
  ))
  .add('Pre-populated (Individual Components)', () => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label">
          <DateInput.Day defaultValue={defaultValue.day} />
          <DateInput.Month defaultValue={defaultValue.month} />
          <DateInput.Year defaultValue={defaultValue.year} />
        </DateInput>
      </div>
    );
  })
  .add('Pre-populated (Wrapper)', () => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" defaultValue={defaultValue} />
      </div>
    );
  })
  .add('Controlled Element (Individual Components)', () => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label">
          <DateInput.Day value={value.day} />
          <DateInput.Month value={value.month} />
          <DateInput.Year value={value.year} />
        </DateInput>
      </div>
    );
  })
  .add('Controlled Element (Wrapper)', () => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" value={value} />
      </div>
    );
  })
  .add('Changeable Controlled Element', () => {
    const [value, setValue] = useState({ day: '20', month: '09', year: '1996' });

    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput
          hint="Test hint"
          label="Test label"
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
        />
      </div>
    );
  });
