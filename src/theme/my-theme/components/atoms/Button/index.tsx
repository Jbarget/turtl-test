import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary';

type CommonProps = {
  label: string;
  variant?: ButtonVariant;
  className?: string;
};

export type ButtonAsButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: never;
  };

export type ButtonAsLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ');
}

const baseStyles =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 font-sans text-sm font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-black hover:opacity-90 focus-visible:outline-black',
  secondary:
    'bg-transparent text-primary ring-1 ring-inset ring-primary hover:bg-primary/10 focus-visible:outline-primary',
};

export function Button({
  label,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const classes = cx(baseStyles, variantStyles[variant], className);

  if (typeof (props as ButtonAsLinkProps).href === 'string') {
    const { href, ...anchorProps } = props as ButtonAsLinkProps;
    return (
      <a {...anchorProps} href={href} className={classes}>
        {label}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button {...buttonProps} type={type} className={classes}>
      {label}
    </button>
  );
}