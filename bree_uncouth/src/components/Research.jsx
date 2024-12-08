import { useEffect } from 'react'
// import LazyAnimation from './LazyAnimation'
import Tiley from './Tiley'
import soviet_union_apart from '../assets/images/soviet_apart.jpg'
import jsah from '../assets/images/jsah.png'
import mass_housing from '../assets/images/mass_housing.png'
import grand_old from '../assets/images/grand_old.jpg'
import new_books from '../assets/images/new_books.jpg'
import exhibit_poster from '../assets/images/insecurity_exhibit.jpg'
import back_porch from '../assets/images/back_porch.jpg'
import cover_issue from '../assets/images/green_cover.jpg'
import aerial_map from '../assets/images/aerial_map.jpg'
import arcc from '../assets/images/arcc.png'
import bnw_crane from '../assets/images/bnw_crane.jpg'
import yk_fence from '../assets/images/yk_fence.jpg'

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
const aerial_map_tile = {
  link: '',
  img: aerial_map,
}
const arcc_tile = {
  link: '',
  img: arcc,
}
const bnw_crane_tile = {
  link: '',
  img: bnw_crane,
}
const yk_fence_tile = {
  link: '',
  img: yk_fence,
}

const Research = ({ menuShut }) => {
  function TimerEffect() {
    useEffect(() => {
      setTimeout(() => {
        menuShut()
      }, 2000)
    }, [])
  }
  TimerEffect()

  return (
    <div className='flex flex-wrap gap-4 mt-4 ml-4 justify-center md:flex-row lg:justify-normal'>
      <Tiley project={soviet_union_apart_tile} />

      <Tiley project={jsah_tile} />

      <Tiley project={mass_housing_tile} />

      <Tiley project={bnw_crane_tile} />

      <Tiley project={cover_issue_tile} />

      <Tiley project={yk_fence_tile} />

      <Tiley project={exhibit_poster_tile} />

      <Tiley project={aerial_map_tile} />

      <Tiley project={arcc_tile} />

      <Tiley project={new_books_tile} />

      <Tiley project={back_porch_tile} />

      <Tiley project={grand_old_tile} />
    </div>
  )
}

export default Research
