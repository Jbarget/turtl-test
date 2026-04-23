import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";

const headingVariants = tv({
  base: '',
  variants: {
    size: {
      large: 'text-5xl font-bold',
      medium: 'text-2xl font-bold',
      small: 'text-xl font-bold',
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});

type HeadingVariants = VariantProps<typeof headingVariants>;

type HeadingProps = React.ComponentPropsWithoutRef<"h1"> &
  HeadingVariants & {
    className?: string;
  };


export function Heading({ size, className, ...props }: HeadingProps) {
  return (
    <h1
      {...props}
      className={headingVariants({ size, class: className })}
    />
  );
}

const typographyVariants = tv({
  base: 'py-5',
  variants: {
    variant: {
      subheading: 'Inter font-bold',
      body: 'InterRegular, font-semibold',
      cta: 'InterRegular',
    },
    color: {
      primary: 'text-black',
      secondary: 'text-primary'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  defaultVariants: {
    variant: 'body',
    color: 'primary',
    size: 'md'
  }
});

type TypographyVariants = VariantProps<typeof typographyVariants>;

type TypographyProps = React.ComponentPropsWithoutRef<"p"> &
  TypographyVariants & {
    className?: string;
  };

export function Typography({ className, variant, color, size, ...props }: TypographyProps) {
  return (
    <p
      {...props}
      className={typographyVariants({ variant, color, size, class: className })}
    />
  );
}