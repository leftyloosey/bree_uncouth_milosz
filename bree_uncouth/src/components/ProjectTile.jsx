const Project_Tile = ({ vis, project }) => {
  const { link, img } = project

  return (
    <div className='group'>
      <div className='absolute pt-8 pl-4 transition-all opacity-0 transform translate-y-16 group-hover:-translate-y-0 group-hover:opacity-100'>
        <p className='max-w-60 font-medium'>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text
        </p>
      </div>
      <a className='' href={link}>
        <div className='group shadow-md'>
          <img
            className='w-64 h-64 group-hover:opacity-10'
            src={img}
            alt=''
            // className='w-96 h-96 shadow-md mx-auto duration-200 hover:scale-105'
          />
        </div>
      </a>
    </div>
  )
}

export default Project_Tile
