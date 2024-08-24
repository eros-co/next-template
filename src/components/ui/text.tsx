import * as React from 'react'
import { cn } from '@/lib'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const textVariants = cva('text-base font-normal leading-normal tracking-normal', {
  variants: {
    size: {
      '1': 'text-xs tracking-[0.0025em]',
      '2': 'text-sm tracking-[0em]',
      '3': 'text-base tracking-[0em]',
      '4': 'text-lg tracking-[-0.0025em]',
      '5': 'text-xl tracking-[-0.005em]',
      '6': 'text-2xl tracking-[-0.00625em]',
      '7': 'text-3xl tracking-[-0.0075em]',
      '8': 'text-4xl tracking-[-0.01em]',
      '9': 'text-5xl tracking-[-0.025em]',
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
    size: '3',
    weight: 'regular',
    align: 'left',
  },
})

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ size, align, weight, className, as: Tag = 'span', asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : Tag

    return (
      <Comp ref={ref} className={cn(textVariants({ size, align, weight, className }))} {...props} />
    )
  },
)

type TextElement = 'span' | 'p' | 'div' | 'label'

export interface TextProps
  extends React.HTMLAttributes<TextElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
  as?: TextElement
}

export { Text, textVariants }
