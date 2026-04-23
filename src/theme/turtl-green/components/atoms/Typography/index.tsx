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

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = React.ComponentPropsWithoutRef<HeadingTag> &
  HeadingVariants & {
    as?: HeadingTag;
    className?: string;
  };


export function Heading({ as = "h1", size, className, ...props }: HeadingProps) {
  const Tag = as;
  return (
    <Tag
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