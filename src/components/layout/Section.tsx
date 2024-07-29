import { cn } from '@/lib/utils'

const Section = ({
  className,
  sectionClassName,
  unset,
  secondary,
  children,
  ...props
}: SectionProps) => {
  const variants = cn(!unset && 'tw-container flex justify-center', className)

  if (unset) {
    return (
      <section className={variants} {...props}>
        {children}
      </section>
    )
  }

  return (
    <section
      className={cn(
        !unset && 'tw-container flex justify-center',
        secondary && 'bg-layout-bg',
        sectionClassName,
      )}
      {...props}
    >
      <div className={`${className} w-full max-w-7xl`}>{children}</div>
    </section>
  )
}

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  children: React.ReactNode
  className?: string
  sectionClassName?: string
  unset?: boolean
  secondary?: boolean
}

export default Section
