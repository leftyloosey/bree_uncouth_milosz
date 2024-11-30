import React from 'react'

const Project_Tile = ({ project }) => {
  const { link, img } = project
  return (
    <div>
      <a href={link}>
        <img
          src={img}
          alt=''
          //   className='shadow-md mx-auto duration-200 w-60 hover:scale-105'
        />
      </a>
    </div>
  )
}

export default Project_Tile
