import { cn } from '../../../utils/twinMerge';
import { cva, VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, FC } from 'react';

export const CustomLinkVariants = cva(
  'active:scale-95 transition-all, duration-300 rounded-sm inline-flex items-center justify-center font-semibold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer text-white',
  {
    variants: {
      variant: {
        default: 'bg-color-accent-main hover:bg-color-shade-main text-white',
        ghost: 'bg-white hover:bg-color-shadest text-gray-600',
      },
      size: {},
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof CustomLinkVariants> {}

const CustomLink: FC<LinkProps> = ({
  className,
  children,
  variant,
  size,

  ...props
}) => {
  return (
    <a
      className={cn(CustomLinkVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </a>
  );
};

export default CustomLink;
