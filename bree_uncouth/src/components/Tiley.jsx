import { useInView } from 'react-intersection-observer'

const Tiley = ({ vis, project }) => {
  const { link, img } = project

  const LazyAnimat = () => {
    const { ref, inView } = useInView({
      rootMargin: '90px 0px -90px 0px',
      threshold: 1,
    })

    return (
      <div className='group'>
        <div
          ref={ref}
          className={`transition delay-600 duration-300 ease-in-out absolute pt-8 pl-4 opacity-0 transform translate-y-16 ${
            inView ? ' -translate-y-0 opacity-100' : ''
          }`}
        >
          <p
            ref={ref}
            className='transition delay-700 max-w-60 font-medium lg:invisible lg:group-hover:visible'
          >
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text
          </p>
        </div>
        <a className='' href={link}>
          <div className='group shadow-md'>
            <img
              className={`w-64 h-64 transition delay-500 duration-300 ease-in-out lg:group-hover:opacity-10 ${
                inView ? 'opacity-10 lg:opacity-100' : ''
              }`}
              src={img}
              alt=''
            />
          </div>
        </a>
      </div>
    )
  }

  return (
    <div className=''>
      <div className='mt-16 md:mt-4'></div>
      <LazyAnimat />
      <div className='mb-16 lg:mb-2'></div>
    </div>
  )
}

export default Tiley
