import { config } from 'app-config'
import Image from 'next/image'
import Link from 'next/link'

const DIMENSIONS = { w: 52, h: 52 }

const Logo = ({ w, h, src, link, className }: LogoProps) => {
  const width = w ?? DIMENSIONS.w
  const height = h ?? DIMENSIONS.h

  if (link) {
    return (
      <Link href={config.routes[0].href}>
        <Image
          width={width}
          height={height}
          src={src ?? `/images/${config.paths.logo}`}
          alt={`${config.name} Logo`}
          className={className}
        />
        <span className="sr-only">{config.name}</span>
      </Link>
    )
  } else {
    return (
      <>
        <Image
          width={width}
          height={height}
          src={src ?? `/images/${config.paths.logo}`}
          alt={`${config.name} Logo`}
          className={className}
        />
        <span className="sr-only">{config.name}</span>
      </>
    )
  }
}

export default Logo

interface LogoProps {
  link?: boolean
  className?: string
  src?: string
  w?: number | `${number}` | undefined
  h?: number | `${number}` | undefined
  children?: React.ReactNode
}
