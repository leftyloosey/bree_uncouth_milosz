import React from 'react'

import ProjectTile from './ProjectTile'

import soviet_union_apart from '../assets/images/soviet_union_apart.jpg'
import jsah from '../assets/images/jsah.png'
import mass_housing from '../assets/images/mass_housing_ukraine.webp'

const Research = () => {
  const soviet_union_apart_tile = {
    link: 'https://www.cornellpress.cornell.edu/book/9781501771200/taking-the-soviet-union-apart-room-by-room/#bookTabs=1',
    img: soviet_union_apart,
  }
  const jsah_tile = {
    link: 'https://www.platformspace.net/translations/individually-generated-building-modifications',
    img: jsah,
  }
  const mass_housing_tile = {
    link: 'https://www.platformspace.net/translations/individually-generated-building-modifications',
    img: mass_housing,
  }

  return (
    <div>
      <ProjectTile project={soviet_union_apart_tile} />
      <ProjectTile project={jsah_tile} />
      <ProjectTile project={mass_housing_tile} />
    </div>
  )
}

export default Research
