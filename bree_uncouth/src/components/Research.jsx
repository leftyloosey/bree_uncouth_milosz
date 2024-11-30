import React from 'react'

import ProjectTile from './ProjectTile'

import soviet_union_apart from '../assets/images/soviet_union_apart.jpg'
import jsah from '../assets/images/jsah.png'
import mass_housing from '../assets/images/mass_housing_ukraine.webp'
import grand_old from '../assets/images/grand_old.jpg'
import new_books from '../assets/images/new_books.jpg'
import exhibit_poster from '../assets/images/exhibit_poster.jpg'
import back_porch from '../assets/images/back_porch.jpg'
import cover_issue from '../assets/images/cover_issue_13.jpg'

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
    link: 'https://dom-publishers.com/products/mass-housing-in-ukraine-hardcover',
    img: mass_housing,
  }
  const grand_old_tile = {
    link: '',
    img: grand_old,
  }
  const new_books_tile = {
    link: '',
    img: new_books,
  }
  const exhibit_poster_tile = {
    link: '',
    img: exhibit_poster,
  }
  const back_porch_tile = {
    link: '',
    img: back_porch,
  }
  const cover_issue_tile = {
    link: 'https://ewjus.com/index.php/ewjus/article/view/374',
    img: cover_issue,
  }

  return (
    <div className=''>
      <div className='flex justify-around flex-col align-center gap-4 mt-4 ml-2 mr-2 md:flex-row'>
        <ProjectTile project={soviet_union_apart_tile} />
        <ProjectTile project={jsah_tile} />
        <ProjectTile project={grand_old_tile} />
        <ProjectTile project={mass_housing_tile} />
      </div>
      <div className='flex justify-around flex-col gap-4 mt-4 ml-2 mr-2 md:flex-row'>
        <ProjectTile project={new_books_tile} />
        <ProjectTile project={exhibit_poster_tile} />
        <ProjectTile project={back_porch_tile} />
        <ProjectTile project={cover_issue_tile} />
      </div>
    </div>
    // <div class='flex flex-col'>
    //   <ul class=''>
    //     <li>
    //       <ProjectTile project={soviet_union_apart_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={back_porch_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={jsah_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={mass_housing_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={exhibit_poster_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={new_books_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={cover_issue_tile} />
    //     </li>
    //     <li>
    //       <ProjectTile project={grand_old_tile} />
    //     </li>
    //   </ul>
    // </div>
  )
}

export default Research
