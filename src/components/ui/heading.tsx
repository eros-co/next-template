import * as React from 'react'
import { cn } from '@/lib'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const headingVariants = cva('m-0', {
  variants: {
    size: {
      '1': 'text-xs leading-4 tracking-[0.0025em]',
      '2': 'text-sm leading-[18px] tracking-normal',
      '3': 'text-base leading-[22px] tracking-normal',
      '4': 'text-lg leading-6 tracking-[-0.0025em]',
      '5': 'text-xl leading-[26px] tracking-[-0.005em]',
      '6': 'text-2xl leading-[30px] tracking-[-0.00625em]',
      '7': 'text-3xl leading-9 tracking-[-0.0075em]',
      '8': 'text-4xl leading-10 tracking-[-0.01em]',
      '9': 'text-5xl leading-[60px] tracking-[-0.025em]',
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: '6',
    weight: 'regular',
    align: 'left',
  },
})

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ size, align, weight, className, as: Tag = 'h1', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag

    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size, align, weight, className }))}
        {...props}
      />
    )
  },
)

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
  as?: HeadingElement
}

export { Heading, headingVariants }
