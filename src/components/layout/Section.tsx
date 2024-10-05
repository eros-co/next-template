import React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const sectionVariants = cva('w-full', {
  variants: {
    size: {
      sm: 'max-w-5xl',
      md: 'max-w-7xl',
      lg: 'max-w-8xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SectionVariants = typeof sectionVariants
export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<SectionVariants> {
  classNames: {
    section: string
    div: string
  }
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, classNames, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('tw-container flex justify-center', classNames.section)}
        {...props}
      >
        <div className={sectionVariants({ className: classNames.div })}>{children}</div>
      </section>
    )
  },
)

export { Section, sectionVariants }
