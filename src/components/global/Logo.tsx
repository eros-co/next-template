import config from '../../../app.config'
import Image from "next/image";
import Link from "next/link";

const DIMENSIONS = { w: 52, h: 52 }

const Logo = ({ link, className, children, width = DIMENSIONS.w, height = DIMENSIONS.h }: LogoProps) => {


    if (link) {
        <Link href={config.routes[0].url} className={className}>
            <Image 
            width={width}
              height={height}
              src={'/parkstr-logo.png'}
              alt={`${config.name} Logo`}
          />
          <span className='sr-only'>{config.name}</span>
        </Link>
    } else {
      <>
      <Image 
            width={width}
              height={height}
              src={'/parkstr-logo.png'}
              alt={`${config.name} Logo`}
          />
          <span className='sr-only'>{config.name}</span>
      </>

    }
}

export default Logo;

interface LogoProps {
  children?: React.ReactNode
  className?: string
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
  link?: boolean
}