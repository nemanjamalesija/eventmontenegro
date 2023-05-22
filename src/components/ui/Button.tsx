import { cn } from '../../../utils/twinMerge';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

export const buttonVariants = cva(
  'active:scale-95 py-2 px-10  transition-all, duration-300 rounded-md inline-flex items-center justify-center text-xl font-bold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-color-accent-main hover:bg-color-shade-main text-color-shadest',
        ghost: 'bg-white  hover:bg-color-shadest text-gray-700',
      },
      size: {
        default: 'py-3 px-10',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,

  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
