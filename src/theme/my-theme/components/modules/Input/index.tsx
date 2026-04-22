import * as React from 'react';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'children' | 'disabled' | 'placeholder' | 'value' | 'className'
> & {
  label: string;
  placeholder?: string;
  value?: string;
  isDisabled?: boolean;
  className?: string;
};

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ');
}

const labelStyles = 'mb-1 block font-sans text-sm font-semibold text-text';
const inputStyles =
  'w-full rounded-md bg-surface px-3 py-2 font-sans text-sm text-text ring-1 ring-inset ring-neutral-500 placeholder:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:opacity-70';

export function Input({
  label,
  placeholder,
  value,
  isDisabled,
  id: idProp,
  className,
  ...props
}: InputProps) {
  const autoId = React.useId();
  const id = idProp ?? autoId;

  return (
    <label htmlFor={id} className="block">
      <span className={labelStyles}>{label}</span>
      <input
        {...props}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        className={cx(inputStyles, className)}
      />
    </label>
  );
}

export const meta = {
  label: 'Input',
};