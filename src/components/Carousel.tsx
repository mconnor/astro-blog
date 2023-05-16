import Carousel from 'react-multi-carousel'
import { ResponsiveType } from 'react-multi-carousel/lib/types'
import 'react-multi-carousel/lib/styles.css'
import Image from './Image.astro'

const W = 640
const H = 360

const BreakpointSlides: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1
  }
}

export default function Page() {
  return (
    <Carousel
      responsive={BreakpointSlides}
      ssr
      infinite
      itemClass="carousel-item"
      autoPlay>
      <Image
        alt="Gundam"
        src="http://via.placeholder.com/640x360"
        w={W}
        h={H}
      />
      <Image alt="Musgo" src="http://via.placeholder.com/640x360" w={W} h={H} />
      <Image
        alt="Valley"
        src="http://via.placeholder.com/640x360"
        w={W}
        h={H}
      />
      <Image alt="Beach" src="http://via.placeholder.com/640x360" w={W} h={H} />
      <Image alt="Torii" src="http://via.placeholder.com/640x360" w={W} h={H} />
    </Carousel>
  )
}
