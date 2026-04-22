import { CrmObjectPropertyField, ModuleFields, TextField } from '@hubspot/cms-components/fields';
import * as React from 'react';
import { Input } from '../Input/index.js';

export type FormFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'children' | 'disabled' | 'placeholder' | 'value' | 'className'
> & {
  label: string;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  className?: string;
};

const errorStyles = 'mt-1 font-sans text-xs font-medium text-red-500';

export function FormField({
  label,
  placeholder,
  value,
  errorMessage,
  isDisabled,
  id: idProp,
  className,
  ...props
}: FormFieldProps) {
  const autoId = React.useId();
  const id = idProp ?? autoId;
  const errorId = `${id}-error`;
  const isInvalid = Boolean(errorMessage);

  return (
    <div className="block">
      <Input
        {...props}
        id={id}
        label={label}
        value={value}
        placeholder={placeholder}
        isDisabled={isDisabled}
        aria-invalid={isInvalid || undefined}
        aria-describedby={isInvalid ? errorId : undefined}
        className={className}
      />
      {isInvalid ? (
        <div id={errorId} className={errorStyles}>
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
}

export const meta = {
  label: 'Form Field',
};

export const fields = (
  <ModuleFields>
    <TextField name="label" label="Label" />
    <TextField name="placeholder" label="Placeholder" />
    <CrmObjectPropertyField name="value" label="Value" objectType='CONTACT'/>
    <TextField name="errorMessage" label="Error Message" />
  </ModuleFields>
);